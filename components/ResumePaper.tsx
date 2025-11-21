import React from 'react';
import { ResumeData } from '../types';
import { ICONS } from '../constants';

interface ResumePaperProps {
  data: ResumeData;
  reference?: React.RefObject<HTMLDivElement>;
}

const ResumePaper: React.FC<ResumePaperProps> = ({ data, reference }) => {
  return (
    <div 
      ref={reference}
      className="
        w-full md:w-[210mm] min-h-[297mm] mx-auto 
        bg-white shadow-2xl md:flex flex-col md:flex-row text-slate-800
        print:shadow-none print:w-full print:max-w-none print:min-h-0 print:flex print:flex-row print:m-0
      "
    >
      {/* Left Column (Darker / Sidebar) */}
      {/* On mobile: full width. On desktop: 32%. On print: 32% (simulating desktop) */}
      <div className="w-full md:w-[32%] print:w-[32%] bg-slate-900 text-white print:h-auto">
        <table className="w-full">
          <thead className="hidden print:table-header-group">
            <tr>
              <td className="h-12"></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-6 md:p-8 align-top">
                <div className="flex flex-col gap-6 md:gap-8">
        
        {/* Header / Contact */}
        <div className="space-y-4">
            <div className="mb-6">
                <h1 className="text-3xl font-bold uppercase tracking-wider leading-tight text-indigo-400">
                  {data.name.split(' ')[0]}<br/>
                  <span className="text-white">{data.name.split(' ')[1]}</span>
                </h1>
                <p className="text-indigo-200 mt-2 font-medium">{data.title}</p>
            </div>

            <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-slate-800 rounded text-indigo-400 shrink-0"><ICONS.Phone size={14} /></div>
                    <span>{data.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-slate-800 rounded text-indigo-400 shrink-0"><ICONS.Mail size={14} /></div>
                    <span className="break-all">{data.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-slate-800 rounded text-indigo-400 shrink-0"><ICONS.MapPin size={14} /></div>
                    <span>{data.contact.location}</span>
                </div>
            </div>
        </div>

        {/* Education */}
        <div className="space-y-4">
            <h2 className="text-lg font-bold uppercase tracking-widest border-b border-slate-700 pb-2 flex items-center gap-2 text-white">
                <ICONS.BookOpen size={18} className="text-indigo-400"/> Education
            </h2>
            {data.education.map((edu, idx) => (
                <div key={idx} className="print:break-inside-avoid">
                    <h3 className="font-bold text-white">{edu.degree}</h3>
                    <p className="text-indigo-300 text-sm">{edu.institution}</p>
                    <p className="text-slate-400 text-xs mt-1">{edu.year}</p>
                </div>
            ))}
        </div>

        {/* Skills */}
        <div className="space-y-4">
             <h2 className="text-lg font-bold uppercase tracking-widest border-b border-slate-700 pb-2 flex items-center gap-2 text-white">
                <ICONS.Cpu size={18} className="text-indigo-400"/> Skills
            </h2>
            <div className="space-y-4">
                {data.skills.map((cat, idx) => (
                    <div key={idx} className="print:break-inside-avoid">
                        <h4 className="text-xs font-bold text-indigo-300 uppercase mb-1">{cat.category}</h4>
                        <div className="flex flex-wrap gap-1.5">
                            {cat.items.map((skill, sIdx) => (
                                <span key={sIdx} className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-200 border border-slate-700 print:border-slate-600">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

         {/* Soft Skills */}
         <div className="space-y-4">
             <h2 className="text-lg font-bold uppercase tracking-widest border-b border-slate-700 pb-2 flex items-center gap-2 text-white">
                <ICONS.Award size={18} className="text-indigo-400"/> Competencies
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1 marker:text-indigo-500">
                {data.softSkills.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
        </div>

        {/* Languages */}
        <div className="space-y-4 mt-auto">
            <h2 className="text-lg font-bold uppercase tracking-widest border-b border-slate-700 pb-2 text-white">Languages</h2>
            <div className="text-sm text-slate-300 space-y-1">
                {data.languages.map((l, i) => <p key={i}>{l}</p>)}
            </div>
        </div>

                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Right Column (Main Content) */}
      {/* On mobile: full width. On desktop: flex-1. On print: flex-1 (side-by-side) */}
      <div className="flex-1 w-full bg-white">
        <table className="w-full">
          <thead className="hidden print:table-header-group">
            <tr>
              <td className="h-12"></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-6 md:p-10 print:p-8 print:pt-0 align-top">
                <div className="space-y-6 md:space-y-8">
        
        {/* Objective */}
        <section>
            <h2 className="text-xl font-bold text-slate-900 uppercase tracking-widest border-b-2 border-indigo-500 pb-2 mb-4 flex items-center gap-2">
                <ICONS.Layout size={20} className="text-indigo-600"/> Profile
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base text-justify">
                {data.objective}
            </p>
        </section>

        {/* Projects */}
        <section>
            <h2 className="text-xl font-bold text-slate-900 uppercase tracking-widest border-b-2 border-indigo-500 pb-2 mb-6 flex items-center gap-2">
                <ICONS.Terminal size={20} className="text-indigo-600"/> Key Projects
            </h2>
            <div className="grid grid-cols-1 gap-6">
                {data.projects.map((proj, idx) => (
                    <div key={idx} className="relative pl-4 border-l-2 border-slate-200 hover:border-indigo-400 transition-colors print:border-l-2 print:break-inside-avoid">
                        <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-indigo-500 print:bg-indigo-600 print:print-color-adjust-exact"></div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                            <h3 className="font-bold text-slate-800">{proj.name}</h3>
                            {proj.tech && <span className="self-start mt-1 sm:mt-0 text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded print:bg-slate-100">{proj.tech}</span>}
                        </div>
                        <ul className="list-disc list-outside ml-4 text-sm text-slate-600 space-y-1 marker:text-slate-400">
                            {proj.details.map((d, dIdx) => (
                                <li key={dIdx}>{d}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>

        {/* Experience */}
        <section>
            <h2 className="text-xl font-bold text-slate-900 uppercase tracking-widest border-b-2 border-indigo-500 pb-2 mb-6 flex items-center gap-2">
                <ICONS.Award size={20} className="text-indigo-600"/> Experience
            </h2>
            <div className="space-y-6">
                {data.experience.map((exp, idx) => (
                    <div key={idx} className="group print:break-inside-avoid">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                            <h3 className="font-bold text-slate-800 text-lg group-hover:text-indigo-700 transition-colors">{exp.role}</h3>
                            <span className="text-sm font-medium text-slate-500">{exp.period}</span>
                        </div>
                        <div className="text-sm font-semibold text-indigo-600 mb-2">{exp.company} {exp.location ? `| ${exp.location}` : ''}</div>
                        <ul className="list-disc list-outside ml-4 text-sm text-slate-600 space-y-1 marker:text-slate-400">
                            {exp.achievements.map((ach, aIdx) => (
                                <li key={aIdx}>{ach}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>

        {/* Training & Certs */}
        <section>
            <h2 className="text-xl font-bold text-slate-900 uppercase tracking-widest border-b-2 border-indigo-500 pb-2 mb-4 flex items-center gap-2">
                <ICONS.Code size={20} className="text-indigo-600"/> Training & Certifications
            </h2>
            <div className="flex flex-wrap gap-3">
                {data.training.map((train, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded border border-slate-200 text-sm text-slate-700 print:bg-transparent print:border-slate-300">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full print:bg-green-600 print:print-color-adjust-exact"></div>
                        {train}
                    </div>
                ))}
            </div>
        </section>

                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResumePaper;