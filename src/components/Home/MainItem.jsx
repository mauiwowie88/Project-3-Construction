import React, { useState, useEffect } from "react";
import { Box, Typography, Card, Grid, Container, Hidden } from "@mui/material";
import { Link } from "react-router-dom";
import { BlackButton, Loading } from "../Extra";
import { fetchData, urlFor } from "../../client";
import { useTheme } from "@mui/material/styles";
import { Header } from "../../components/Extra";
import four from "../../../assets/images/newest/c4.jpg";

const SectionCard = ({ section }) => {
  const theme = useTheme();
  return (
    <Link
      to={section.route}
      state={{ section }}
      style={{ textDecoration: "none" }}
    >
      <Card sx={styles.card}>
        <Box sx={styles.imageContainer}>
          <img src={urlFor(section.image)} alt="Project" style={styles.image} />
        </Box>
        <Box sx={styles.content}>
          <Typography
            variant="h6"
            sx={{ ...styles.title, color: theme.palette.blue.default }}
          >
            {section.title}
          </Typography>
          <Typography variant="body2" sx={styles.description}>
            {section.description}
          </Typography>
        </Box>
        <Box sx={styles.buttonContainer}>
          <BlackButton label={section.button} width="75%" />
        </Box>
      </Card>
    </Link>
  );
};

const MainItem = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetchData(
      `*[_type == "mainSection"]{title, description, image, route, button}`,
      setSections
    );
  }, []);

  if (sections.length < 2) return <Loading />;

  return (
    <>
      <Hidden smDown>
        <Box sx={styles.backgroundContainer}>
          <Container sx={styles.mainContainer}>
            <Box sx={styles.header}>
              <Header title={["Our", "Services"]} />
              <Typography variant="body1" sx={styles.sectionDesc}>
                Inspiration and insights for where life happens.
              </Typography>
            </Box>

            <Grid container sx={styles.gridContainer}>
              {sections.map((section, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  md={6}
                  lg={3}
                  xl={3}
                  sx={styles.gridItem}
                >
                  <SectionCard section={section} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Hidden>
      <Hidden smUp>
        <Container sx={styles.mainContainer}>
          <Box sx={styles.header}>
            <Header title={["Our", "Services"]} />
            <Typography variant="body1" sx={styles.sectionDesc}>
              Inspiration and insights for where life happens.
            </Typography>
          </Box>

          <Grid container sx={styles.gridContainer}>
            {sections.map((section, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={6}
                lg={3}
                xl={3}
                sx={styles.gridItem}
              >
                <SectionCard section={section} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Hidden>
    </>
  );
};

const styles = {
  backgroundContainer: {
    position: "relative",
    width: "100%",
    backgroundImage: `url(${four})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1))",
      zIndex: 1,
    },
  },
  mainContainer: {
    position: "relative",
    zIndex: 2,
    py: 7,
  },
  header: {
    zIndex: 3,
    position: "relative",
  },
  sectionDesc: {
    textAlign: "center",
  },
  gridContainer: {
    justifyContent: "center",
  },
  gridItem: {
    display: "flex",
    padding: 2,
    position: "relative",
    zIndex: 2,
  },
  card: {
    boxShadow: 7,
    borderRadius: 2,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    position: "relative",
    zIndex: 2,
  },
  imageContainer: { flexShrink: 0 },
  image: { width: "100%" },
  content: { flex: 1, display: "flex", flexDirection: "column" },
  title: { textAlign: "center", padding: "1.5rem", fontWeight: "bold" },
  description: { textAlign: "center", padding: "0 2rem" },
  buttonContainer: { textAlign: "center" },
};

export default MainItem;
