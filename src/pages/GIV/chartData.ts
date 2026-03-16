export interface ChartPoint {
    time: string;
    value: number;
  }
  
  // Updated helper to support decimals for metrics like TPS and Percentages
  const generateData = (base: number, variance: number, isDecimal: boolean = false): ChartPoint[] => {
    const times = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
    return times.map(time => {
      const randomValue = Math.random() * variance;
      const finalValue = isDecimal 
        ? parseFloat((base + randomValue).toFixed(2)) // Keeps 2 decimal places
        : base + Math.floor(randomValue);             // Standard integer logic
        
      return {
        time,
        value: finalValue
      };
    });
  };
  
  export const metricsData: Record<string, ChartPoint[]> = {
    // Use 'true' for TPS and Errors to get smooth decimal lines
    "TPS": generateData(0.01, 0.05, true), 
    "Volume": generateData(120, 50),
    "Availability": generateData(50, 10, true),
    "Latency": generateData(140, 20),
    "Latency(p95)": generateData(280, 40),
    "Errors": generateData(0, 2, true)
  };