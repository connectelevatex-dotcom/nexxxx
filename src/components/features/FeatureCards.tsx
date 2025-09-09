import { Instagram, Linkedin, Twitter } from 'lucide-react';

const features = [
  {
    title: 'Reliability',
    description: "We don't disappear mid projects.",
  },
  {
    title: 'Fast Production',
    description: 'Fastest possible production without quality compromise',
  },
  {
    title: 'Trust > Money',
    description: 'Trust over money anyday. We prioritize long-term relationships.',
  }
];

export const FeatureCards = () => {
  return (
    <section className="relative z-10 py-16 bg-black" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Why Choose <span className="text-[#7CFC00]">Us</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-body">
            Three core principles that set us apart from the competition
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
          {features.map((feature) => (
            <div key={feature.title} className="flex justify-center relative">
              <div className="card-3d-parent">
                <div className="card-3d">
                  <div className="glass-3d"></div>
                  
                  {/* Logo/Icon Section */}
                  <div className="logo-3d">
                    <span className="circle circle1"></span>
                    <span className="circle circle2"></span>
                    <span className="circle circle3"></span>
                    <span className="circle circle4"></span>
                    <span className="circle circle5">
                      {/* <feature.icon className="w-5 h-5 text-white" /> */} {/* Removed dynamic icon rendering */}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="content-3d">
                    <span className="title-3d">{feature.title}</span>
                    <span className="text-3d">{feature.description}</span>
                  </div>

                  {/* Bottom Section */}
                  <div className="bottom-3d">
                    <div className="social-buttons-container-3d">
                      <a
                        href="https://www.instagram.com/abdullah.sajidabbasi?igsh=MTBlMWxoemRxNzR0MA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-button-3d social-button1-3d"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                      <a
                        href="https://x.com/AbdullahAb92243?t=abts-R_WWJ9qE6HU9QAbxw&s=09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-button-3d social-button2-3d"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/abdullah-abbasi-7ab88a259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-button-3d social-button3-3d"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="view-more-3d">
                      <a
                        href="https://calendly.com/asaworkmedia/new-meeting"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-more-button-3d"
                      >Explore</a>
                      <svg
                        className="svg-3d"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};