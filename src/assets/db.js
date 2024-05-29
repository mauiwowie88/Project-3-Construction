/* Past Projects Images */
import one from "./images/outside/b.jpg";
import two from "./images/outside/c.jpg";
import three from "./images/outside/d.jpg";
import four from "./images/outside/d.webp";
import six from "./images/outside/f.jpg";
import seven from "./images/outside/f.webp";
import eight from "./images/outside/g.jpg";
import nine from "./images/outside/h.jpg";
import ten from "./images/outside/i.jpg";
import eleven from "./images/outside/j.jpg";
import twelve from "./images/outside/k.png";

/* Our Services Images */
import bathroom from "./images/inside/bathroom.jpg";
import livingRoom from "./images/inside/living-room.jpg";
import kitchen from "./images/inside/kitchen.jpg";
import exterior from "./images/outside/exterior.jpg";
import deck from "./images/outside/Deck.jpg";
import interior from "./images/inside/fancy.jpg";

/* Our Defining Characteristics Images */
import book from "./images/other/book.jpg";
import development from "./images/other/development.jpg";
import engineering from "./images/other/eee.jpg";
import pricing from "./images/other/pricing.jpg";
import trust from "./images/other/trust.jpg";
import time from "./images/other/time.png";

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

import a from "./images/inside/1.jpg";
import b from "./images/inside/2.webp";
import c from "./images/inside/3.jpg";
import d from "./images/inside/4.avif";
import e from "./images/inside/5.avif";
import f from "./images/inside/5.jpg";
import g from "./images/inside/6.jpeg";
import h from "./images/inside/7.avif";
import i from "./images/inside/8.jpg";
import j from "./images/inside/9.avif";
import k from "./images/inside/10.png";
import l from "./images/inside/11.jpg";
import m from "./images/inside/11.webp";
import n from "./images/inside/bg.jpg";

import o from "./images/other/en.jpg";

import demolition from "../assets/images/new/demolition.webp";
import electric from "../assets/images/new/electric.jpg";
import flooring from "../assets/images/new/flooring.jpg";
import framer from "../assets/images/new/framer.jpg";
import grading from "../assets/images/new/grading.jpg";
import painter from "../assets/images/new/painter.jpg";
import plumber from "../assets/images/new/plumber.jpg";
import welder from "../assets/images/new/welder.webp";

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

/* Customer Testimonials */
const quotes = [
  {
    label: `"Working with Project 3 was an absolute delight! Their professionalism and attention to detail exceeded my expectations. From start to finish, the team demonstrated a deep understanding of our needs and delivered exceptional results. I highly recommend their services to anyone seeking top-notch quality and expertise."`,
    imgPath: testimonialsImg,
  },
  {
    label: `"I can't thank Project 3 enough for their outstanding work. Their dedication to excellence and commitment to customer satisfaction are truly commendable. The entire process was seamless, and the final outcome exceeded our wildest expectations. I wouldn't hesitate to collaborate with them again in the future."`,
    imgPath: testimonialsImg,
  },
  {
    label: `"Choosing Project 3 was one of the best decisions I've made for my business. Their team of experts went above and beyond to ensure our project's success. Their innovative solutions and strategic approach helped us achieve remarkable results in record time. I'm grateful for their partnership and highly recommend their services to others."`,
    imgPath: testimonialsImg,
  },
  {
    label: `"I've had the pleasure of working with Project 3 on multiple projects, and each time, they've delivered nothing short of excellence. Their professionalism, creativity, and attention to detail set them apart from the rest. I'm continually impressed by their ability to turn our ideas into reality and would recommend them to anyone seeking top-tier quality and service."`,
    imgPath: testimonialsImg,
  },
  {
    label: `"I couldn't be happier with the results Project 3 delivered. Their team's expertise and dedication to our project were evident from day one. They took the time to understand our goals and vision, and their strategic guidance was invaluable. Thanks to their efforts, we were able to achieve remarkable success and elevate our brand to new heights."`,
    imgPath: testimonialsImg,
  },
];

const sections = [
  {
    title: "Building Dreams, One Home at a Time",
    description:
      "With over 25 years of experience, we are dedicated to turning your vision into reality with exceptional craftsmanship and attention to detail.",
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
    image: galleryImg,
    size: { xs: 300, sm: 350, md: 400, lg: 600 },
    opacity: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1))",
  },
  {
    title: "Testimonials",
    image: testimonialsImg,
    size: { xs: 300, sm: 300, md: 300, lg: 300 },
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
    size: { xs: 185, sm: 250, md: 360, lg: 420 },
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
    image: d,
    size: { xs: 300, sm: 350, md: 400, lg: 350 },
    opacity: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3))",
  },

  {
    title: "Gallery",
    image: testimonialsImg,
    size: { xs: 300, sm: 350, md: 400, lg: 450 },
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
  },
  {
    title: "Bathroom",
    description:
      "Let us build the bathroom you've been dreaming of, including tile work, new fixtures, bathtub and shower installation, painting, cabinets, sinks, countertops, lighting, and flooring.",
    image: bathroom,
    size: 6,
  },
  {
    title: "Interior",
    description:
      "We are skilled at refreshing interiors, including trim & baseboards, flooring repair & replacement, painting, drywall repair and patching, tile work, and custom furniture & carpentry.",
    image: livingRoom,
    size: 6,
  },
  {
    title: "Outbuilding",
    description:
      "We build and renovate all types of outbuildings, including sheds, accessory dwelling units (ADUs), workshops, studios, garages and garage apartments.",
    image: exterior,
    size: 12,
  },
  {
    title: "Exterior",
    description:
      "We do all types of exterior projects, including: decks and deck rebuilding, patio covers, sheds and outbuildings, concrete pads, stairs, sidewalks, wheelchair ramps, porch repairs and additions, catios, pergolas & arbors, siding & dry rot repairs.",
    image: deck,
    size: 6,
  },
  {
    title: "Home Addition",
    description:
      "We can help add more space to your home through custom home additions, garage conversions, room additions, attic loft conversions and more.",
    image: interior,
    size: 6,
  },
];

const work = [
  {
    label: "Framing",
    imgPath: framer,
  },
  {
    label: "Painting",
    imgPath: painter,
  },
  {
    label: "Flooring",
    imgPath: flooring,
  },
  {
    label: "Electrical",
    imgPath: electric,
  },
  {
    label: "Plumbing",
    imgPath: plumber,
  },
  {
    label: "Grading",
    imgPath: grading,
  },
  {
    label: "Welding",
    imgPath: welder,
  },
  {
    label: "Demolition",
    imgPath: demolition,
  },
];

/* Our Defining Characteristics */
const characteristics = [
  {
    title: "Trust",
    description:
      "Trust is the number one factor to success in a partnership. This holds equally true for the relationship between a builder and the homeowner.  Trust is not something that can be written into the policy handbook of a company.  It has to be part of the company DNA. And it has to start with team members who value integrity over everything else, including self-preservation.",
    image: trust,
    size: 12,
  },
  {
    title: "Engineering",
    description:
      "With our long history of building luxury homes combined with our development expertise, we know how to optimize your design to maximize your budget and give you the best home experience. Instead of spending money on expensive structural components or inefficient layouts, your money will be directed to things you see, feel, and encounter daily.",
    image: engineering,
    size: 6,
  },
  {
    title: "Pricing",
    description:
      "Our broad market presence gives us pricing tiers with our partners that other general contractors cannot obtain. And, because of our open book process, the savings go directly to you as the homeowner.",
    image: pricing,
    size: 6,
  },
  {
    title: "Development",
    description:
      "We have a broad range of experience regarding all aspects of real estate, not just the construction phase.",
    image: development,
    size: 4,
  },
  {
    title: "Bookkeeping",
    description:
      "Money management is vital when it comes to the success of a business. That is why Project 3 employs three accounting managers who are dedicated to processing our pay applications and reconciling our budgets with the utmost accuracy.",
    image: book,
    size: 4,
  },
  {
    title: "Time Management",
    description:
      "We have spent years fine tuning Project 3 to run efficiently by eliminating middlemen, empowering our staff, committing to our partners, not over-committing to work, scheduling precisely, and clearly communicating expectations with all parties involved.",
    image: time,
    size: 4,
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
  quotes,
  mission,
  sections,
  yo,
  work,
  intro,
  sectionImgs,
};
