import React, { useState, useEffect } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Box, Button, Fab, CircularProgress, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

import { sectionImgs } from "../db";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function SectionImg({ title, children }) {
  const section = sectionImgs.find((section) => section.title == title) || {};
  const boxStyles = {
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
    <Box className="box" sx={boxStyles}>
      <Box
        sx={{
          zIndex: 2,
          textAlign: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

const BlackButton = ({ label, width }) => {
  return (
    <Button
      sx={{
        color: "white",
        backgroundColor: "#1a202c",
        margin: "2rem auto",
        width: width,
        boxShadow: 3,
        "&:hover": {
          backgroundColor: "white",
          color: "black",
          outline: "1px solid black",
        },
      }}
    >
      {label}
    </Button>
  );
};

const ScrollUp = () => {
  const [showButton, setShowButton] = useState(false);
  const ScrollTopButton = styled(Fab)(({ theme }) => ({
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),

    backgroundColor: "#d4af37",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#b38e30",
    },
  }));

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
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
    <CircularProgress />
    <Typography variant="h6" sx={styles.loadingText}>
      Loading...
    </Typography>
  </Box>
);

const styles = {
  loadingBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  loadingText: {
    marginTop: "16px",
  },
};

export { SectionImg, BlackButton, ScrollUp, ScrollToTop, Loading };
