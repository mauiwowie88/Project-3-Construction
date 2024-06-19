import { Link } from "react-router-dom";
import { BlackButton } from "../Extra";
import { Box, Typography, Card, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { fetchData } from "../../client";
import eee from "../../../assets/images/other/eee.jpg"; // Ensure this path is correct
import { Loading } from "../Extra";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../client";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const SectionCard = ({ section }) => (
  <Link
    to={section.route}
    state={{ section }}
    style={{ textDecoration: "none" }}
  >
    <Card sx={styles.card}>
      {console.log(section.image)}
      <Box sx={{ flexShrink: 0 }}>
        <img
          src={urlFor(section.image).url()}
          alt="Project"
          style={{ width: "100%" }}
        />
      </Box>
      <Box sx={styles.content}>
        <Typography variant="h6" sx={styles.title}>
          {section.title}
        </Typography>
        <Typography variant="body2" sx={styles.description}>
          {section.description}
        </Typography>
      </Box>
      <Box sx={styles.button}>
        <BlackButton label={section.button} width="75%" />
      </Box>
    </Card>
  </Link>
);

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
    <Grid container sx={styles.gridContainer}>
      {sections.map((section, index) => (
        <Grid
          item
          key={index}
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={3}
          sx={styles.gridItem}
        >
          <SectionCard section={section} />
        </Grid>
      ))}
    </Grid>
  );
};

const styles = {
  gridContainer: { justifyContent: "center", p: 4 },
  gridItem: { display: "flex", p: 2 },
  card: {
    boxShadow: 7,
    borderRadius: 2,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  content: { flex: 1, display: "flex", flexDirection: "column" },
  title: { textAlign: "center", p: "1.5rem", fontWeight: "bold" },
  description: { textAlign: "center", p: "0 2rem" },
  button: { textAlign: "center", p: "1rem 0" },
};

export default MainItem;
