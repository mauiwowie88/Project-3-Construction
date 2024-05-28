import { Box, Container, Typography, Grid } from "@mui/material";

import { intro, sections, work } from "../assets/db";
import { SectionImg, MainItem } from "../components/Extra";

function Mission() {
  return (
    <>
      <Box position="relative">
        <SectionImg title="Intro">
          <Typography variant="body2">A NEW CULTURE OF BUILDERS.</Typography>
        </SectionImg>
        <Box
          sx={{
            backgroundColor: "#b79f32",
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70%",
            maxWidth: "600px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#cab13e",
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
      </Box>

      <Box sx={{ p: "2rem", textAlign: "center" }}>
        <Typography
          variant="h6"
          sx={{ p: 2, fontWeight: "bold", color: "#cfb13e" }}
        >
          THE PREMIER NEW HOME BUILDER OF
        </Typography>
        <Typography variant="h5">Austin and San Marcos, TX</Typography>

        <Container maxWidth="md">
          {intro.map((text, index) => (
            <Typography key={index} sx={{ color: "#424242", pt: 2.5 }}>
              {text}
            </Typography>
          ))}
        </Container>
      </Box>

      <Grid container sx={{ justifyContent: "center", p: 4 }}>
        {sections.map((section, index) => (
          <MainItem key={index} section={section} />
        ))}
      </Grid>
      {/* <Grid container>
        {work.map((section, index) => (
          <SectionImg key={index} section={section} />
        ))}
      </Grid> */}
    </>
  );
}

export default Mission;
