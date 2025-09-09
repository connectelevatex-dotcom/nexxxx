import { Hero } from './components/hero/Hero';
import { ClientShowcase } from './components/clients/ClientShowcase';
// import { VideoSection } from './components/features/VideoSection';
import { VideoCarousel } from './components/features/VideoCarousel';
import { LongFormVideoShowcase } from './components/features/LongFormVideoShowcase';
import { ThumbnailShowcase } from './components/features/ThumbnailShowcase';
import { FeatureCards } from './components/features/FeatureCards';
import { FAQSection } from './components/faq/FAQSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { CommunicationSection } from './components/communication/CommunicationSection';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <>
      <Hero />
      
      <ClientShowcase />
      {/* <VideoSection /> */}
      <FeatureCards />
      <VideoCarousel />
      <LongFormVideoShowcase />
      <ThumbnailShowcase />
      <FAQSection />
      <TestimonialsSection />
      <CommunicationSection />
      <Footer />
    </>
  );
}

export default App;