import { useState, useEffect } from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { fetchData } from "../../client";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchData(`*[_type == "testimonials"]{name, quote, date}`, setQuotes);
  }, []);

  const handlePrev = () => {
    if (quotes.length > 0) {
      setIndex((prevIndex) =>
        prevIndex - 1 < 0 ? quotes.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (quotes.length > 0) {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }
  };

  const currentQuote = quotes.length > 0 ? quotes[index] : null;

  return (
    <section role="region" aria-labelledby="testimonials-header">
      <Box sx={styles.box}>
        <Box sx={styles.titleBox}>
          <Typography variant="h3" sx={styles.titleHeader} component="h2">
            What Our Customers Are Saying
            <FormatQuoteIcon sx={styles.quoteIcon} />
          </Typography>
        </Box>
        <Container sx={styles.container} maxWidth="sm">
          <IconButton
            onClick={handlePrev}
            sx={styles.arrow}
            aria-label="Previous testimonial"
            role="button"
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Box sx={styles.card}>
            {currentQuote ? (
              <>
                <Typography variant="h6" sx={styles.name}>
                  {currentQuote.name}
                </Typography>
                <Typography variant="body2" sx={styles.date}>
                  {currentQuote.date}
                </Typography>
                <Typography variant="body1" sx={styles.text}>
                  {currentQuote.quote}
                </Typography>
              </>
            ) : (
              <Typography variant="body1" sx={styles.text}>
                Loading...
              </Typography>
            )}
          </Box>
          <IconButton onClick={handleNext} sx={styles.arrow}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Container>
      </Box>
    </section>
  );
};

const styles = {
  box: {
    padding: "80px 20px",
    backgroundColor: "#ebebeb",
    clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 30%)",
  },
  titleBox: {
    textAlign: "center",
    marginBottom: "20px",
    position: "relative",
  },
  titleHeader: {
    fontWeight: "bold",
    color: "#a71d22",
  },
  quoteIcon: {
    position: "absolute",
    fontSize: "9rem",
    color: "#a71d22",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    minHeight: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    borderRadius: "8px",
  },
  name: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  date: {
    marginBottom: "10px",
    color: "#888",
  },
  text: {
    marginBottom: "10px",
  },
  arrow: {
    backgroundColor: "#a71d22",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#800000",
    },
  },
};

export default Testimonials;
