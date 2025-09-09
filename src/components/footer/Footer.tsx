import { Instagram, Linkedin, Twitter, Rocket } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer-gradient py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Brand Name */}
          <h3 className="text-2xl font-bold text-white font-heading tracking-wider flex items-center">
            <Rocket className="w-6 h-6 mr-2 text-[#7CFC00] rotate-6" />
            Nexus <span className="text-yellow-400">Growthh</span>
          </h3>
          
          {/* Description */}
          <p className="text-gray-300 text-center max-w-2xl text-sm leading-relaxed font-body">
            We help brands create better content with editing, ideation, packaging, and everything else in between.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://x.com/AbdullahAb92243?t=MKjDM6LQqGwDEcjb2BNKIQ&s=09"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#7CFC00] hover:bg-[#7CFC00]/10 transition-all duration-300 group"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-4 h-4 text-gray-400 group-hover:text-[#7CFC00] transition-colors duration-300" />
            </a>
            <a
              href="https://www.instagram.com/nexusgrowthh?igsh=MXJlN2lzNWJyYzBmMA=="
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#7CFC00] hover:bg-[#7CFC00]/10 transition-all duration-300 group"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-gray-400 group-hover:text-[#7CFC00] transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-abbasi-7ab88a259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#7CFC00] hover:bg-[#7CFC00]/10 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-[#7CFC00] transition-colors duration-300" />
            </a>
          </div>
          
          {/* Copyright and Made with */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl text-xs text-gray-500 space-y-2 md:space-y-0">
            <p>© 2025 Nexus Growthh. All rights reserved.</p>
            <p className="flex items-center space-x-1">
              <span>Made with</span>
              <span className="text-red-500">♥</span>
              <span>by</span>
              <a
                href="https://x.com/M_hamid_dev?t=BW69OHBX3z2HZDXDXezBhQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7CFC00] font-medium hover:underline"
              >
                Hamid
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};