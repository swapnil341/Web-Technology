import { useState, useEffect } from 'react';

export default function AllLinks() {
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // useEffect runs automatically when the page first loads
  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/urls');
        if (!response.ok) throw new Error('Failed to fetch links');
        
        const data = await response.json();
        setLinks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLinks();
  }, []); // Empty array means this only runs once on load

  // Helper function to make the MySQL timestamp look pretty
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="card fade-in">
      <h2>Database Overview</h2>
      
      {isLoading && <p>Loading database records...</p>}
      {error && <p className="error-text">{error}</p>}
      
      {!isLoading && !error && links.length === 0 && (
        <p>No links found in the database yet.</p>
      )}

      {!isLoading && links.length > 0 && (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Short ID</th>
                <th>Original URL</th>
                <th>Clicks</th>
                <th>Created On</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through the array of links and create a row for each one */}
              {links.map((link) => (
                <tr key={link.id}>
                  <td>
                    <a href={`http://localhost:3000/${link.shortId}`} target="_blank" rel="noopener noreferrer" className="table-link">
                      /{link.shortId}
                    </a>
                  </td>
                  <td style={{ maxWidth: '250px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {link.originalUrl}
                  </td>
                  <td><strong>{link.clicks}</strong></td>
                  <td className="date-text">{formatDate(link.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}