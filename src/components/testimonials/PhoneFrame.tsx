import { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
}

export const PhoneFrame = ({ children }: PhoneFrameProps) => {
  return (
    <div className="relative mx-auto w-[280px] h-[560px] bg-black rounded-[3rem] border-[14px] border-black shadow-xl overflow-hidden">
      {/* Phone Details */}
      <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-3xl z-10">
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-neutral-800 rounded-full" />
      </div>
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-1 bg-neutral-800 rounded-full z-10" />
      
      {/* Phone Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-[2rem] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-white/20 rounded-full filter blur-xl" />
          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-white/10 rounded-full filter blur-xl" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-transparent">
        {children}
      </div>
    </div>
  );
};