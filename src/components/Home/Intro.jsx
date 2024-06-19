import React, { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { fetchData } from "../../client";
import { SectionImg } from "../Extra";
import { Loading } from "../Extra";

const IntroContent = ({ intro }) => (
  <Box sx={styles.introBox}>
    <Typography variant="h6" sx={styles.title}>
      {intro.title}
    </Typography>
    <Typography variant="h5">{intro.description}</Typography>
    <Container maxWidth="sm">
      {intro.paragraphs.map((paragraph, index) => (
        <Typography key={index} sx={styles.paragraph}>
          {paragraph}
        </Typography>
      ))}
    </Container>
  </Box>
);

function Intro() {
  const [intro, setIntro] = useState([]);

  useEffect(() => {
    fetchData(`*[_type == "intro"]{title, description, paragraphs}`, setIntro);
  }, []);

  if (!intro.length) return <Loading />;

  return (
    <>
      <SectionImg title="Intro">
        <Typography variant="body2">A NEW CULTURE OF BUILDERS.</Typography>
      </SectionImg>
      <Box sx={styles.outer}>
        <Box sx={styles.inner}>
          <Typography variant="h1" color="white">
            Project 3 Contstruction
          </Typography>
        </Box>
      </Box>
      {intro.length > 0 && <IntroContent intro={intro[0]} />}
    </>
  );
}

const styles = {
  introBox: { p: ".5rem", mt: 4, textAlign: "center" },
  title: { fontWeight: "bold", color: "#cfb13e" },
  paragraph: { color: "#424242", pt: 2.5 },
  outer: {
    backgroundColor: "#2e2e2e",
    display: "flex",
    justifyContent: "center",
    // position: "absolute",
    // left: "50%",
    transform: "translate(50%, -50%)",
    width: "50%",
    // maxWidth "600px",
  },
  inner: {
    backgroundColor: "#455a64",
    m: 0.5,
    p: 2,
    textAlign: "center",
    width: "99%",
  },
};

export default Intro;
