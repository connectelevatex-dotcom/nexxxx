import { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: string;
  duration?: number;
  plus?: boolean;
}

export const CountUp = ({ end, duration = 2000, plus = false }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;
    const startValue = 0;
    const endValue = Number.parseInt(end.replace(/,/g, ""));

    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * (endValue - startValue) + startValue);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(countUp);
      }
    };

    animationFrame = requestAnimationFrame(countUp);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <span ref={countRef}>
      {formattedCount}
      {plus && <span className="text-[#7CFC00]">+</span>}
    </span>
  );
};