import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { fetchData } from "../../client";
import { Loading } from "../Extra"; // Ensure you have this component
import workers from "../../../assets/images/other/workers.jpg";

const AboutUs = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetchData(`*[_type == "about"]{title, description}`, setSections);
  }, []);

  if (!sections.length) return <Loading />;

  return (
    <Box>
      {sections.map((section, index) => (
        <Box sx={styles.container} key={index}>
          {/* <Box sx={styles.imageContainer}>
            <Box sx={styles.image} />
          </Box> */}
          <Box sx={styles.textContainer}>
            <Typography variant="h4" sx={styles.title}>
              {section.title}
            </Typography>
            {section.description.map((paragraph, index) => (
              <Typography variant="body1" sx={styles.description} key={index}>
                {paragraph}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    height: "50vh",
    width: "auto",
    position: "relative",
    backgroundColor: "#f5f5f5",
  },
  imageContainer: {
    width: "50%",
    height: "100%",
  },
  image: {
    backgroundImage: `url(${workers})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    clipPath: "polygon(0 0, 100% 0, 50% 100%, 0% 100%)",
    loading: "lazy",
  },
  textContainer: {
    padding: "20px",
    width: "50%",
  },
  title: {
    color: "#b71c1c",
    marginBottom: "10px",
  },
  description: {
    color: "#333",
  },
};

export default AboutUs;
