import { useState } from 'react';

export default function Analytics() {
  const [analyticsId, setAnalyticsId] = useState('');
  const [analyticsData, setAnalyticsData] = useState(null);
  const [analyticsError, setAnalyticsError] = useState('');

  const handleCheckStats = async (e) => {
    e.preventDefault();
    setAnalyticsError('');
    setAnalyticsData(null);

    const cleanId = analyticsId.split('/').pop(); 

    try {
      const response = await fetch(`http://localhost:3000/api/analytics/${cleanId}`);
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Stats not found');
      
      setAnalyticsData(data);
    } catch (err) {
      setAnalyticsError(err.message);
    }
  };

  return (
    <div className="card fade-in">
      <h2>Check Link Stats</h2>
      
      <form onSubmit={handleCheckStats} className="form-group">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Short ID (e.g., aB3dE5)"
          value={analyticsId}
          onChange={(e) => setAnalyticsId(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-secondary">
          Get Stats
        </button>
      </form>

      {analyticsError && <p className="error-text">{analyticsError}</p>}
      
      {analyticsData && (
        <div className="stats-box">
          <h3 className="stats-title">Analytics for /{analyticsData.shortId}</h3>
          
          <div className="stats-grid">
            <p>Original Destination: <br/><span className="original-link">{analyticsData.originalUrl}</span></p>
            <p style={{ marginTop: '16px', display: 'flex', alignItems: 'center' }}>
              Total Clicks: <span className="stats-number">{analyticsData.totalClicks}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}