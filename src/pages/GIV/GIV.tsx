import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { metricsData } from './chartData'; 
import styles from './GIV.module.scss';

const GIV = () => {
  const [activeTab, setActiveTab] = useState('Golden Signals');

  const metrics = [
    { label: "TPS", value: "0.01", status: "success" },
    { label: "Volume", value: "131", status: "success" },
    { label: "Availability", value: "52.9%", status: "danger" },
    { label: "Latency", value: "144.51 ms", status: "success" },
    { label: "Latency(p95)", value: "297 ms", status: "success" },
    { label: "Errors", value: "0%", status: "success" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <h1>Global Inventory & Visibility</h1>
      </header>

      <div className={styles.tabContentWrapper}>
        <div className={styles.tabs}>
          {['Golden Signals', 'Business Metrics', 'Incident Metrics'].map((tab) => (
            <button
              key={tab}
              className={`${styles.tabItem} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.innerContent}>
          {activeTab === 'Golden Signals' ? (
            <>
              <div className={styles.metricsRow}>
                {metrics.map((m, i) => (
                  <div key={i} className={`${styles.statusBox} ${styles[m.status]}`}>
                    <div className={styles.label}>{m.label}</div>
                    <div className={styles.value}>{m.value}</div>
                  </div>
                ))}
              </div>

              <div className={styles.chartGrid}>
                {metrics.map((m, i) => (
                  <div key={i} className={styles.chartCard}>
                    <div className={styles.chartTitle}>{m.label} Trend</div>
                    <div className={styles.chartBody}>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={metricsData[m.label]} margin={{ top: 5, right: 20, left: -20, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                          {/* Showing X-Axis with time labels */}
                          <XAxis 
                            dataKey="time" 
                            tick={{ fontSize: 10 }} 
                            tickLine={false} 
                            axisLine={false}
                          />
                          {/* Showing Y-Axis with auto-scaling */}
                          <YAxis 
                            tick={{ fontSize: 10 }} 
                            tickLine={false} 
                            axisLine={false}
                            domain={['auto', 'auto']}
                          />
                          <Tooltip 
                            contentStyle={{ fontSize: '11px', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="value" 
                            stroke={m.status === 'danger' ? '#ef4444' : '#22c55e'} 
                            strokeWidth={3} 
                            dot={{ r: 2, fill: m.status === 'danger' ? '#ef4444' : '#22c55e' }}
                            activeDot={{ r: 4 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className={styles.welcomeState}>
              <h2>{activeTab}</h2>
              <p>Welcome to the {activeTab} view.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GIV;