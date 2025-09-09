import { useRef } from 'react';
import { VideoTestimonial } from '../../data/testimonials';

interface VideoPlayerProps {
  testimonial: VideoTestimonial;
}

export const VideoPlayer = ({ testimonial }: VideoPlayerProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="relative h-full w-full bg-transparent">
      <iframe
        ref={iframeRef}
        src={`${testimonial.url}`}
        className="absolute inset-0 w-full h-full rounded-2xl"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        title={testimonial.title}
        allowFullScreen
      />
    </div>
  );
};