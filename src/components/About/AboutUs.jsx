import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Hidden } from "@mui/material";
import { fetchData } from "../../client";
import { Loading } from "../Extra"; // Ensure you have this component
import one from "../../../assets/images/inside/3.jpg";

const AboutUs = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetchData(`*[_type == "aboutUs"]{title, description}`, setSections);
  }, []);

  return (
    <Box sx={styles.container}>
      <Hidden smDown>
        <Box sx={styles.imageContainer}>
          <Box sx={styles.image} />
        </Box>
      </Hidden>
      <Container sx={styles.textContainer} maxWidth={"sm"}>
        {sections.length > 0 && (
          <>
            <Typography variant="h2" sx={styles.title}>
              {sections[0].title}
            </Typography>
            {sections[0].description.map((paragraph, index) => (
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
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" }, // Column on small screens, row on larger screens
    alignItems: { xs: "stretch", md: "center" },
    height: { xs: "auto", md: "50vh" },
    position: "relative",
    mb: 10,
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
    mt: 8,
  },
  title: {
    color: "#b71c1c",
    marginBottom: "10px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  },
  description: {
    color: "#333",
    textAlign: "justify",
  },
};

export default AboutUs;
