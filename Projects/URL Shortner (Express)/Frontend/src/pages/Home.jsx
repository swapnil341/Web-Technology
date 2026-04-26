import { useState } from 'react';

export default function Home() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleShorten = async (e) => {
    e.preventDefault();
    setError('');
    setShortUrl('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3000/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ originalUrl: originalUrl }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Something went wrong');
      
      setShortUrl(data.shortUrl);
      setOriginalUrl('');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card fade-in">
      <h2>Create a Short Link</h2>
      
      <form onSubmit={handleShorten} className="form-group">
        <input
          type="url"
          className="input-field"
          placeholder="Paste your long link here..."
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? 'Wait...' : 'Shorten!'}
        </button>
      </form>

      {error && <p className="error-text">{error}</p>}
      
      {shortUrl && (
        <div className="success-box">
          <p className="success-title">Success! Your short link is ready:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="short-link">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}