import React, { useState, useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
import { fetchData } from "../../client";
import { Loading } from "../Extra"; // Ensure you have this component
import workers from "../../../assets/images/other/workers.jpg";
import one from "../../../assets/images/inside/3.jpg";

const AboutUs = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetchData(`*[_type == "about"]{title, description}`, setSections);
  }, []);

  if (!sections.length) return <Loading />;

  return (
    <Box sx={styles.container}>
      <Container sx={styles.textContainer} maxWidth={"sm"}>
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
      </Container>
      <Box sx={styles.imageContainer}>
        <Box sx={styles.image} />
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    height: "55vh",
    position: "relative",

    mb: 10,
  },
  imageContainer: {
    width: "40%",
    height: "100%",
  },
  image: {
    backgroundImage: `url(${one})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    clipPath: "polygon(0 0, 50% 100%, 100% 100%, 100% 0%)",
    loading: "lazy",
  },
  textContainer: {
    width: "60%",
    mt: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // White background with opacity
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
