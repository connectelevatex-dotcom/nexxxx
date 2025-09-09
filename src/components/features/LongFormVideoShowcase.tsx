import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { longFormVideos, LongFormVideo } from '../../data/longform-videos';

interface VideoCardProps {
  video: LongFormVideo;
}

const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <div className="group relative bg-zinc-900 rounded-xl overflow-hidden">
      {/* Video Container */}
      <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={video.url}
          className="absolute top-0 left-0 w-full h-full border-0"
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
  );
};

export const LongFormVideoShowcase = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden" aria-label="Long-form video showcase" id="long-form-videos">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-heading px-4">
            Long-Form <span className="text-[#7CFC00]">Content</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-body">
            In-depth video content that tells your story and engages your audience
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto px-4">
          {longFormVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
            />
          ))}
        </div>
      </div>
    </section>
  );
};