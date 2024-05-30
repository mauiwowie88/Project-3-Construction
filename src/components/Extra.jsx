import { useLocation, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Card,
  Grid,
  useMediaQuery,
  Fab,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { sectionImgs } from "../assets/db";

const PortfolioItem = ({ job }) => {
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Link to="../Job" state={{ job }} style={{ textDecoration: "none" }}>
        <Card square>
          <img src={job.image} alt="Project" className="job-pic" />
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            {job.title}
          </Typography>
        </Card>
      </Link>
    </Grid>
  );
};

function JobImg({ children }) {
  return (
    <Box className="job-box">
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

function ImgBox({ label, onClick, children }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        background: "center / cover no-repeat",
        backgroundImage: `url(${label.image})`,
        height: "200px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          textAlign: "center",
          zIndex: 2,
          color: "white",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

const MainTitle = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2e2e2e",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60%",
        maxWidth: "600px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#455a64",
          m: 0.5,
          p: 1,
          textAlign: "center",
        }}
      >
        <Typography variant="h1" color="white">
          Project 3 TX
        </Typography>
      </Box>
    </Box>
  );
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
        backgroundColor: "black",
        margin: "2rem auto",
        width: width,
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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainItem = ({ section }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={6}
      lg={4}
      xl={3}
      sx={{ display: "flex", p: 2 }}
    >
      <Link
        to={section.route}
        state={{ section }}
        style={{
          textDecoration: "none",
        }}
      >
        <Card
          sx={{
            boxShadow: 7,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box sx={{ flexShrink: 0 }}>
            <img
              src={section.image}
              alt="Project"
              style={{
                width: "100%",
              }}
            />
          </Box>
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                p: "1.5rem",
                fontWeight: "bold",
              }}
            >
              {section.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                p: "0 2rem",
              }}
            >
              {section.description}
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              p: "1rem 0",
            }}
          >
            <BlackButton label={section.button} width="75%" />
          </Box>
        </Card>
      </Link>
    </Grid>
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

const BoxSlider = ({ data, sideBySide }) => {
  const [index, setIndex] = useState(0);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const nextQuote = () =>
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  const prevQuote = () =>
    setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);

  useEffect(() => {
    const interval = setInterval(nextQuote, 6000);
    return () => clearInterval(interval);
  }, []);

  if (sideBySide && !isSmallScreen) {
    return (
      <Grid container>
        {data.map((item, idx) => (
          <Grid item xs={6}>
            <Card
              square
              key={idx}
              sx={{
                backgroundImage: `url(${item.imgPath})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: 100,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                width: "100%",
                m: "1px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0))",
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  position: "relative",
                  textAlign: "center",
                  zIndex: 1,
                  padding: "20px",
                  fontWeight: "bold",
                  lineHeight: 1.2,
                  textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
                }}
              >
                {item.label}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Box
      key={index}
      sx={{
        height: "40vh",
        width: "100%",
        background: "center / cover no-repeat",
        backgroundImage: `url(${data[index].imgPath})`,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <Typography
        variant="h6"
        sx={{
          position: "relative",
          textAlign: "center",
          zIndex: 1,
          padding: "0 20px",
          fontWeight: "bold",
          lineHeight: 1.2,
          textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        {data[index].label}
      </Typography>

      <Box
        sx={{
          m: 1,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <IconButton onClick={prevQuote} style={{ color: "white" }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton onClick={nextQuote} style={{ color: "white" }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export {
  MainItem,
  MainTitle,
  PortfolioItem,
  SectionImg,
  ImgBox,
  JobImg,
  BlackButton,
  ScrollUp,
  ScrollToTop,
  BoxSlider,
};
