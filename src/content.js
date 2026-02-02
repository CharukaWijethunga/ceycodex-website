
// 1. IMPORT YOUR IMAGES
import softwareIcon from './assets/software.png'; // Make sure the path is correct
import mobileIcon from './assets/mobile.png';
import cloudIcon from './assets/cloud.png';
import aiIcon from './assets/ai.png';
import ecommerceIcon from './assets/ecommerce.png';
import supportIcon from './assets/support.png';

export const navigation = {
  logo: "CeyCodeX",
  links: [
    { text: "Home", href: "#home" },
    { text: "Services", href: "#services" },
    { text: "Work", href: "#projects" },
    { text: "Open Source", href: "#open-source" },
    { text: "Team", href: "#team" },
    { text: "Careers", href: "#careers" },
    { text: "Contact", href: "#contact" },
  ],
};

export const heroContent = {
  title: "Digital transformation made simple for growing businesses.",
  subtitle:
    "Get a free consultation call to discuss your digitalization needs. We offer special rates for small companies and startups looking to go digital. Your requirements, our solutions.",
  primaryButton: "Schedule a free call",
  secondaryButton: "See how we help",
};

export const servicesContent = {
  title: "Solutions tailored for your business growth",
  subtitle:
    "Whether you're just starting your digital journey or scaling up, we have affordable solutions designed for small to medium businesses. Special rates for digitalization projects.",
  services: [
    {
      iconUrl: softwareIcon,
      title: "Business Management Systems",
      description:
        "Custom software solutions to streamline your operations, manage inventory, handle invoicing, and automate business processes. Perfect for small businesses going digital.",
    },
    {
      iconUrl: mobileIcon,
      title: "Mobile-First Experiences",
      description:
        "Reach your customers wherever they are with custom mobile apps. Track orders, manage bookings, or deliver services directly to your customers' phones.",
    },
    {
      iconUrl: cloudIcon,
      title: "Cloud Solutions & Hosting",
      description:
        "Move your business to the cloud safely and securely. Reduced infrastructure costs, automatic backups, and access from anywhere. Scalable as you grow.",
    },
    {
      iconUrl: aiIcon,
      title: "Smart Automation",
      description:
        "Automate repetitive tasks like customer follow-ups, report generation, data entry, and scheduling. Save time and reduce manual errors.",
    },
    {
      iconUrl: ecommerceIcon, 
      title: "Online Storefronts",
      description:
        "Launch your online store with integrated payment processing, inventory management, and customer analytics. We handle the technical side so you focus on selling.",
    },
    {
      iconUrl: supportIcon,
      title: "Ongoing Support & Growth",
      description:
        "24/7 technical support, regular updates, and continuous improvements. We stay by your side as your business evolves and grows.",
    },
  ],
};

export const projectsContent = {
    title: "Success stories from businesses like yours",
    subtitle: "See how we've helped small and growing businesses go digital and increase their revenue.",
    projects: [
  {
    "imageText": "Encro marketplace interface mockup",
    "title": "Encro – niche e‑commerce for sewing machine accessories",
    "summary": "We helped Encro launch a focused marketplace for sewing machine accessories with clear navigation, fast search, and an ordering flow tuned for repeat customers.",
    "tags": ["Wordpress", "Php", "WooCommerce"]
  },
  {
    "imageText": "Lynkr social profiles aggregation app UI",
    "title": "Lynkr – your unified social link",
    "summary": "Lynkr brings all of your profiles into a single, shareable link with a clean, mobile‑first interface and real‑time updates.",
    "tags": ["React", "Vite", "Firebase"]
  }
]
};

export const teamContent = {
    title: "The team behind CeyCodeX",
    subtitle: "A small, focused group of engineers and creatives who care about craft.",
    members: [
  { 
    avatar: "👨‍💻", 
    name: "Charuka Wijethunga", 
    title: "Founder", 
    quote: "\"I started CeyCodeX to build software that feels calm, considered, and genuinely useful. I still write code and shape every product we ship.\"" 
  },
  { 
    avatar: "👨‍💻", 
    name: "Nuwanthika Waihenage", 
    title: "Software Engineer", 
    quote: "\"I love taking complex requirements and turning them into simple, reliable experiences that users can trust every day.\"" 
  },
  { 
    avatar: "👨‍💻", 
    name: "Charith Nuwan", 
    title: "Software Engineer", 
    quote: "\"My focus is clean code, thoughtful architecture, and small details that quietly make your product feel premium.\"" 
  },
  { 
    avatar: "👨‍💻", 
    name: "Sathya Perera", 
    title: "Intern", 
    quote: "\"I'm here to learn fast, ship real features, and bring fresh energy to every project I work on.\"" 
  },

]
};

export const careersContent = {
    title: "Careers at CeyCodeX",
    subtitle: "Join a team that ships thoughtfully crafted software, not just tickets.",
    intro: "We’re building a calm, high‑trust environment for people who care about quality, learning, and meaningful work.",
    positions: [
       {
    "title": "UI/UX Designer",
    "description": "Design intuitive, clean interfaces for web and mobile. You’ll move from low‑fi flows to polished prototypes and work closely with engineers to make sure the final product feels as good as it looks.",
    "location": "Remote",
    "type": "Full-time"
}
       
    ]
};

export const openSourceprojectsContent = {
  title: "Open source & community",
  subtitle: "We learn from the open‑source world every day, so we’re committed to giving back.",
  contributions: [
   {
  "projectName": "QuietCanvas",
  "projectIcon": "🧘",
  "summary": "QuietCanvas is a distraction‑free meditation and journaling space, built in the open with a focus on calm interactions and accessible design.",
  "tags": ["Meditation", "OpenSource", "Community"],
  "githubUrl": "https://github.com/CeyCodeX/QuietCanvas"
}
   
  ]
};

export const contactContent = {
    title: "Ready to go digital? Let's talk.",
    subtitle: "Tell us about your business and what you'd like to achieve. We'll give you honest advice and a clear plan forward. No obligation, just real conversation.",
};

export const footerContent = {
    brand: "CeyCodeX",
    tagline: "Affordable digital solutions for small businesses ready to grow.",
    socials: [
        { title: "LinkedIn", icon: "in", href: "https://linkedin.com/company/ceycodex" },
        { title: "Twitter", icon: "𝕏", href: "https://twitter.com/ceycodex" },
        { title: "GitHub", icon: "⚙️", href: "https://github.com/ceycodex" }
    ],
    sections: [
        {
            title: "Company",
            links: [
                { text: "About Us", href: "#about" },
                { text: "Services", href: "#services" },
                { text: "Projects", href: "#projects" },
                { text: "Blog", href: "#blog" },
                { text: "Careers", href: "#careers" }
            ]
        },
        {
            title: "Solutions",
            links: [
                { text: "Web Application Development", href: "#services" },
                { text: "Mobile App Development", href: "#services" },
                { text: "Cloud Infrastructure", href: "#services" },
                { text: "AI & Machine Learning", href: "#services" },
                { text: "E-commerce Solutions", href: "#services" }
            ]
        },
        {
            title: "Resources",
            links: [
                { text: "Documentation", href: "#" },
                { text: "Case Studies", href: "#projects" },
                { text: "Technology Stack", href: "#" },
                { text: "Open Source", href: "#open-source" },
                { text: "Developer Guide", href: "#" }
            ]
        },
        {
            title: "Legal",
            links: [
                { text: "Privacy Policy", href: "#" },
                { text: "Terms of Service", href: "#" },
                { text: "Cookie Policy", href: "#" },
                { text: "Disclaimer", href: "#" }
            ]
        }
    ],
    cta: {
        title: "Let's grow your business together",
        description: "Get special rates on digitalization projects. Call us for a free consultation.",
        button: "Schedule a free call"
    },
    copyright: "© 2025 CeyCodeX. Affordable Digital Solutions for Growing Businesses. All rights reserved.",
    location: "Sri Lanka",
    email: "hello@ceycodex.com"
};