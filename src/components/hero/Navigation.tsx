import { HandIcon } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Navigation = () => {
  return (
    <AnimatedSection delay={100} className="flex justify-center mb-16">
      <div className="bg-zinc-900/80 rounded-full p-1 backdrop-blur-sm">
        <div className="flex items-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-4 py-2 bg-black rounded-full text-white hover:bg-zinc-800 transition-colors"
          >
            <span className="bg-white p-1 rounded-md">
              <HandIcon className="h-4 w-4 text-black" />
            </span>
            HOME
          </button>
          <button
            onClick={() => scrollToSection('video-showcase')}
            className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            FAQ
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};