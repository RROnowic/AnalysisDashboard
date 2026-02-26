import React, { useState, useEffect } from 'react';

// @ts-ignore
export default function AnalysisDashboard() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setLoading(true);
    // Simulation eines API-Calls mit euren spezifischen Daten
    const mockData = [
      { id: 1, name: 'Rheinbrücke A1', area: 12500, grade: 2.1, status: 'active' },
      { id: 2, name: 'Tunnel Westportal', area: 4200, grade: 3.4, status: 'warning' },
      { id: 3, name: 'Talbrücke Nord', area: 8900, grade: 1.8, status: 'active' },
      { id: 4, name: 'Überführung K40', area: 1100, grade: 4.0, status: 'critical' },
      { id: 5, name: 'Mainsteg Ost', area: 2500, grade: 2.5, status: 'active' },
    ];
    
    setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 500);
  }, []);

  const filteredData = data.filter((item: any) => 
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Unsaubere Berechnung des Durchschnitts-Grades direkt im Render
  let sum = 0;
  filteredData.forEach((i: any) => sum += i.grade);
  const avgGrade = sum / filteredData.length;

  if (loading) return <div style={{padding: '30px'}}>Daten werden geladen...</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <header style={{ marginBottom: '30px', borderBottom: '2px solid #333' }}>
        <h1>Infrastruktur-Analyse (Bauwerksprüfung)</h1>
      </header>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Bauwerk suchen..." 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: '10px', flex: '1' }}
        />
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Seitenleiste mit "hässlicher" Visualisierung */}
        <div style={{ width: '250px', background: '#eee', padding: '15px' }}>
          <h3>KPIs</h3>
          <p>Anzahl: {filteredData.length}</p>
          <p>Ø Note: {avgGrade.toFixed(2)}</p>
          
          <hr />
          
          <h4>Zustands-Visualisierung</h4>
          {/* Das hier ist absichtlich schlecht gebaut - er soll eine Chart-Library nutzen */}
          {filteredData.map((i: any) => (
            <div key={i.id} style={{ marginBottom: '10px' }}>
              <small>{i.name}</small>
              <div style={{ background: '#ccc', width: '100%', height: '10px' }}>
                <div style={{ 
                  background: i.grade > 3 ? 'red' : 'green', 
                  height: '10px', 
                  width: `${(i.grade / 4) * 100}%` 
                }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Haupt-Tabelle */}
        <div style={{ flex: '1' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#333', color: '#fff', textAlign: 'left' }}>
                <th style={{ padding: '12px' }}>ID</th>
                <th style={{ padding: '12px' }}>Bauwerk</th>
                <th style={{ padding: '12px' }}>Area (m²)</th>
                <th style={{ padding: '12px' }}>Grade (Note)</th>
                <th style={{ padding: '12px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item: any) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '12px' }}>{item.id}</td>
                  <td style={{ padding: '12px' }}>{item.name}</td>
                  <td style={{ padding: '12px' }}>{item.area.toLocaleString()}</td>
                  <td style={{ padding: '12px' }}>{item.grade.toFixed(1)}</td>
                  <td style={{ padding: '12px' }}>
                    <b style={{ color: item.status === 'critical' ? 'red' : 'black' }}>
                      {item.status.toUpperCase()}
                    </b>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}