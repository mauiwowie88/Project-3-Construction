import React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";
import { work } from "../../db";

const WorkCard = ({ item }) => {
  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        image={item.imgPath}
        title={item.label}
        sx={styles.cardMedia}
      />
      <Box sx={styles.overlay}>
        <Typography variant="h6">{item.label}</Typography>
      </Box>
      <Box className="hoverContent" sx={styles.hoverContent}>
        {item.tasks.map((task, index) => (
          <Typography key={index} variant="body2">
            {task}
          </Typography>
        ))}
      </Box>
    </Card>
  );
};

const WorkCards = () => {
  return (
    <Box sx={styles.workCards}>
      {work.map((item, index) => (
        <WorkCard item={item} key={index} />
      ))}
    </Box>
  );
};

const styles = {
  workCards: {
    display: "flex",
    gap: 0.3,
    flexWrap: "wrap",
  },
  card: {
    position: "relative",
    width: "calc(25% - 0.3px)", // Adjust width to handle 4 cards per row with gap
    height: "300px",
    overflow: "hidden",
    "&:hover .hoverContent": {
      opacity: 1,
      transform: "translateY(0)",
    },
    "@media (max-width: 960px)": {
      // Medium screens and below
      width: "calc(50% - 0.3px)", // Adjust width to handle 2 cards per row with gap
    },
    "@media (max-width: 600px)": {
      // Small screens and below
      width: "calc(100% - 0.3px)", // Full width for single column layout
    },
  },
  cardMedia: {
    height: "100%",
    transition: "0.3s",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1, // Ensure overlay is above the image
  },
  hoverContent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "black",
    opacity: 0,
    transition: "0.3s",
    transform: "translateY(-100%)",
    "&:hover": {
      opacity: 1,
      transform: "translateY(0)",
    },
    zIndex: 1,
  },
};

export default WorkCards;
