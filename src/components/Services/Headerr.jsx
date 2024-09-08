import { Box, Typography, Button } from "@mui/material";
import dark from "../../../assets/images/newest/drawing.jpg";
import { Link } from "react-router-dom";

const Headerr = () => {
  return (
    <header aria-labelledby="header-title">
      <Box sx={styles.backgroundImage}>
        <Box sx={styles.contentBox}>
          <Typography
            variant="h5"
            component="h1"
            id="header-title"
            sx={styles.title}
          >
            Commercial Construction & Contractor Services in San Marcos, TX
          </Typography>
          <Typography variant="subtitle1" sx={styles.subtitle}>
            Construction, Renovation, & Project Management
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={styles.body}>
            Trust Your Project to Our Expert Team
          </Typography>
          <Link to="/contact" aria-label="Request a Quote">
            <Button variant="contained" color="primary" sx={styles.button}>
              Request a Quote
            </Button>
          </Link>
        </Box>
      </Box>
    </header>
  );
};

const styles = {
  backgroundImage: {
    backgroundImage: `url(${dark})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: { xs: "200px", md: "250px" }, // Responsive height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: 7,
  },
  contentBox: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: { xs: "1rem", md: "1rem 3rem" }, // Responsive padding
    textAlign: "center", // Center the text for better visual structure
  },
  title: {
    marginBottom: 1,
  },
  subtitle: {
    marginBottom: 1,
  },
  body: {
    marginBottom: 2,
  },
  button: {
    mt: 2,
    backgroundColor: "#8FC1A9",
    "&:hover": {
      backgroundColor: "#7BAE94", // Adjust hover state for button
    },
  },
};

export default Headerr;
