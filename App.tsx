
import React, { useState, useEffect } from 'react';
import { RECOVA_TERMS } from './constants.tsx';
import LegalSectionItem from './components/LegalSectionItem.tsx';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight">RECOVA</span>
          </div>
          <nav className="flex items-center gap-6">
            <a 
              href="https://dilli-babu-k.github.io/recova-privacy/" 
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors underline decoration-blue-200 underline-offset-4"
            >
              Privacy Policy
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-24 px-6">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Terms & Conditions
            </h1>
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-gray-500 font-medium">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Last updated: {RECOVA_TERMS.lastUpdated}
              </span>
              <span>Effective Date: Immediate</span>
            </div>
          </header>

          <div className="prose prose-blue max-w-none">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              By accessing or using <span className="font-semibold text-gray-900">Recova</span>, you agree to these Terms & Conditions. 
              If you do not agree with any part of these terms, please do not use the application.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-12">
              <p className="text-blue-800 font-medium italic">
                "Recova is designed to help you understand your body's recovery and readiness through data-driven insights. It is meant to complement, not replace, your personal health journey."
              </p>
            </div>

            <div className="divide-y divide-gray-100">
              {RECOVA_TERMS.sections.map((section) => (
                <LegalSectionItem key={section.id} section={section} />
              ))}
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-gray-900 tracking-tight">RECOVA</span>
            </div>
            <p className="text-sm text-gray-400">© 2026 Recova App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
