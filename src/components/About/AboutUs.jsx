import { useState, useEffect } from "react";
import { Box, Typography, Container, Hidden } from "@mui/material";
import { fetchData } from "../../client";
import one from "../../../assets/images/inside/3.jpg";

const AboutUs = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetchData(`*[_type == "aboutUs"]{title, description}`, setSections);
  }, []);

  return (
    <section aria-labelledby="about-us-title">
      <Box sx={styles.container}>
        <Hidden smDown>
          <Box sx={styles.imageContainer}>
            <Box
              sx={styles.image}
              role="img"
              aria-label="Decorative background image of About Us section"
            />
          </Box>
        </Hidden>
        <Container sx={styles.textContainer} maxWidth={"sm"}>
          {sections.length > 0 && (
            <>
              <Typography
                variant="h2"
                sx={styles.title}
                id="about-us-title"
                component="h1"
              >
                {sections[0].title}
              </Typography>
              {Array.isArray(sections[0].description) &&
                sections[0].description.map((paragraph, index) => (
                  <div key={index}>
                    <Typography variant="body2" sx={styles.description}>
                      {paragraph}
                    </Typography>
                    <br />
                  </div>
                ))}
            </>
          )}
        </Container>
      </Box>
    </section>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: { xs: "stretch", md: "center" },
    height: { xs: "25vh", md: "50vh" },
    position: "relative",
  },
  imageContainer: {
    width: "50%",
    height: "100%",
    position: "relative",
  },
  image: {
    backgroundImage: `url(${one})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    clipPath: {
      xs: "none",
      md: "polygon(0 0, 100% 0, 50% 100%, 0 100%)",
    },
    loading: "lazy",
  },
  textContainer: {
    p: 4,
  },
  title: {
    color: "#006498",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  description: {
    color: "#333",
    textAlign: "justify",
  },
};

export default AboutUs;
