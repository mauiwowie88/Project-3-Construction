import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { fetchData } from "../../client";
import one from "../../../assets/images/newest/cook.jpg";
import two from "../../../assets/images/newest/hittin.jpg";
import three from "../../../assets/images/newest/upper.jpg";
import four from "../../../assets/images/newest/sam.jpg";
import { Loading } from "../Extra";
import { Link } from "react-router-dom";

const images = [
  { src: one, alt: "Vision Image 1" },
  { src: two, alt: "Vision Image 2" },
  { src: three, alt: "Vision Image 3" },
  { src: four, alt: "Vision Image 4" },
];

function OurVision() {
  const [sections, setSections] = useState([]);
  const [mainImage, setMainImage] = useState(images[0]);
  const [smallImages, setSmallImages] = useState(images.slice(1));

  useEffect(() => {
    fetchData(`*[_type == "aboutUs"]{title, description}`, setSections);
  }, []);

  const handleImageClick = (index) => {
    const newMainImage = smallImages[index];
    const newSmallImages = [
      mainImage,
      ...smallImages.filter((_, i) => i !== index),
    ];
    setMainImage(newMainImage);
    setSmallImages(newSmallImages);
  };

  if (sections.length < 3) return <Loading />;

  return (
    <Container sx={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box sx={styles.imageContainer}>
            <Box
              component="img"
              src={mainImage.src}
              alt={mainImage.alt}
              sx={styles.mainImage}
            />
            <Box sx={styles.smallImagesContainer}>
              {smallImages.map((image, index) => (
                <Box
                  key={index}
                  component="img"
                  src={image.src}
                  alt={image.alt}
                  sx={styles.smallImage}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container sx={styles.textContainer} maxWidth="sm">
            <Typography variant="h2" sx={styles.title}>
              {sections[2].title}
            </Typography>
            <Box sx={styles.underline}></Box>
            {sections[2].description.map((desc, i) => (
              <Typography key={i} variant="body1" sx={styles.description}>
                {desc}
              </Typography>
            ))}
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

const styles = {
  container: {
    padding: "16px",
    display: "flex",
    alignItems: "stretch",
    my: 7,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  mainImage: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  },
  smallImagesContainer: {
    display: "flex",
    gap: 1,
    marginTop: 2,
  },
  smallImage: {
    width: "32%",
    borderRadius: "8px",
    cursor: "pointer",
    objectFit: "cover",
  },
  textContainer: {
    padding: 4,
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    position: "relative",
  },
  underline: {
    width: "60px",
    my: 2,
    height: "2px",
    backgroundColor: "#40bc99",
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
    paddingBottom: "10px",
  },
  button: {
    mt: 3,
    backgroundColor: "#fdd835",
    color: "#000",
    alignSelf: "flex-start",
  },
};

export default OurVision;
