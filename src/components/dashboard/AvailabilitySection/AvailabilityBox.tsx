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
    switch (data.type) {
      case 'success': return <div className="icon-wrapper"><CheckCircle2 size={18} fill="#22c55e" color="white" /></div>;
      case 'warning': return <div className="icon-wrapper"><AlertTriangle size={18} color="#856404" /></div>;
      case 'danger': return <div className="icon-wrapper"><XCircle size={18} color="#721c24" /></div>;
      default: return null;
    }
  };

  return (
    <div className={`status-box ${data.type}`}>
      <div className="box-left">
        <span className="title">{data.title}</span>
        <span className="percent">{data.percent}</span>
        <span className="target">{data.target}</span>
      </div>
      <div className="box-right">
        {getStatusIcon()}
        <span className="status-label">{data.status}</span>
      </div>
    </div>
  );
};

export default AvailabilityBox;