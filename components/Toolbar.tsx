import React from 'react';
import { Printer, Download } from 'lucide-react';

interface ToolbarProps {
  onPrint: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onPrint }) => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur shadow-2xl border border-slate-700 rounded-full px-6 py-3 flex items-center gap-4 z-50 no-print">
      <button 
        onClick={onPrint}
        className="flex items-center gap-2 text-white font-medium hover:text-indigo-400 transition-colors"
        title="Download PDF"
      >
        <Download size={18} />
        <span className="hidden sm:inline">Download PDF</span>
      </button>
    </div>
  );
};

export default Toolbar;