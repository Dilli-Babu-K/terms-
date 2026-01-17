
import React from 'react';
import { LegalSection } from '../types.ts';

interface LegalSectionItemProps {
  section: LegalSection;
}

const LegalSectionItem: React.FC<LegalSectionItemProps> = ({ section }) => {
  return (
    <section id={section.id} className="py-8 border-b border-gray-100 last:border-0 scroll-mt-24">
      <h2 className={`text-xl font-bold mb-4 ${section.isWarning ? 'text-red-600' : 'text-gray-900'}`}>
        {section.title}
      </h2>
      <div className="space-y-3">
        {Array.isArray(section.content) ? (
          <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 leading-relaxed">
            {section.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 leading-relaxed">{section.content}</p>
        )}
      </div>
    </section>
  );
};

export default LegalSectionItem;
