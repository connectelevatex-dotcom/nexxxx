import { Navigation } from './Navigation';
import { ServicesCarousel } from './ServicesCarousel';
import { Stats } from './Stats';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ShootingStars } from '../ui/shooting-stars';

export const Hero = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden page-loaded">
      {/* Shooting stars background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Static stars background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
        <div className="stars absolute inset-0" />
        
        {/* Multiple shooting star layers */}
        <ShootingStars
          starColor="#7CFC00"
          trailColor="#6CE400"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
        />
        <ShootingStars
          starColor="#00FF9E"
          trailColor="#00B8FF"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
        />
        <ShootingStars
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={20}
          maxSpeed={40}
          minDelay={1500}
          maxDelay={3500}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-8 pb-16">
        <Navigation />

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <AnimatedSection delay={300} className="mb-6">
            <div className="bg-zinc-900/80 rounded-full px-5 py-2 backdrop-blur-sm inline-flex items-center gap-2">
              <span className="text-yellow-400 waving-hand">👋</span>
              <span>Make your content shine!</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={500} className="mb-6 relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading">
              <span className="text-[#7CFC00]">Content</span> For Brands & Creators!
              
              {/* Decorative elements */}
              <div className="absolute -left-12 sm:-left-16 md:-left-24 -bottom-8 sm:-bottom-10 md:-bottom-12 opacity-80 pointer-events-none hidden md:block">
                <div className="adobe-logo-left">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png" alt="Adobe After Effects Logo" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-lg shadow-lg" />
                </div>
              </div>
              <div className="absolute -right-8 sm:-right-12 md:-right-16 top-0 opacity-80 pointer-events-none hidden md:block">
                <div className="adobe-logo-right">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1051px-Adobe_Premiere_Pro_CC_icon.svg.png" alt="Adobe Premiere Pro Logo" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-lg shadow-lg" />
                </div>
              </div>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={700} className="mb-12 max-w-3xl">
            <p className="text-gray-400 text-base sm:text-lg font-body px-4">
              We help brands create better content with editing, ideation, packaging, and everything else in between.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={900} className="relative mb-20">
            <a
              href="https://calendly.com/asaworkmedia/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7CFC00] hover:bg-[#6CE400] text-black font-medium px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full transition-all shadow-[0_0_15px_rgba(124,252,0,0.5)] hover:shadow-[0_0_25px_rgba(124,252,0,0.8)]"
            >
              Let's Work Together
            </a>
            <div className="absolute -bottom-10 sm:-bottom-14 right-0 sm:right-4 text-[#7CFC00] opacity-70 hidden md:block">
              <svg width="50" height="50" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[70px] sm:h-[70px]">
                <path d="M10 30C30 10 40 40 60 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="M50 20L60 20L60 30"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </AnimatedSection>

          <ServicesCarousel />
          <Stats />
        </div>
      </div>
    </div>
  );
};