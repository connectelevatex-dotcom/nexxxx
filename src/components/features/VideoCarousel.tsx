import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { videos } from '../../data/videos';

export const VideoCarousel = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [currentMobileVideo, setCurrentMobileVideo] = useState(0);
  const totalSets = 1; // Only one set now with 3 videos
  const videosPerSet = 3;

  const handlePrevious = () => {
    if (currentSet > 0) {
      setCurrentSet(currentSet - 1);
    }
  };

  const handleNext = () => {
    if (currentSet < totalSets - 1) {
      setCurrentSet(currentSet + 1);
    }
  };

  const handleMobilePrevious = () => {
    setCurrentMobileVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleMobileNext = () => {
    setCurrentMobileVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-black relative overflow-hidden" id="video-showcase">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Short-Form <span className="text-[#7CFC00]">Videos</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-body">
            Engaging vertical content optimized for social media platforms
          </p>
        </div>
        
        {/* Desktop Video Carousel Container */}
        <div className="relative max-w-6xl mx-auto hidden md:block">
          {/* Desktop Navigation Buttons */}
          <button
            onClick={handlePrevious}
            disabled={currentSet === 0}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentSet === 0
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                : 'bg-black/70 text-white hover:bg-black/90 hover:scale-110'
            }`}
            aria-label="Previous video set"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentSet === totalSets - 1}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentSet === totalSets - 1
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                : 'bg-black/70 text-white hover:bg-black/90 hover:scale-110'
            }`}
            aria-label="Next video set"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Desktop Video Grid */}
          <div className="carousel-container overflow-hidden rounded-xl">
            <div 
              className="carousel-track flex transition-transform duration-500 ease-in-out px-4 sm:px-8 md:px-16"
              style={{ transform: `translateX(-${currentSet * 100}%)` }}
            >
              {/* Video Set */}
              <div className="carousel-set flex-shrink-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {videos.map((video) => (
                  <div key={video.id} className="video-card group">
                    <div className="relative bg-zinc-900 rounded-lg overflow-hidden max-w-[280px] sm:max-w-[320px] mx-auto video-container-vertical">
                      <iframe
                        src={video.url}
                        className="absolute top-0 left-0 w-full h-full border-0 video-iframe"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        allowFullScreen
                        style={{ 
                          objectFit: 'contain',
                          backgroundColor: '#000'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSets }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSet(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSet
                    ? 'bg-[#00ff75] scale-110'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to video set ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Video Carousel Container */}
        <div className="relative max-w-sm mx-auto md:hidden">
          {/* Mobile Single Video Display */}
          <div className="relative">
            <div className="video-card group">
              <div className="relative bg-zinc-900 rounded-lg overflow-hidden video-container-vertical">
                <iframe
                  src={videos[currentMobileVideo].url}
                  className="absolute top-0 left-0 w-full h-full border-0 video-iframe"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                  style={{ 
                    objectFit: 'contain',
                    backgroundColor: '#000'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Mobile Navigation Buttons - Below Video */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={handleMobilePrevious}
              className="w-12 h-12 rounded-full bg-black/70 text-white hover:bg-black/90 hover:scale-110 flex items-center justify-center transition-all duration-300 touch-manipulation"
              aria-label="Previous video"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Mobile Navigation Dots */}
            <div className="flex gap-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMobileVideo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 touch-manipulation ${
                    index === currentMobileVideo
                      ? 'bg-[#00ff75] scale-110'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleMobileNext}
              className="w-12 h-12 rounded-full bg-black/70 text-white hover:bg-black/90 hover:scale-110 flex items-center justify-center transition-all duration-300 touch-manipulation"
              aria-label="Next video"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};