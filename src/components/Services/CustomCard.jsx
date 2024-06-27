import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";

const CardFront = ({ data }) => (
  <Box
    className="cardFront"
    sx={{
      ...styles.card,
      ...styles.cardFront,
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url(${data.imgPath})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <Typography variant="h4" sx={styles.cardFrontText}>
      {data.label}
    </Typography>
  </Box>
);

const CardBack = ({ data }) => (
  <Box className="cardBack" sx={{ ...styles.card, ...styles.cardBack }}>
    <Typography variant="h6" sx={styles.cardBackTitle}>
      {data.label}
    </Typography>
    <List sx={styles.cardBackList}>
      {data.tasks.map((task, idx) => (
        <ListItem key={idx} sx={styles.cardBackListItem}>
          {task}
        </ListItem>
      ))}
    </List>
  </Box>
);

const CustomCard = ({ data }) => {
  return (
    <Box sx={styles.cardContainer}>
      <CardFront data={data} />
      <CardBack data={data} />
    </Box>
  );
};

const styles = {
  cardContainer: {
    perspective: "1000px",
    position: "relative",
    height: "250px",
    "&:hover .cardFront": {
      transform: "rotateY(180deg)",
    },
    "&:hover .cardBack": {
      transform: "rotateY(0deg)",
    },
  },
  card: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    transition: "transform 0.6s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  cardFront: {
    transform: "rotateY(0deg)",
  },
  cardFrontText: {
    color: "white",
    fontWeight: "bold",
  },
  cardBack: {
    transform: "rotateY(180deg)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",

    boxSizing: "border-box",
  },
  cardBackTitle: {
    marginBottom: "10px",
    fontWeight: "bold",
  },
  cardBackList: {
    padding: 0,
    margin: 0,
  },
  cardBackListItem: {
    textAlign: "left",
  },
};

export default CustomCard;
