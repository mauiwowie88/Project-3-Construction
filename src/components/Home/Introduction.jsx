import { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { fetchData } from "../../client";
import { SectionImg, Loading } from "../Extra";
import { useTheme } from "@emotion/react";

const Introduction = () => {
  const [intro, setIntro] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    fetchData(
      `*[_type == "introduction"]{title, description, paragraphs}`,
      setIntro
    );
  }, []);

  if (!intro.length) return <Loading />;

  return (
    <>
      <SectionImg title="Intro">
        <Typography variant="body2">A NEW CULTURE OF BUILDERS.</Typography>
      </SectionImg>
      <Box sx={styles.outer}>
        <Box sx={styles.inner}>
          <Typography variant="h4" color="white">
            Project 3 Construction
          </Typography>
        </Box>
      </Box>
      <section aria-label="Introduction">
        <Box sx={styles.introBox}>
          <Typography variant="h6" sx={styles.title}>
            {intro[0].title}
          </Typography>
          <Typography variant="h5" color={theme.palette.blue.dark}>
            {intro[0].description}
          </Typography>
          <Container maxWidth="sm">
            {intro[0].paragraphs.map((paragraph, index) => (
              <Typography key={index} sx={styles.paragraph}>
                {paragraph}
              </Typography>
            ))}
          </Container>
        </Box>
      </section>
    </>
  );
};

const styles = {
  introBox: {
    padding: "0.5rem",
    m: "10px 0 40px 0",
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    color: "#cfb13e",
  },
  paragraph: {
    color: "#424242",
    paddingTop: 2.5,
  },
  outer: {
    backgroundColor: "#1a202c",
    display: "flex",
    justifyContent: "center",
    transform: "translate(50%, -50%)",
    width: "50%",
  },
  inner: {
    backgroundColor: "#2d3748",
    margin: 0.5,
    padding: 2,
    textAlign: "center",
    width: "99%",
  },
};

export default Introduction;
