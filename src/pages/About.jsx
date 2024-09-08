import { Typography } from "@mui/material";

import AboutUs from "../components/About/AboutUs";
import CallUs from "../components/About/CallUs";
import ShortProcess from "../components/About/ShortProcess";
import Deliver from "../components/About/Deliver";
import { SectionImg } from "../components/Extra";
import OurVision from "../components/About/OurVision";

const About = () => {
  return (
    <>
      <section aria-label="About our company">
        <SectionImg title="About">
          <Typography variant="h5" sx={styles.sectionText}>
            People, Passion, Process
          </Typography>
        </SectionImg>
      </section>

      <section aria-label="About Us">
        <AboutUs />
      </section>

      <section aria-label="Our Delivery Process">
        <Deliver />
      </section>

      <section aria-label="Our Vision">
        <OurVision />
      </section>

      <section aria-label="Our Process">
        <ShortProcess />
      </section>

      <section aria-label="Contact Us">
        <CallUs />
      </section>
    </>
  );
};

const styles = {
  sectionText: {
    position: "absolute",
    left: 30,
    bottom: 30,
    fontWeight: "bold",
  },
};

export default About;
