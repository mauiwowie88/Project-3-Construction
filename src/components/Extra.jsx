import { Grid, Typography, Box, Button, Card, Paper } from "@mui/material";
import { sectionImgs } from "../assets/db";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

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

function ImgBox({ label, children }) {
  return (
    <Box
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
          background: "rgba(0, 0, 0, 0.5)",
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

const WhiteButton = ({ p }) => {
  return (
    <Button className="btn-dark" onClick={handleClick}>
      {p}
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

export {
  MainItem,
  MainTitle,
  PortfolioItem,
  SectionImg,
  ImgBox,
  JobImg,
  BlackButton,
  WhiteButton,
  ScrollToTop,
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
