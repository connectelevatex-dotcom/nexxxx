export interface Client {
  username: string;
  handle: string;
  followers: string;
  avatar: string;
  link: string;
}

export const clients: Client[] = [
  {
    username: "Envato Elements",
    handle: "Envato Elements",
    followers: "",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUosQh1I3IlzBhrO1V21w4cTtVbfO8TSAD0Q&s",
    link: "https://elements.envato.com/"
  },
  {
    username: "Skillshare",
    handle: "Skillshare",
    followers: "",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVI0Wi-E7Z4JnPsc3Gr5QBDZ5AXM1kN5FNRg&s",
    link: "https://www.skillshare.com/en/home?via=header"
  },
  {
    username: "Michael Morelli",
    handle: "Instagram",
    followers: "985K",
    avatar: "data:image/jpeg;base64,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",
    link: "https://www.instagram.com/morellifit/"
  },
  {
    username: "Second Thoughts",
    handle: "YouTube",
    followers: "1.87M",
    avatar: "https://yt3.googleusercontent.com/jFtBqUEecOwuVnfYv2ptgUx5fVp8GuMpZCcrytKlpZg82SzUY7_CrD-tI4qLqEfyBbfAjc9MLQ=s160-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/@SecondThought"
  },
  {
    username: "First Thoughts",
    handle: "YouTube",
    followers: "139K",
    avatar: "https://yt3.googleusercontent.com/gv82mXTpRgEB1Zq6vT9Lb4wP9xzdG2QdKn-1qyzHlFxSFwsgAShZTCyavfQyUGTy9qGShLVInA=s160-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/@firstthoughtnews"
  },
  {
    username: "Yugopnik",
    handle: "YouTube",
    followers: "252K",
    avatar: "https://yt3.googleusercontent.com/RCCix_kyGIY-CYqf1jGsU2LIW5jDDfpwo4cFgP6Lb-7ckRVaQes2yaGsxlbnQPJaStHj2h6s9A=s160-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/@YUGOPNIK"
  },
  {
    username: "Jake Tran",
    handle: "YouTube",
    followers: "1.86M",
    avatar: "https://yt3.googleusercontent.com/7DDKmxUn1j9T6pJRe_qZjG1KEs7bsWzOq_te-_6HG_qAhv8PxKoU_3Q6qm6vAel_AOqVp__OTl4=s160-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/@jaketran"
  },
  {
    username: "Louaista",
    handle: "YouTube",
    followers: "1.69M",
    avatar: "https://yt3.googleusercontent.com/SEWmuaN9FEOqK4qpTl1PBBN2uJi1dBEgHFA8uNxUYmYCTCBBKHyyoij-zm_9GGQPckpWi03jePE=s72-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/@louaista"
  },
  {
    username: "Cam Meunier",
    handle: "Instagram",
    followers: "99.2K",
    avatar: "data:image/jpeg;base64,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",
    link: "https://www.instagram.com/itscameracam/"
  },
  {
    username: "Onlytapa",
    handle: "Instagram",
    followers: "238K",
    avatar: "https://instagram.fisb19-1.fna.fbcdn.net/v/t51.2885-19/412464199_1099194587747670_315714071901219203_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fisb19-1.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QHx7-6nbcXkWVi6KYzKKrL6RjHTEv_I2F6UfgXvGXUxYuPhfXQUUwtIOLGUzi0Q4Hw&_nc_ohc=DXq4oIje7aAQ7kNvwHWxSDZ&_nc_gid=CnVWotjZCR7zfvb316pnqw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfX6kUhjgyzhFjcVQZv9KparATnyHteqBNPkP4ijorU7Lw&oe=68AE927F&_nc_sid=7a9f4b",
    link: "https://www.instagram.com/onlytapa.ai/"
  },
  {
    username: "Section 8 Karim",
    handle: "Instagram",
    followers: "596K",
    avatar: "https://instagram.fisb19-1.fna.fbcdn.net/v/t51.2885-19/324062855_491953156188499_6037266117919916139_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fisb19-1.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2QGyAceilGtQ0jZk5UcwUSkDiz6gPqtg80VzZN9azfoIwJxHpILcNx8RsyLN7jE2akU&_nc_ohc=Xyzy6qlmRbIQ7kNvwFUvsSo&_nc_gid=V0lbgd9bJrX1xVA4BKweiA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfXdXlY6RsuEj5dHfFmn7C-VgEd2M9H2mftsjSNv2xcTMw&oe=68AEA103&_nc_sid=7a9f4b",
    link: "https://www.instagram.com/section8karim/"
  },
  {
    username: "Marshal Crews",
    handle: "Instagram",
    followers: "341K",
    avatar: "https://instagram.fisb19-1.fna.fbcdn.net/v/t51.2885-19/474232874_959152166159319_781135593094877022_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fisb19-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QE-cWOkvQDWYUrzXUknpU0KkclBEMWrD99hCjoGezVzTevK-28-WMAqhymbqF_L0a4&_nc_ohc=e1-sk9IsjykQ7kNvwHHb0N8&_nc_gid=ajX_6JZPYZnYPRWZjnM0SA&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfWsGE9n9iNlMw_Gz1Q0YSsWzoQGa3fR41VT6RM4xOPdxQ&oe=68AEA421&_nc_sid=7d3ac5",
    link: "https://www.instagram.com/marshalcrews/"
  },
  {
    username: "Alex Chen",
    handle: "Instagram",
    followers: "119K",
    avatar: "https://instagram.fisb19-1.fna.fbcdn.net/v/t51.2885-19/483924368_655960690221967_5331672345653426973_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fisb19-1.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QGC-ymeXDK6dY34wZVA4Mp832GnH6cpkSI02OCyA_vRoz7trGl6V_WEMODWjPc3haE&_nc_ohc=jNR6NdOhCxkQ7kNvwH-7cgu&_nc_gid=dyxn0bAeodllrB8bdQxZlw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfXBhB8HNQhaxKjJ_EriLKbQkV2HMU2JE0SapYMLTfqzbg&oe=68AE7A83&_nc_sid=7a9f4b",
    link: "https://www.instagram.com/alexchen/"
  },
  {
    username: "Mike Hoffman",
    handle: "Instagram",
    followers: "205K",
    avatar: "https://instagram.fisb19-1.fna.fbcdn.net/v/t51.2885-19/461611253_374444492285567_1922841692189167005_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby43MTguYzIifQ&_nc_ht=instagram.fisb19-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2QECJCASERppR42QIxVyqL0pOuLw4AK8777gXz_EuXyuAP_Uewr9usFYbL57AQtQzCE&_nc_ohc=Yuycbr4LAIEQ7kNvwF8ITQC&_nc_gid=Qw977qrqabxASY-iklrbHQ&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfXDxkEUEzwlRdUC4Cjl6J5cVo7FJs3rmvPCTpyaUW_Bng&oe=68AE9B52&_nc_sid=7d3ac5",
    link: "https://www.instagram.com/mikehoffmannofficial/"
  },
  {
    username: "Yusuftruth",
    handle: "Instagram",
    followers: "268K",
    avatar: "https://instagram.fisb19-1.fna.fbcdn.net/v/t51.2885-19/491414994_1670969966856502_9143757797676603783_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby43MzguYzIifQ&_nc_ht=instagram.fisb19-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QFJg9c02qZWAqBRyfVQ5Dcg4Y6VeJ1bf7TJal8BZS9c88SWBPtZg7H0i3IIPqD7ejM&_nc_ohc=C89-iEx1vbUQ7kNvwF-L90l&_nc_gid=BdoqkpNS64pAG2ex7F3kZA&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfW8h2paukBZbtf9KRLvpQ-DCwryweJe1BqEiUEUshBNhw&oe=68AE70B8&_nc_sid=7d3ac5",
    link: "https://www.instagram.com/yusuftruth/"
  },
  {
    username: "Frederick Pahuus",
    handle: "Instagram",
    followers: "20K",
    avatar: "https://instagram.fisb19-1.fna.fbcdn.net/v/t51.2885-19/487067436_1161096865262262_988825651891346342_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fisb19-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QGMhsvuVxZpBUtTCXlYaQL6BolS15PkaM6roDQSyS5hCGsO9NgLuNsjAXI_WM_vBhY&_nc_ohc=Pv4amrUFgYgQ7kNvwGmgxYa&_nc_gid=HPOjFFkUAEGstnvwp6jOAQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfV8KHIvURFaWIws1WZo3qUxjWIXkoqij2i1jw2Q7GhzUQ&oe=68AE73E9&_nc_sid=7a9f4b",
    link: "https://www.instagram.com/frederikpahuus/"
  },
  {
    username: "Swift",
    handle: "YouTube",
    followers: "229K",
    avatar: "https://yt3.googleusercontent.com/ytc/AIdro_myekXcfPxpybJg2ypawN5t0p9tkbUgFur4s6-QgwVVn_A=s160-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/@SwiftMadden"
  },
  {
    username: "Robert Rosenfeld",
    handle: "YouTube",
    followers: "69.4K",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80&fit=crop",
    link: "https://yt3.googleusercontent.com/ytc/AIdro_nyCBnevO52BEDm6m7jiRndBcjj17J4bxXzPLcZcJIgLaI=s160-c-k-c0x00ffffff-no-rj"
  }
];