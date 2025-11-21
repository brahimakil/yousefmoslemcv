import React, { useRef } from 'react';
import ResumePaper from './components/ResumePaper';
import Toolbar from './components/Toolbar';
import { RESUME_DATA } from './constants';

const App: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8 md:py-12 px-4 print:bg-white print:p-0 print:py-0">
      
      <div className="max-w-[210mm] mx-auto print:max-w-none print:w-full print:mx-0">
        <ResumePaper data={RESUME_DATA} reference={componentRef} />
      </div>

      <Toolbar onPrint={handlePrint} />

      <div className="text-center mt-8 text-slate-400 text-sm no-print">
        <p>Yousef Moslem</p>
      </div>
    </div>
  );
};

export default App;