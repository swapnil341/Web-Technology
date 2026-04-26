require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise'); 
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

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
        connection.release(); 
    })
    .catch((err) => {
        console.error('MySQL connection error: ', err.message);
    });

// 6-character random string generator
function generateShortId(length = 6) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// test route 
app.get('/', (req, res) => {
    res.send('URL Shortener API is running with MySQL!');
});

// Route to create a short URL
app.post('/shorten', async (req, res) => {
    const { originalUrl } = req.body;

    if (!originalUrl) {
        return res.status(400).json({ error: 'Please provide an originalUrl' });
    }

    // Try to parse the URL. If it fails, it's not a valid link.
    try {
        new URL(originalUrl); 
    } catch (err) {
        return res.status(400).json({ error: 'Invalid URL format. Must include http:// or https://' });
    }

    // Generate unique short string
    const shortId = generateShortId();

    try {
        // Save to MySQL database
        const [result] = await pool.execute(
            'INSERT INTO urls (originalUrl, shortId) VALUES (?, ?)',
            [originalUrl, shortId]
        );

        // Success short URL
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

// Route to original URL
app.get('/:shortId', async (req, res) => {
    const { shortId } = req.params;

    try {
        const [rows] = await pool.execute(
            'SELECT originalUrl, clicks FROM urls WHERE shortId = ?',
            [shortId]
        );

        if (rows.length === 0) {
            return res.status(404).send('URL not found. Please check your short link.');
        }

        const originalUrl = rows[0].originalUrl;

        // add 1 to the click count
        await pool.execute(
            'UPDATE urls SET clicks = clicks + 1 WHERE shortId = ?',
            [shortId]
        );

        // redirect to original URL
        res.redirect(originalUrl);

    } catch (error) {
        console.error('Database error during redirect:', error);
        res.status(500).send('Internal Server Error');
    }
});

// analytics for analytics
app.get('/api/analytics/:shortId', async (req, res) => {
    const { shortId } = req.params;

    try {
        const [rows] = await pool.execute(
            'SELECT * FROM urls WHERE shortId = ?',
            [shortId]
        );

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Analytics not found for this link.' });
        }

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

// Route to fetch all links for the dashboard
app.get('/api/urls', async (req, res) => {
    try {
        // Fetch all rows, ordering by the newest first
        const [rows] = await pool.execute(
            'SELECT * FROM urls ORDER BY created_at DESC'
        );
        res.json(rows);
    } catch (error) {
        console.error('Database error fetching all URLs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});