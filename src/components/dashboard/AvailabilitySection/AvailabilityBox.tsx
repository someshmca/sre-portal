import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

export interface AppStatus {
  id: string | number;
  title: string;
  percent: string;
  target: string;
  status: string;
  type: 'success' | 'warning' | 'danger';
}

const AvailabilityBox: React.FC<{ data: AppStatus }> = ({ data }) => {
    const getStatusIcon = () => {
        // Using 22px as requested for better visibility
        const iconSize = 22;
      
        switch (data.type) {
          case 'success': 
            return (
              <div className="icon-wrapper">
                <CheckCircle2 size={iconSize} fill="#22c55e" color="white" strokeWidth={1.5} />
              </div>
            );
          case 'warning': 
            return (
              <div className="icon-wrapper">
                <AlertTriangle size={iconSize} color="#856404" strokeWidth={2} />
              </div>
            );
          case 'danger': 
            return (
              <div className="icon-wrapper">
                <XCircle size={iconSize} color="#721c24" strokeWidth={2} />
              </div>
            );
          default: return null;
        }
      };
      
      return (
        <div className={`status-box ${data.type}`}>
          <div className="box-left">
            <span className="title" title={data.title}>{data.title}</span>
            <span className="percent">{data.percent}</span>
            <span className="target">{data.target}</span>
          </div>
          <div className="box-right">
            {getStatusIcon()}
            {/* Bold 600 weight applied here */}
            <span className="status-label">{data.status}</span>
          </div>
        </div>
      ); 
};

export default AvailabilityBox;