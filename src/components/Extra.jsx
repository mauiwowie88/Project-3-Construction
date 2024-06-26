import React, { useState, useEffect } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Box, Button, Fab, CircularProgress, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { sectionImgs } from "../db";
import logo from "../../assets/images/other/new-logo.png";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function SectionImg({ title, children }) {
  const section = sectionImgs.find((section) => section.title === title) || {};
  const boxStyles = {
    ...styles.sectionImg,
    backgroundImage: section.opacity
      ? `${section.opacity}, url(${section.image})`
      : `url(${section.image})`,
    height: {
      xs: `${section.size.xs}px`,
      sm: `${section.size.sm}px`,
      md: `${section.size.md}px`,
      lg: `${section.size.lg}px`,
    },
  };

  return (
    <Box sx={boxStyles}>
      <Box sx={styles.sectionImgOverlay} />
      <Box sx={styles.sectionImgContent}>{children}</Box>
    </Box>
  );
}

const BlackButton = ({ label, width }) => {
  return (
    <Button
      sx={{
        ...styles.blackButton,
        width: width,
      }}
    >
      {label}
    </Button>
  );
};

const ScrollUp = () => {
  const [showButton, setShowButton] = useState(false);
  const ScrollTopButton = styled(Fab)(({ theme }) => ({
    ...styles.scrollTopButton,
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <ScrollTopButton onClick={scrollToTop} size="small">
          <KeyboardArrowUp />
        </ScrollTopButton>
      )}
    </>
  );
};

const Loading = () => (
  <Box sx={styles.loadingBox}>
    <img src={logo} alt="Logo" style={styles.logo} />
    <CircularProgress />
    <Typography variant="h6" sx={styles.loadingText}>
      Loading...
    </Typography>
  </Box>
);

const Header = ({ title }) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.inner}>
        <Typography variant="h2" sx={styles.title}>
          {title[0]}
        </Typography>

        <Box sx={styles.linesContainer}>
          <Box sx={styles.line1} />
          <Box sx={styles.line2} />
          <Box sx={styles.line3} />
        </Box>
      </Box>

      <Typography variant="h1" sx={styles.boldTitle}>
        {title[1]}
      </Typography>
    </Box>
  );
};

const styles = {
  sectionImg: {
    display: "flex",
    position: "relative",
    color: "#fff",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionImgOverlay: {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  sectionImgContent: {
    zIndex: 2,
    textAlign: "center",
  },
  blackButton: {
    color: "white",
    backgroundColor: "#1a202c",
    margin: "2rem auto",
    boxShadow: 3,
    "&:hover": {
      backgroundColor: "white",
      color: "black",
      outline: "1px solid black",
    },
  },
  scrollTopButton: {
    position: "fixed",
    backgroundColor: "#d4af37",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#b38e30",
    },
  },
  loadingBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",

    zIndex: 9999,
  },
  loadingText: {
    marginTop: "16px",
    color: "white",
  },
  logo: {
    marginBottom: "16px",
    width: "50%", // Adjust the size as needed
    height: "auto",
  },
  container: {
    textAlign: "center",
    my: 5,
  },
  inner: {
    justifyContent: "center",
    display: "flex",
  },
  title: {
    fontWeight: 400,
  },
  boldTitle: {
    fontWeight: "bold",
  },
  linesContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    mx: 5,
  },
  line1: {
    width: "40px",
    height: "1.5px",
    backgroundColor: "gold",
    my: 0.5,
  },
  line2: {
    width: "70px",
    height: "2.5px",
    backgroundColor: "gold",
    my: 0.5,
  },
  line3: {
    width: "100px",
    height: "3px",
    backgroundColor: "gold",
    my: 0.5,
  },
};

export { SectionImg, BlackButton, ScrollUp, ScrollToTop, Loading, Header };
