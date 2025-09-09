import { AnimatedSection } from '../ui/AnimatedSection';
import { services } from '../../data/services';

export const ServicesCarousel = () => {
  const duplicatedServices = [...services, ...services]; // Duplicate for infinite scroll

  return (
    <AnimatedSection delay={1100} className="w-full mb-16">
      <div className="overflow-hidden">
        <div className="bg-zinc-900/50 rounded-full py-3 relative services-carousel">
          <div className="services-track">
            {duplicatedServices.map((service, index) => (
              <div key={`service-${index}`} className="service-item">
                {service}
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-zinc-900/50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-zinc-900/50 to-transparent z-10"></div>
        </div>
      </div>
    </AnimatedSection>
  );
};