import React from "react";
import { Box, Typography, Card, Grid } from "@mui/material";
import { work } from "../../db";

const WorkCard = ({ item }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={styles.card}>
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
    </Grid>
  );
};

const WorkCards = () => {
  return (
    <Grid container spacing={2} sx={styles.workCards}>
      {work.map((item, index) => (
        <WorkCard item={item} key={index} />
      ))}
    </Grid>
  );
};

const styles = {
  workCards: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    position: "relative",
    height: "300px",
    overflow: "hidden",
    "&:hover .hoverContent": {
      opacity: 1,
      transform: "translateY(0)",
    },
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
    zIndex: 1,
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
