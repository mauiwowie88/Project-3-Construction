import { Link } from "react-router-dom";
import { Grid, Typography, Box, Button, Card } from "@mui/material";
import { sectionImgs } from "../assets/db";

const PortfolioItem = ({ job }) => {
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Link to="Job" state={{ job }} style={{ textDecoration: "none" }}>
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
        style={{ textDecoration: "none" }}
      >
        <Card
          sx={{
            boxShadow: 7,
            borderRadius: 2,
          }}
        >
          <Box>
            <img
              src={section.image}
              alt="Project"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                p: "1.5rem",
                fontWeight: "bold",
                display: "flex",
                flex: 1,
                flexGrow: 1,
              }}
            >
              {section.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                p: "0 2rem",
                display: "flex",
                flex: 1,
                flexGrow: 1,
              }}
            >
              {section.description}
            </Typography>
          </Box>
          <Box
            sx={{ textAlign: "center", display: "flex", flex: 1, flexGrow: 1 }}
          >
            <BlackButton label={section.button} width="75%" />
          </Box>
        </Card>
      </Link>
    </Grid>
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

export { MainItem, PortfolioItem, SectionImg, BlackButton, WhiteButton };
