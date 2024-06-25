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
    <Typography variant="h4" color="white">
      {data.label}
    </Typography>
  </Box>
);

const CardBack = ({ data }) => (
  <Box className="cardBack" sx={{ ...styles.card, ...styles.cardBack }}>
    <Typography>{data.label}</Typography>
    <List>
      {data.tasks.map((task, idx) => (
        <ListItem key={idx}>{task}</ListItem>
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
    position: "relative",
    height: "300px",
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
  cardBack: {
    transform: "rotateY(180deg)",
    display: "flex",
    flexWrap: "wrap",
  },
};

export default CustomCard;
