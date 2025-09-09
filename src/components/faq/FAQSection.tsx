import { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What services do you offer for content creation?",
    answer: "We offer comprehensive content creation services including video editing, thumbnail design, motion graphics, ideation and consulting, social media content optimization for YouTube, Instagram, and LinkedIn platforms."
  },
  {
    id: 2,
    question: "How long does it typically take to complete a project?",
    answer: "Project timelines vary depending on complexity and scope. Simple video edits typically take 2-3 days, while complex motion graphics projects may take 1-2 weeks. We always provide clear timelines upfront and keep you updated throughout the process."
  },
  {
    id: 3,
    question: "Do you offer unlimited revisions?",
    answer: "Yes! We believe in getting your content exactly right. We offer unlimited revisions until you're completely satisfied with the final result. Your success is our priority, and we'll work with you until we achieve the perfect outcome."
  },
  {
    id: 4,
    question: "What makes your content creation different from others?",
    answer: "We focus on three key principles: Reliability (we don't disappear mid-project), Fast Production (quick turnaround without compromising quality), and Trust over Money (we prioritize long-term relationships over short-term profits)."
  },
  {
    id: 5,
    question: "Can you help with content strategy and ideation?",
    answer: "Absolutely! Beyond just creating content, we offer strategic consulting to help you develop content ideas that resonate with your audience, optimize for platform algorithms, and drive engagement and growth."
  },
  {
    id: 6,
    question: "What platforms do you specialize in?",
    answer: "We specialize in creating content optimized for YouTube, Instagram, LinkedIn, and other major social media platforms. Each platform has unique requirements, and we tailor our approach accordingly."
  },
  {
    id: 7,
    question: "How do you ensure brand consistency across all content?",
    answer: "We start every partnership with a comprehensive brand analysis and style guide creation. This ensures all content maintains your unique voice, visual identity, and messaging consistency across all platforms and projects."
  },
  {
    id: 8,
    question: "What are your pricing models?",
    answer: "We offer flexible pricing models including per-project rates, monthly retainers, and custom packages based on your specific needs. Contact us for a personalized quote tailored to your requirements and budget."
  }
];

export const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden" aria-label="Frequently Asked Questions" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-heading px-4">
            Frequently Asked <span className="text-[#7CFC00]">Questions</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-body px-4">
            Get answers to the most common questions about our content creation services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="faq-item bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 overflow-hidden transition-all duration-300 hover:border-zinc-700"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#7CFC00]/50 focus:ring-inset transition-all duration-300 hover:bg-zinc-800/30"
                aria-expanded={openFAQ === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="text-white font-semibold text-base sm:text-lg pr-4 font-body">
                  {faq.question}
                </span>
                
                {/* Icon Indicator */}
                <div className="flex-shrink-0 transition-transform duration-300">
                  {openFAQ === faq.id ? (
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-[#7CFC00]" />
                  ) : (
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div
                id={`faq-answer-${faq.id}`}
                className={`faq-answer overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === faq.id 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
                aria-hidden={openFAQ !== faq.id}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-4"></div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-body">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions? We're here to help!</p>
          <a
            href="https://calendly.com/asaworkmedia/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7CFC00] hover:bg-[#6CE400] text-black font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};