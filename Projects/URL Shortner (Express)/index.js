require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise'); // Note the /promise here!

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Create a connection pool to MySQL
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Test the connection
pool.getConnection()
    .then((connection) => {
        console.log('MySQL Database connected successfully!');
        connection.release(); // Always release the connection back to the pool
    })
    .catch((err) => {
        console.error('MySQL connection error: ', err.message);
    });

// Helper function to generate a 6-character random string
function generateShortId(length = 6) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

app.get('/', (req, res) => {
    res.send('URL Shortener API is running with MySQL!');
});

// Route to create a short URL
app.post('/shorten', async (req, res) => {
    // 1. Get the long URL from the user's request
    const { originalUrl } = req.body;

    // 2. Check if they actually sent a URL
    if (!originalUrl) {
        return res.status(400).json({ error: 'Please provide an originalUrl' });
    }

    // 3. Generate a unique short code
    const shortId = generateShortId();

    try {
        // 4. Save to MySQL database
        // We use ? to prevent "SQL Injection" attacks (a great interview talking point!)
        const [result] = await pool.execute(
            'INSERT INTO urls (originalUrl, shortId) VALUES (?, ?)',
            [originalUrl, shortId]
        );

        // 5. Tell the user it was successful
        const shortUrl = `http://localhost:${PORT}/${shortId}`;
        
        res.status(201).json({
            message: 'URL shortened successfully!',
            shortUrl: shortUrl,
            shortId: shortId,
            originalUrl: originalUrl
        });

    } catch (error) {
        console.error('Error saving to database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to redirect to the original URL
app.get('/:shortId', async (req, res) => {
    // 1. Grab the shortId from the URL
    const { shortId } = req.params;

    try {
        // 2. Look for this shortId in the database
        const [rows] = await pool.execute(
            'SELECT originalUrl, clicks FROM urls WHERE shortId = ?',
            [shortId]
        );

        // 3. Check if we found it. If rows is empty, the link doesn't exist.
        if (rows.length === 0) {
            return res.status(404).send('URL not found. Please check your short link.');
        }

        const originalUrl = rows[0].originalUrl;

        // 4. Update the analytics (add 1 to the click count)
        await pool.execute(
            'UPDATE urls SET clicks = clicks + 1 WHERE shortId = ?',
            [shortId]
        );

        // 5. REDIRECT the user to the original destination!
        res.redirect(originalUrl);

    } catch (error) {
        console.error('Database error during redirect:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Route to get analytics for a specific short URL
app.get('/api/analytics/:shortId', async (req, res) => {
    // 1. Grab the shortId from the URL
    const { shortId } = req.params;

    try {
        // 2. Fetch the entire row for this shortId from MySQL
        const [rows] = await pool.execute(
            'SELECT * FROM urls WHERE shortId = ?',
            [shortId]
        );

        // 3. Check if it exists
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Analytics not found for this link.' });
        }

        // 4. Send back a clean, formatted JSON response with the stats
        const linkData = rows[0];
        res.json({
            shortId: linkData.shortId,
            originalUrl: linkData.originalUrl,
            totalClicks: linkData.clicks,
            createdAt: linkData.created_at
        });

    } catch (error) {
        console.error('Database error fetching analytics:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});