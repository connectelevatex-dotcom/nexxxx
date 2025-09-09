import { useEffect, useRef } from 'react';

interface Process {
  number: string;
  title: string;
  description: string;
}

const processes: Process[] = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We start by understanding your goals, target audience, and content strategy through a detailed consultation."
  },
  {
    number: "02",
    title: "Content Analysis",
    description: "Our team analyzes your existing content and competitor landscape to identify opportunities for improvement."
  },
  {
    number: "03",
    title: "Creative Development",
    description: "We create custom designs and content strategies tailored to your brand's unique voice and style."
  },
  {
    number: "04",
    title: "Production & Review",
    description: "Our experts bring your content to life with high-quality production, followed by thorough quality checks."
  },
  {
    number: "05",
    title: "Launch & Optimize",
    description: "We help you launch your content and continuously optimize based on performance metrics and feedback."
  }
];

export const ProcessSection = () => {
  const processRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -10% 0px',
      threshold: 0.5,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('process-active');
          // Find and activate the corresponding line
          const index = processRefs.current.findIndex(ref => ref === entry.target);
          if (index >= 0 && lineRefs.current[index]) {
            lineRefs.current[index]?.classList.add('line-active');
          }
        } else {
          entry.target.classList.remove('process-active');
          // Find and deactivate the corresponding line
          const index = processRefs.current.findIndex(ref => ref === entry.target);
          if (index >= 0 && lineRefs.current[index]) {
            lineRefs.current[index]?.classList.remove('line-active');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    processRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-20">
          Our <span className="text-[#00ff75]">Process</span>
        </h2>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line container - moved left and up */}
          <div className="absolute left-[90px] lg:left-[150px] top-[40px] bottom-0 w-px bg-white/10">
            {processes.map((_, index) => (
              <div
                key={`line-${index}`}
                ref={(el) => (lineRefs.current[index] = el)}
                className={`process-line absolute w-px bg-[#00ff75] transition-all duration-1000 ease-in-out opacity-0 ${
                  index === processes.length - 1 ? 'hidden' : ''
                }`}
                style={{
                  top: '0',
                  height: '256px',
                  transformOrigin: 'top',
                  transform: 'scaleY(0)',
                  marginTop: `${index * 256}px`,
                }}
              />
            ))}
          </div>

          {processes.map((process, index) => (
            <div
              key={process.number}
              ref={(el) => (processRefs.current[index] = el)}
              className="process-step flex items-start gap-12 lg:gap-24 mb-32 last:mb-0 opacity-30 transition-all duration-700"
            >
              <div className="process-number relative w-[200px] lg:w-[300px] text-6xl lg:text-8xl font-bold text-white/20 transition-all duration-700 pt-4 text-center">
                {process.number}
                {/* Dot position adjusted left and up */}
                <div className="absolute top-[20%] left-[90px] lg:left-[150px] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-[#00ff75] bg-black transition-all duration-700 opacity-0 scale-0 process-dot" />
              </div>
              
              <div className="process-content flex-1 translate-y-8 opacity-0 transition-all duration-700 pt-4">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                  {process.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};