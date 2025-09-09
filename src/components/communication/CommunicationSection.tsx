import { GlowCard } from '../ui/spotlight-card';
import { communicationTools } from '../../data/communication';

export const CommunicationSection = () => {
  return (
    <section className="py-20 md:py-20 pb-12 md:pb-20 bg-black relative overflow-hidden" id="communication">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 italic font-heading px-4">
            Flawless Communication!
          </h2>
        </div>

        {/* Communication Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
          {communicationTools.map((tool) => (
            <GlowCard
              key={tool.id}
              glowColor={tool.color}
              customSize={true}
              className="aspect-[16/9] w-full max-w-xs sm:max-w-sm mx-auto communication-card-gradient"
            >
              <div className="flex flex-col justify-center items-center h-full text-center p-4 sm:p-6">
                {/* Icon */}
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  <img src={tool.icon} alt={tool.name} className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                
                {/* Tool Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  {tool.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-body">
                  {tool.description}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};