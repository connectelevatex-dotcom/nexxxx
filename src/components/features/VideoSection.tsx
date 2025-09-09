import { Play } from 'lucide-react';

export const VideoSection = () => {
  return (
    <section className="relative w-full h-[800px] bg-black flex items-center justify-center">
      <div className="relative w-[60%] rounded-xl overflow-hidden video-container">
        <div className="absolute inset-0 video-border"></div>
        <video
          className="w-full rounded-xl shadow-2xl relative z-10"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1920&h=1080&q=80&fit=crop"
        >
          <source
            src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black z-20">
          <div className="h-full flex items-center justify-center">
            <button 
              className="group relative w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              aria-label="Play video"
            >
              <Play className="w-12 h-12 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-full border border-white/30 group-hover:border-white/50 transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};