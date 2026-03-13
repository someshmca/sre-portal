import { useState, useEffect } from 'react';

export const useAutoRefresh = (intervalMs: number = 60000) => {
  const [lastRefresh, setLastRefresh] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setLastRefresh(new Date());
      // Here you would typically trigger an API fetch
      console.log('Refreshing data...');
    }, intervalMs);

    return () => clearInterval(timer);
  }, [intervalMs]);

  return lastRefresh;
};