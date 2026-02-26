import React, { useState, useEffect } from 'react';

// @ts-ignore
export default function AnalysisDashboard() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts') // Demo URL
      .then(res => res.json())
      .then(json => {
        setData(json.slice(0, 10)); // Nur 10 Einträge
        setLoading(false);
      });
  }, []);

  const filteredData = data.filter((item: any) => 
    (item.title || '').toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) return <div style={{padding: '20px'}}>Lade...</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        <h1>Analyse Dashboard</h1>
      </header>

      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Suche..." 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: '8px', width: '300px' }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '20px' }}>
        <div style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px' }}>
          <h3>Statistik</h3>
          <p>Anzahl: {filteredData.length}</p>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#eee', textAlign: 'left' }}>
              <th style={{ padding: '10px' }}>ID</th>
              <th style={{ padding: '10px' }}>Titel</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item: any) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>{item.id}</td>
                <td style={{ padding: '10px' }}>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
