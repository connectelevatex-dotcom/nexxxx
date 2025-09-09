import { AnimatedSection } from '../ui/AnimatedSection';
import { CountUp } from '../ui/CountUp';
import { stats } from '../../data/stats';

export const Stats = () => {
  return (
    <AnimatedSection delay={1300} className="w-full max-w-5xl">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 text-center animate-card communication-card-gradient"
            style={{ animationDelay: `${1300 + index * 200}ms` }}
          >
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2">
              <CountUp end={stat.number} plus={stat.plus} duration={2000 + index * 300} />
            </div>
            <div className="text-gray-400 text-xs sm:text-sm md:text-base">{stat.label}</div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};