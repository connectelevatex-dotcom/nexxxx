import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { videos, VideoContent } from '../../data/videos';

export const VideoShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  const currentVideo = videos[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (isPlaying) {
        videoRef.current.play();
      }
    }
  }, [currentIndex]);

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Content Area */}
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold text-white">
              {currentVideo.title}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {currentVideo.description}
            </p>
            <ul className="space-y-3">
              {currentVideo.keyPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-[#00ff75] rounded-full" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Video Area */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative max-w-[320px] mx-auto aspect-[9/16] bg-zinc-900 rounded-xl overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={currentVideo.thumbnail}
                onTimeUpdate={handleTimeUpdate}
                controls
              >
                <source src={currentVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
                aria-label="Previous video"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
                aria-label="Next video"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
                <div
                  className="h-full bg-[#00ff75] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#00ff75] scale-110'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};