import React, { useState } from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import one from "../../../assets/images/newest/fridge.jpg";
import two from "../../../assets/images/newest/modern-dining.avif";
import three from "../../../assets/images/newest/quiet-desk.avif";
import four from "../../../assets/images/newest/hall.avif";

const images = [
  { src: one, alt: "Project Image 1" },
  { src: two, alt: "Project Image 2" },
  { src: three, alt: "Project Image 3" },
  { src: four, alt: "Project Image 4" },
];

const FeaturedProject = () => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [smallImages, setSmallImages] = useState(images.slice(1));

  const handleImageClick = (index) => {
    const newMainImage = smallImages[index];
    const newSmallImages = [
      mainImage,
      ...smallImages.filter((_, i) => i !== index),
    ];
    setMainImage(newMainImage);
    setSmallImages(newSmallImages);
  };

  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h6" component="h3" sx={styles.featuredText}>
            Featured Project
          </Typography>
          <Typography variant="h4" component="h2" sx={styles.projectTitle}>
            Comprehensive Solutions
          </Typography>
          <Typography variant="subtitle1">
            New Architectural Styles in San Marcos
          </Typography>
          <Typography variant="body1" sx={styles.bodyText}>
            Project 3 Construction specializes in transforming commercial and
            residential spaces with our comprehensive construction and
            renovation services. Our latest project showcases our ability to
            blend modern design with functional efficiency.
            <br />
            <br />
            From initial planning and architectural design to project management
            and execution, we ensure every detail meets our high standards.
            Whether it's new constructions or extensive renovations, we focus on
            delivering results that exceed expectations. Trust Revent Builds to
            bring your vision to life with quality craftsmanship and expert
            service.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
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
      </Grid>
    </Container>
  );
};

const styles = {
  container: {
    p: 6,
  },
  featuredText: {
    color: "#5BBFBA",
  },
  projectTitle: {
    fontWeight: "bold",
  },
  bodyText: {
    marginTop: "20px",
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
    gap: 2,
    marginTop: 2,
  },
  smallImage: {
    width: "32%",
    borderRadius: "8px",
    cursor: "pointer",
    objectFit: "cover",
  },
};

export default FeaturedProject;
