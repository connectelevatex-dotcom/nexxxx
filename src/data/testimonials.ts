export interface VideoTestimonial {
  id: number;
  url: string;
  title: string;
}

export interface TextTestimonial {
  id: number;
  content: string;
  author: string;
  company: string;
}

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    url: "https://drive.google.com/file/d/17OPoz37zeRFWX6UHBsMee4nA4aYy8jMb/preview",
    title: "Client Nexus Growthh"
  },
  // {
  //   id: 2,
  //   url: "https://drive.google.com/file/d/1Fne2xejDttvQHV87rt_e4DlNAnPWArcP/preview",
  //   title: "Client"
  // }
];

export const textTestimonials: TextTestimonial[] = [
  {
    id: 1,
    content: "exceeded expectations. no questions he took the project and completed on his own and very satisfied with the results.",
    author: "leotavdgiridze",
    company: "Georgia"
  },
  {
    id: 2,
    content: "The AI integration services provided by the team have revolutionized our customer support system. We've seen a 300% increase in customer satisfaction.",
    author: "Lisa Zhang",
    company: "AI Innovations"
  },
  {
    id: 3,
    content: "He did an amazing job and went above and beyond! Will return to him for more work!!",
    author: "wdkap18",
    company: "United States"
  },
  {
    id: 4,
    content: "Working with Nexus Growthh was an outstanding experience! His PROFESSIONALISM in video editing and language FLUENCY made the project a breeze. Highly recommend! 👍",
    author: "seasidecommerce",
    company: "United States"
  },
  {
    id: 5,
    content: "a very good freelancer. The price-performance ratio is also top. This collaboration was really fun and through direct and fast communication we quickly came to a very good end result. Highly recommended!",
    author: "agathagroup",
    company: "Germany"
  },
  {
    id: 7,
    content: "Really amazing VSL done by Nexus Growthh, highly recommend it and would use it again! 🔥",
    author: "s_maeuk",
    company: "United Kingdom"
  }
];