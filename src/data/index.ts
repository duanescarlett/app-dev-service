import { 
  b1,
  exp3,
  grid,
  b4,
  p1,
  b5,
  p2,
  next,
  tail,
  ts,
  stream,
  c,
  p3,
  re,
  three,
  p4,
  fm,
  gsap,
  cloud,
  cloudName,
  app,
  appName,
  host,
  hostName,
  s,
  streamName,
  dock,
  dockerName,
  exp1,
  exp2,
  exp4,
  git,
  twit,
  link,
  insta,
} from "./imgHandler"

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: b1,
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: grid,
      spareImg: b4,
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: b5,
      spareImg: grid,
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "WooLook Eyeware",
      des: "Shop Bluelight Blocking Glasses & Screen Protective Glasses",
      img: p1,
      iconLists: [re, tail, ts, three, fm],
      link: "https://woo-look-eye-wear.vercel.app/",
    },
    {
      id: 2,
      title: "Puremaine Organics",
      des: "At PureMaine Organics, we're a passionate group of nature enthusiasts, health advocates, and organic living experts",
      img: p2,
      iconLists: [next, tail, ts, stream, c],
      link: "https://puremaineorganics.com",
    },
    {
      id: 3,
      title: "BRX Exchange - NFT Real Estate Application",
      des: "Discover the benefits of fractional Real Estate ownership. Manage your real estate investments with this secure application.",
      img: p3,
      iconLists: [re, tail, ts, three, c],
      link: "https://brx.exchange",
    },
    {
      id: 4,
      title: "Appy Meal - Food Delivery Application",
      des: "AppyMeal is a To-Go app looking to save money for restaurants by reducing fees while also allowing users to save money on orders placed in the app",
      img: p4,
      iconLists: [next, tail, ts, three, gsap],
      link: "https://appymeal.com/",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: cloud,
      nameImg: cloudName,
    },
    {
      id: 2,
      name: "appwrite",
      img: app,
      nameImg: appName,
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: host,
      nameImg: hostName,
    },
    {
      id: 4,
      name: "stream",
      img: s,
      nameImg: streamName,
    },
    {
      id: 5,
      name: "docker.",
      img: dock,
      nameImg: dockerName,
    },
  ];
  
  export const servicePackages = [
    {
      id: 1,
      title: "Ecommerce Package",
      desc: "Custom Ecommerce web application with user management and a CMS",
      className: "md:col-span-2",
      // thumbnail: exp1,
    },
    {
      id: 2,
      title: "Data Services",
      desc: "Current Data, give your business a competitive edge with real-time marketplace data.",
      className: "md:col-span-2", // change to md:col-span-2
      // thumbnail: exp2,
    },
    {
      id: 3,
      title: "Custom Web Application",
      desc: "Have an idea for a web app, like SAAS, PAAS, or AI? bring your idea to us and we will help you build it.",
      className: "md:col-span-2", // change to md:col-span-2
      // thumbnail: exp3,
    },
    {
      id: 4,
      title: "AI Application",
      desc: "Let us help you get more attention on Google. We can manage your search engine marketing campaign.",
      className: "md:col-span-2",
      // thumbnail: exp4,
    },
  ];
  
export const socialMedia = [
  {
    id: 1,
    img: git,
    url: "https://github.com/Nugentry-Applications"
  },
  {
    id: 2,
    img: insta,
    url: "https://www.instagram.com/softbloc_dev"
  },
  {
    id: 3,
    img: link,
    url: "https://www.linkedin.com/company/softbloc/?viewAsMember=true"
  },
];