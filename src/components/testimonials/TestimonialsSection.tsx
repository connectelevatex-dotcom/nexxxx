import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { videoTestimonials, textTestimonials } from '../../data/testimonials';
import { PhoneFrame } from './PhoneFrame';
import { VideoPlayer } from './VideoPlayer';
import { TextTestimonialSlider } from './TextTestimonialSlider';

export const TestimonialsSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const handlePrevVideo = () => {
    setCurrentVideo((prev) => (prev === 0 ? videoTestimonials.length - 1 : prev - 1));
  };

  const handleNextVideo = () => {
    setCurrentVideo((prev) => (prev === videoTestimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 md:py-32 pt-20 md:pt-32 pb-8 md:pb-32 relative overflow-hidden bg-black" id="testimonials">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] border border-white/10 rounded-full -top-64 -left-32 animate-spin" 
             style={{ animationDuration: '60s' }} />
        <div className="absolute w-2 h-2 bg-white rounded-full top-1/4 left-1/4 animate-pulse" />
        <div className="absolute w-2 h-2 bg-white rounded-full bottom-1/4 right-1/4 animate-pulse delay-300" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Client Success Stories
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-body">
            Hear directly from our clients about their transformative experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Testimonials */}
          <div className="flex justify-center flex-col items-center">
            <PhoneFrame>
              <VideoPlayer testimonial={videoTestimonials[currentVideo]} />
            </PhoneFrame>
            
            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-6 mt-4">
              <button
                aria-label="Previous video"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110"
                onClick={handlePrevVideo}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              {/* Video indicators */}
              <div className="flex gap-2">
                {videoTestimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentVideo ? 'bg-[#7CFC00]' : 'bg-white/30'
                    }`}
                    onClick={() => setCurrentVideo(index)}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                aria-label="Next video"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110"
                onClick={handleNextVideo}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Text Testimonials */}
          <div className="testimonials-mobile-single-column">
            {/* Desktop: Two column sliders */}
            <div className="hidden lg:grid grid-cols-2 gap-8">
              <TextTestimonialSlider testimonials={textTestimonials} direction="up" />
              <TextTestimonialSlider testimonials={[...textTestimonials].reverse()} direction="down" />
            </div>
            
            {/* Mobile: Single horizontal slider */}
            <div className="lg:hidden">
              <div className="mobile-testimonial-slider overflow-hidden">
                <div className="mobile-testimonial-track">
                  {/* First set */}
                  {textTestimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="mobile-testimonial-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 space-y-4 flex-shrink-0"
                    >
                      <p className="text-white/90 leading-relaxed text-sm">"{testimonial.content}"</p>
                      <div>
                        <p className="text-white font-medium text-sm">{testimonial.author}</p>
                        <p className="text-white/60 text-xs">{testimonial.company}</p>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {textTestimonials.map((testimonial) => (
                    <div
                      key={`${testimonial.id}-clone`}
                      className="mobile-testimonial-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 space-y-4 flex-shrink-0"
                    >
                      <p className="text-white/90 leading-relaxed text-sm">"{testimonial.content}"</p>
                      <div>
                        <p className="text-white font-medium text-sm">{testimonial.author}</p>
                        <p className="text-white/60 text-xs">{testimonial.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};