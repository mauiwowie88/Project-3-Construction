import one from "../../../assets/images/newest/the-one.webp";

import { Box, Typography } from "@mui/material";

function Hesitate() {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>
        <Typography variant="h1" component="h1" sx={styles.heading}>
          Got a project in mind? Don’t Hesitate call us today!
        </Typography>
        <Box component="button" sx={styles.button}>
          Contact Us
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "50vh",
    background: `url(${one}) no-repeat center center/cover`,
    "::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1))",
    },
  },
  content: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    top: "50%",
    transform: "translateY(-50%)",
  },
  heading: {
    color: "#000",
    fontSize: "2rem",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
  },
};
export default Hesitate;
