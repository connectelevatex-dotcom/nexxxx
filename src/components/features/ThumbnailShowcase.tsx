import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface Thumbnail {
  id: number;
  videoSrc: string;
  title: string;
  description: string;
  features: string[];
}

const thumbnails: Thumbnail[] = [
  {
    id: 1,
    videoSrc: "https://drive.google.com/file/d/1j-O2yM0Dc02zI2rp9bXJic7JYFp4J5ei/preview",
    title: "Professional Video Frames!",
    description: "High-quality video frames crafted for our clients to showcase their content professionally",
    features: [
      "Custom frame design",
      "Professional quality",
      "Fast delivery",
      "Unlimited Revisions"
    ]
  },
  {
    id: 2,
    videoSrc: "https://drive.google.com/file/d/1T4WIAEXrNI3PIEhyxhlxL7pDo2AMmA04/preview",
    title: "Creative Video Frames",
    description: "Stand out in the crowd with our eye-catching video frames that capture attention",
    features: [
      "Eye-catching frames",
      "Engaging compositions",
      "Brand consistency",
      "Data-driven approach"
    ]
  },
  {
    id: 3,
    videoSrc: "https://drive.google.com/file/d/1tFwS7Jz0eIBja1ZQJXrHUPoPOkGm1pcd/preview",
    title: "Frame Optimization",
    description: "Get more engagement with our optimized video frames that grab attention",
    features: [
      "Visual optimization",
      "Engaging visuals",
      "Brand alignment",
      "Performance testing"
    ]
  }
];

export const ThumbnailShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentThumbnail = thumbnails[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % thumbnails.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + thumbnails.length) % thumbnails.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-black relative overflow-hidden" id="thumbnail-showcase">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Video <span className="text-[#7CFC00]">Frames</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-body">
            Professional video frames showcasing our client work and creative expertise
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Video Frame Area */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative max-w-[640px] mx-auto aspect-video bg-zinc-900 rounded-xl overflow-hidden">
              <iframe
                key={currentIndex}
                src={currentThumbnail.videoSrc}
                title={currentThumbnail.title}
                width="640"
                height="480"
                allow="autoplay; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
              ></iframe>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
                aria-label="Previous video frame"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
                aria-label="Next video frame"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2">
                {thumbnails.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-[#00ff75] scale-110'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to video frame ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold">
              <span className="text-white">{currentThumbnail.title.split('Frames!')[0]}</span>
              <span className="text-[#00ff75]">Frames!</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {currentThumbnail.description}
            </p>
            <ul className="space-y-4">
              {currentThumbnail.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#00ff75]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};