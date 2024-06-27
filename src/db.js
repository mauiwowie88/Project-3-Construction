/* Past Projects Images */
import one from "../assets/images/outside/b.jpg";
import two from "../assets/images/outside/c.jpg";
import three from "../assets/images/outside/d.jpg";
import four from "../assets/images/outside/d.webp";
import six from "../assets/images/outside/f.jpg";
import seven from "../assets/images/outside/f.webp";
import eight from "../assets/images/outside/g.jpg";
import nine from "../assets/images/outside/h.jpg";
import ten from "../assets/images/outside/i.jpg";
import eleven from "../assets/images/outside/j.jpg";
import twelve from "../assets/images/outside/k.png";

import yellow from "../assets/images/newest/yellow.jpg";

import EngineeringIcon from "@mui/icons-material/Engineering";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import HardwareIcon from "@mui/icons-material/Hardware";
import RoofingIcon from "@mui/icons-material/Roofing";
import FoundationIcon from "@mui/icons-material/Foundation";
import CarpenterIcon from "@mui/icons-material/Carpenter";

/* Our Services Images */
import bathroom from "../assets/images/inside/bathroom.jpg";
import livingRoom from "../assets/images/inside/living-room.jpg";
import kitchen from "../assets/images/inside/kitchen.jpg";
import exterior from "../assets/images/outside/exterior.jpg";
import deck from "../assets/images/outside/Deck.jpg";
import interior from "../assets/images/inside/fancy.jpg";

import hero from "../assets/images/newest/hero.jpg";

/* Our Defining Characteristics Images */
import book from "../assets/images/other/book.jpg";
import development from "../assets/images/other/development.jpg";
import engineering from "../assets/images/other/eee.jpg";
import pricing from "../assets/images/other/pricing.jpg";
import trust from "../assets/images/other/trust.jpg";
import time from "../assets/images/other/time.png";

/* Section Images */
import introImg from "../assets/images/outside/theone.jpg";
import testimonialsImg from "../assets/images/outside/k.jpg";
import aboutImg from "../assets/images/other/dope.jpg";
import callUsImg from "../assets/images/other/carpentry.jpg";
import servicesImg from "../assets/images/other/good.jpg";
import contactImg from "../assets/images/outside/p.jpg";
import galleryImg from "../assets/images/outside/wow.jpg";

import iOne from "../assets/images/inside/i-2.jpg";
import iTwo from "../assets/images/inside/i-2.jpg";
import iThree from "../assets/images/inside/i-3.jpg";
import iFour from "../assets/images/inside/i-3.jpg";

import a from "../assets/images/inside/1.jpg";
import b from "../assets/images/inside/2.webp";
import c from "../assets/images/inside/3.jpg";
import d from "../assets/images/inside/4.avif";
import e from "../assets/images/inside/5.avif";
import f from "../assets/images/inside/5.jpg";
import g from "../assets/images/inside/6.jpeg";
import h from "../assets/images/inside/7.avif";
import i from "../assets/images/inside/8.jpg";
import j from "../assets/images/inside/9.avif";
import k from "../assets/images/inside/10.png";
import l from "../assets/images/inside/11.jpg";
import m from "../assets/images/inside/11.webp";
import n from "../assets/images/inside/bg.jpg";

import o from "../assets/images/other/en.jpg";

import demolition from "../assets/images/new/demolition.webp";
import electric from "../assets/images/new/electric.jpg";
import flooring from "../assets/images/new/flooring.jpg";
import framer from "../assets/images/new/framer.jpg";
import grading from "../assets/images/new/grading.jpg";
import painter from "../assets/images/new/painter.jpg";
import plumber from "../assets/images/new/plumber.jpg";
import welder from "../assets/images/new/welder.webp";

// const images.sort(bysection)

const services = [
  {
    title: "GENERAL CONTRACTING",
    items: [
      {
        title: "Budget & Coordination",
        tasks: [
          "Budgeting and cost analysis",
          "Architect and engineering engagement",
          "Subcontractor management",
          "Submittals/Requests for information (RFIs)",
          "Quality control",
        ],
      },
      {
        title: "Onsite Performance",
        tasks: [
          "Health Insurance Portability and Accountability Act (HIPAA) noise mitigation",
          "Monitor and coordinate onsite work performance",
          "Land use compatibility analysis",
          "Permitting",
        ],
      },
      {
        title: "Documentation & Reporting",
        tasks: [
          "Feasibility Studies",
          "Ongoing coordination with architects and engineers",
          "Monthly Owner/Architect/Contractor collaboration",
          "Weekly progress reports (with photos)",
          "Closeout and warranty documentation",
          "Punchlist and completion list",
          "Certificate of Occupancy",
        ],
      },
    ],
  },
  {
    title: "PRECONSTRUCTION",
    items: [
      {
        title: "Initial Planning",
        tasks: [
          "Preliminary budgeting and cost estimating",
          "Scheduling",
          "Value engineering",
        ],
      },
      {
        title: "Management",
        tasks: [
          "Permitting",
          "Procurement management",
          "Bid packaging",
          "Project material and equipment requisition",
          "Subcontractor sourcing and allocation",
          "Safety evaluation",
        ],
      },
    ],
  },
  {
    title: "SPECIALTY DESIGN/BUILD AREAS",
    items: [
      {
        title: "Healthcare Facilities",
        tasks: [
          "Hospitals; E.g. Emergency rooms, Trauma centers, Operating rooms, N.I.C.U.’s",
          "Medical Office Buildings; E.g. Dental Offices, General Practitioners",
          "Specialty Clinics; E.g. Oncology Centers, Cosmetic Surgery Centers",
          "Testing and Imaging Centers; E.g. Magnetic Resonance imaging, Computerized Tomography scans, X-Ray rooms",
        ],
      },
      {
        title: "Animal Facilities",
        tasks: ["Veterinary clinics, animal resource centers"],
      },
      {
        title: "Commercial Buildings",
        tasks: [
          "Commercial Office Buildings; E.g. mixed use, ground up, tenant improvement",
        ],
      },
    ],
  },
  {
    title: "CONSTRUCTION MANAGEMENT",
    items: [
      {
        title: "Project Planning & Control",
        tasks: [
          "Design and construction phase management",
          "Schedule controls",
          "Quality controls",
          "Issue resolution",
          "Change management",
        ],
      },
      {
        title: "Financial Management",
        tasks: [
          "Budgeting and cost controls",
          "Cash flow modeling, analysis and forecasting",
          "Bid evaluation and reconciliation",
        ],
      },
      {
        title: "Reporting and Documentation",
        tasks: [
          "Regular assessments and status reporting",
          "Punch list coordination",
          "FF&E procurement and move coordination services",
          "Project recovery solutions",
        ],
      },
    ],
  },
];

const work = [
  {
    label: "Framing",
    imgPath: framer,
    tasks: [
      "Measure and cut wood or metal framing materials.",
      "Assemble and erect the framework for walls and roofs.",
      "Ensure structural integrity and compliance with building codes.",
    ],
  },
  {
    label: "Painting",
    imgPath: painter,
    tasks: [
      "Prepare surfaces by cleaning, scraping, and sanding.",
      "Apply primer and paint using brushes, rollers, or sprayers.",
      "Ensure even coverage and clean edges.",
    ],
  },
  {
    label: "Flooring",
    imgPath: flooring,
    tasks: [
      "Measure, cut, and install various flooring materials (e.g., tiles, hardwood, carpet).",
      "Prepare and level the subfloor.",
      "Apply finishing touches such as sealing or polishing.",
    ],
  },
  {
    label: "Electrical",
    imgPath: electric,
    tasks: [
      "Install wiring through conduits and walls.",
      "Connect electrical panels, outlets, and switches.",
      "Ensure compliance with electrical codes and safety standards.",
    ],
  },
  {
    label: "Plumbing",
    imgPath: plumber,
    tasks: [
      "Install, repair, and maintain pipes, valves, fittings, drainage systems, and fixtures.",
      "Troubleshoot and fix issues with water supply lines.",
      "Ensure all installations and repairs are up to code.",
    ],
  },
  {
    label: "Grading",
    imgPath: grading,
    tasks: [
      "Measure and plan the landscape for proper water drainage and structural foundations.",
      "Operate heavy machinery to level the ground.",
      "Prepare the site for construction or landscaping projects.",
    ],
  },
  {
    label: "Welding",
    imgPath: welder,
    tasks: [
      "Cut, shape, and join metal parts using various welding techniques.",
      "Inspect and test welds and equipment for safety.",
      "Maintain welding equipment and tools.",
    ],
  },
  {
    label: "Demolition",
    imgPath: demolition,
    tasks: [
      "Assess the structure and plan the demolition process.",
      "Use tools and machinery to safely dismantle structures.",
      "Manage debris removal and recycling of materials.",
    ],
  },
];

/* Introduction Paragraph */
const intro = [
  "Project 3 Construction is a San Marcos based commercial general contractor specializing in tenant improvements, renovations, additions, and ground-up construction projects.",
  "As full-service custom home builders and general contractors, we adeptly manage every facet of home construction and guide you through the personalized home building journey.",
];

/* Our Mission Statement */
const mission = [
  "A culture where our team members are empowered to do what they do best because they ARE the best at what they do.",
  "A culture where people matter, are respected, and aren’t just used as a means to an end.",
  "A culture where honesty, transparency, and forthrightness are defining characteristics of our process and all our relationships.",
  "A culture where our team members are empowered to do what they do best because they ARE the best at what they do.",
  "A culture that is constantly learning, adapting, and growing.",
];

import dope from "../assets/images/other/dope.jpg";
import kkk from "../assets/images/other/kkk.jpeg";

const sections = [
  {
    title: "Building Dreams, One Home at a Time",
    description:
      "With over 25 years of experience, we are dedicated to turning your vision into reality with exceptional craftsmanship and attention to detail.With over 25 years of experience, we are dedicated to turning your vision into reality with exceptional craftsmanship and attention to detail.",
    image: d,
    route: "About",
    button: "About Us",
  },
  {
    title: "Innovative Solutions for Modern Living",
    description:
      "From home technology to energy efficiency, we provide comprehensive services to bring your vision to life.",
    image: m,
    route: "Services",
    button: "Our Services",
  },
  {
    title: "Showcasing Excellence in Every Project",
    description:
      "Explore our portfolio of projects, each reflecting our commitment to quality and client satisfaction.",
    image: g,
    route: "Gallery",
    button: "Past Projects",
  },
  {
    title: "Start Your Journey with Us Today",
    description:
      "Ready to start your next construction project? Contact us for expert guidance and personalized service.",
    image: n,
    route: "Contact",
    button: "Contact Us",
  },
];

/* Section Pictures */
const sectionImgs = [
  {
    title: "Intro",
    image: hero,
    size: { xs: 300, sm: 350, md: 400, lg: 600 },
    opacity: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1))",
  },
  {
    title: "Testimonials",
    image: testimonialsImg,
    size: { xs: 200, sm: 200, md: 200, lg: 200 },
    opacity: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
  },
  {
    title: "About",
    image: b,
    size: { xs: 200, sm: 250, md: 300, lg: 400 },
    opacity: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9))",
  },
  {
    title: "Call Us",
    image: callUsImg,
    size: { xs: 185, sm: 250, md: 310, lg: 360 },
    opacity: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
  },
  {
    title: "Services",
    image: c,
    size: { xs: 200, sm: 250, md: 350, lg: 400 },
    opacity: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))",
  },
  {
    title: "Contact",
    image: yellow,
    size: { xs: 140, sm: 210, md: 320, lg: 320 },
    opacity: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5))",
  },

  {
    title: "Gallery",
    image: iOne,
    size: { xs: 200, sm: 250, md: 300, lg: 350 },
    opacity: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3))",
  },
];

/* Our Services */
const yo = [
  {
    title: "Kitchen",
    description:
      "We build dream kitchens, including custom remodels, new tile and backsplashes, sink replacement, appliance installation, new flooring, and countertops.",
    image: kitchen,
    size: 12,
    xs: 12,
    sm: 12,
    md: 12,
  },
  {
    title: "Bathroom",
    description:
      "Let us build the bathroom you've been dreaming of, including tile work, new fixtures, bathtub and shower installation, painting, cabinets, sinks, countertops, lighting, and flooring.",
    image: bathroom,
    xs: 12,
    sm: 6,
    md: 6,
  },
  {
    title: "Interior",
    description:
      "We are skilled at refreshing interiors, including trim & baseboards, flooring repair & replacement, painting, drywall repair and patching, tile work, and custom furniture & carpentry.",
    image: livingRoom,
    xs: 12,
    sm: 6,
    md: 6,
  },
  {
    title: "Outbuilding",
    description:
      "We build and renovate all types of outbuildings, including sheds, accessory dwelling units (ADUs), workshops, studios, garages and garage apartments.",
    image: exterior,
    xs: 12,
    sm: 12,
    md: 12,
  },
  {
    title: "Exterior",
    description:
      "We do all types of exterior projects, including: decks and deck rebuilding, patio covers, sheds and outbuildings, concrete pads, stairs, sidewalks, wheelchair ramps, porch repairs and additions, catios, pergolas & arbors, siding & dry rot repairs.",
    image: deck,
    xs: 12,
    sm: 6,
    md: 6,
  },
  {
    title: "Home Addition",
    description:
      "We can help add more space to your home through custom home additions, garage conversions, room additions, attic loft conversions and more.",
    image: interior,
    xs: 12,
    sm: 6,
    md: 6,
  },
];

/* Our Defining Characteristics */
const characteristics = [
  {
    title: "Trust",
    description:
      "Trust is the number one factor to success in a partnership. This holds equally true for the relationship between a builder and the homeowner.  Trust is not something that can be written into the policy handbook of a company.  It has to be part of the company DNA. And it has to start with team members who value integrity over everything else, including self-preservation.",
    image: trust,
    xs: 12,
    sm: 12,
    md: 12,
  },
  {
    title: "Engineering",
    description:
      "With our long history of building luxury homes combined with our development expertise, we know how to optimize your design to maximize your budget and give you the best home experience. ",
    image: engineering,
    xs: 12,
    sm: 6,
    md: 6,
  },
  {
    title: "Pricing",
    description:
      "Our broad market presence gives us pricing tiers with our partners that other general contractors cannot obtain. And, because of our open book process, the savings go directly to you as the homeowner.",
    image: pricing,
    xs: 12,
    sm: 6,
    md: 6,
  },
  {
    title: "Development",
    description:
      "We have a broad range of experience regarding all aspects of real estate, not just the construction phase.",
    image: development,
    xs: 12,
    sm: 12,
    md: 4,
  },
  {
    title: "Bookkeeping",
    description:
      "Project 3 employs three accounting managers who are dedicated to processing our pay applications and reconciling our budgets with the utmost accuracy.",
    image: book,
    xs: 12,
    sm: 6,
    md: 4,
  },
  {
    title: "Time Management",
    description:
      "We have spent years fine tuning Project 3 to run efficiently by eliminating middlemen, scheduling precisely, and clearly communicating expectations with all parties involved.",
    image: time,
    xs: 12,
    sm: 6,
    md: 4,
  },
];

/* Our Past Projects */
const portfolio = [
  {
    title: "Elkins Meadows Retreat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit quis purus condimentum fermentum.",
    dateStarted: "May 24 2022",
    dateFinished: "October 8 2023",
    payRange: "2,000 k",
    location: "Austin, TX",
    image: one,
  },
  {
    title: "Sidney Peak Haven",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit quis purus condimentum fermentum.",
    dateStarted: "May 24 2022",
    dateFinished: "October 8 2023",
    payRange: "2,000 k",
    location: "Austin, TX",
    image: two,
  },
  {
    title: "Steamboat Country Escape",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit quis purus condimentum fermentum.",
    dateStarted: "May 24 2022",
    dateFinished: "October 8 2023",
    payRange: "2,000 k",
    location: "Austin, TX",
    image: three,
  },
  {
    title: "Slopeside Perch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit quis purus condimentum fermentum.",
    dateStarted: "May 24 2022",
    dateFinished: "October 8 2023",
    payRange: "2,000 k",
    location: "Austin, TX",
    image: four,
  },
  {
    title: "Mountain Modern Homestead",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit quis purus condimentum fermentum.",
    dateStarted: "May 24 2022",
    dateFinished: "October 8 2023",
    payRange: "2,000 k",
    location: "Austin, TX",
    image: introImg,
  },
  {
    title: "Twenty Mile Ranch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit quis purus condimentum fermentum.",
    dateStarted: "May 24 2022",
    dateFinished: "October 8 2023",
    payRange: "2,000 k",
    location: "Austin, TX",
    image: six,
  },
  {
    title: "Sidney Peak",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit quis purus condimentum fermentum.",
    dateStarted: "May 24 2022",
    dateFinished: "October 8 2023",
    payRange: "2,000 k",
    location: "Austin, TX",
    image: seven,
  },
  {
    title: "Trail Edge Townhomes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit quis purus condimentum fermentum.",
    dateStarted: "May 24 2022",
    dateFinished: "October 8 2023",
    payRange: "2,000 k",
    location: "Austin, TX",
    image: eight,
  },
  {
    title: "Downtown Charm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit quis purus condimentum fermentum.",
    dateStarted: "May 24 2022",
    dateFinished: "October 8 2023",
    payRange: "2,000 k",
    location: "Austin, TX",
    image: nine,
  },
  {
    title: "Historic Farmhouse Restoration",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit quis purus condimentum fermentum.",
    dateStarted: "May 24 2022",
    dateFinished: "October 8 2023",
    payRange: "2,000 k",
    location: "Austin, TX",
    image: ten,
  },
  {
    title: "Creekside Sanctuary",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit quis purus condimentum fermentum.",
    dateStarted: "May 24 2022",
    dateFinished: "October 8 2023",
    payRange: "2,000 k",
    location: "Austin, TX",
    image: eleven,
  },
  {
    title: "Downtown Family Retreat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit quis purus condimentum fermentum.",
    dateStarted: "May 24 2022",
    dateFinished: "October 8 2023",
    payRange: "2,000 k",
    location: "Austin, TX",
    image: twelve,
  },
];

export {
  portfolio,
  characteristics,
  mission,
  sections,
  yo,
  work,
  intro,
  sectionImgs,
  services,
};
