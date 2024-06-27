import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import { fetchData } from "../../client"; // Adjust the path as necessary
import { Loading } from "../Extra";
import LPSmall from "./LPSmall";
import { Header } from "../Extra";

const ImageBox = ({ process }) => {
  return (
    <Grid item xs={12} sm={6} sx={styles.imageContainer}>
      <Box sx={styles.imageOverlay}>
        <img src={process.imageUrl} alt={process.title} style={styles.image} />
      </Box>
    </Grid>
  );
};

const TextBox = ({ process, index }) => {
  return (
    <Grid item xs={12} sm={6} sx={styles.textContainer}>
      <Container>
        <Box sx={styles.numberBox}>
          <Typography variant="h5" sx={styles.number}>
            {index + 1}
            {"."}
          </Typography>
        </Box>
        <Typography variant="h4" sx={styles.title}>
          {process.title}
        </Typography>
        {process.description.map((bullet, i) => (
          <Typography key={i} variant="body1" sx={styles.text}>
            {bullet}
          </Typography>
        ))}
      </Container>
    </Grid>
  );
};

const Step = ({ process, index }) => {
  return (
    <Grid
      item
      container
      spacing={10}
      alignItems="center"
      sx={{
        backgroundColor: index % 2 === 0 ? "white" : "#eef5f8",
      }}
    >
      {index % 2 === 0 ? (
        <>
          <TextBox process={process} index={index} />
          <ImageBox process={process} />
        </>
      ) : (
        <>
          <ImageBox process={process} />
          <TextBox process={process} index={index} />
        </>
      )}
    </Grid>
  );
};

function LongProcess() {
  const [processes, setProcesses] = useState([]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    fetchData(
      `*[_type == "longProcess"]{title, description, "imageUrl": image.asset->url}`,
      setProcesses
    );
  }, []);

  if (!processes.length) return <Loading />;

  return (
    <Container sx={styles.container}>
      {/* <Box sx={styles.header}> */}
      <Header title={["Our", "Process"]} />
      {/* </Box> */}

      {isSmallScreen ? (
        <LPSmall processes={processes} />
      ) : (
        <Grid container gap={10} sx={styles.second}>
          {processes.map((process, index) => (
            <Step process={process} index={index} key={index} />
          ))}
        </Grid>
      )}
    </Container>
  );
}

const styles = {
  second: {
    mt: 12,
  },
  container: {
    padding: 2,
  },

  imageContainer: {
    position: "relative",
  },
  imageOverlay: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    display: "block",
    borderRadius: "5px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 2,
    mt: 2,
  },
  numberBox: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "40px",
    backgroundColor: "#22c187",
    color: "white",
    marginRight: 4,
  },
  number: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  title: {
    marginBottom: "16px",
    fontWeight: "bold",
    display: "inline-block",
  },
  text: {
    marginBottom: "8px",
  },
};

export default LongProcess;
