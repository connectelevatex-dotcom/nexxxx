import { useState, useRef, useEffect } from 'react';
import { TextTestimonial } from '../../data/testimonials';

interface TextTestimonialSliderProps {
  testimonials: TextTestimonial[];
  direction?: 'up' | 'down';
}

export const TextTestimonialSlider = ({ 
  testimonials, 
  direction = 'up'
}: TextTestimonialSliderProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const animationRef = useRef<Animation | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.offsetHeight / 2;
      setContentHeight(height);
    }
  }, []);

  useEffect(() => {
    if (contentRef.current && contentHeight > 0 && !animationRef.current) {
      const keyframes = direction === 'up' 
        ? [
            { transform: `translateY(0px)` },
            { transform: `translateY(-${contentHeight}px)` }
          ]
        : [
            { transform: `translateY(-${contentHeight}px)` },
            { transform: `translateY(0px)` }
          ];

      animationRef.current = contentRef.current.animate(keyframes, {
        duration: 30000,
        iterations: Infinity,
        easing: 'linear'
      });
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.cancel();
        animationRef.current = null;
      }
    };
  }, [contentHeight, direction]);

  // Handle pause/play
  useEffect(() => {
    if (animationRef.current) {
      if (isPaused) {
        animationRef.current.pause();
      } else {
        animationRef.current.play();
      }
    }
  }, [isPaused]);

  return (
    <div 
      ref={containerRef}
      className="relative h-[600px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={contentRef}
        className="space-y-6"
      >
        {/* First set of testimonials */}
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 space-y-4"
          >
            <p className="text-white/90 leading-relaxed">"{testimonial.content}"</p>
            <div>
              <p className="text-white font-medium">{testimonial.author}</p>
              <p className="text-white/60 text-sm">{testimonial.company}</p>
            </div>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {testimonials.map((testimonial) => (
          <div
            key={`${testimonial.id}-clone`}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 space-y-4"
          >
            <p className="text-white/90 leading-relaxed">"{testimonial.content}"</p>
            <div>
              <p className="text-white font-medium">{testimonial.author}</p>
              <p className="text-white/60 text-sm">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};