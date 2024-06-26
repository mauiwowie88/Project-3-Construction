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
            Featured Kitchen Renovation
          </Typography>
          <Typography variant="h4" component="h2" sx={styles.projectTitle}>
            Demona Drive Bee Cave
          </Typography>
          <Typography variant="subtitle1">
            New Architectural Style of House in Austin: "Modern Victorian"
          </Typography>
          <Typography variant="body1" sx={styles.bodyText}>
            Revent Builds took this early 2000's kitchen and gave it a
            much-needed major cosmetic overhaul. The walls dividing the space
            made it feel tiny, so Revent removed the wall and made the kitchen
            feel grand and filled with natural light. We added floor-to-ceiling
            hickory cabinets around the perimeter of the kitchen to give it a
            modern yet timeless feel.
          </Typography>
          <Button variant="contained" sx={styles.projectButton}>
            VIEW PROJECT
          </Button>
          <Button variant="contained" sx={styles.quoteButton}>
            Get a Quote
          </Button>
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
    padding: "40px 0",
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
  projectButton: {
    marginTop: 2,
    backgroundColor: "#5BBFBA",
    color: "#fff",
  },
  quoteButton: {
    marginTop: 2,
    backgroundColor: "#8FC1A9",
    color: "#fff",
    marginLeft: 2,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  mainImage: {
    width: "100%",
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
