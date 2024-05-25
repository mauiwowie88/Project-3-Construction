import { Box, Container, Typography, Button } from "@mui/material";
import { BlackButton } from "./Extra";
import { Link } from "react-router-dom";
import { intro } from "../assets/db";
import ImgBox from "./ImgBox";

function Mission() {
  return (
    <>
      <ImgBox title="Intro">
        <Typography sx={{ fontSize: "5rem", color: "white" }}>
          Project 3 TX
        </Typography>
        <Typography
          sx={{
            display: "flex",
            fontSize: "1rem",
            color: "white",
          }}
        >
          A NEW CULTURE OF BUILDERS.
        </Typography>
      </ImgBox>
      <Box sx={{ p: "3rem", textAlign: "center" }}>
        <Typography variant="h4">Project 3 Construction</Typography>
        <Typography variant="h6" sx={{ p: 3, fontWeight: "bold" }}>
          Top Choice for a Luxury Home Builder in Kyle, TX
        </Typography>
        <Container>
          {intro.map((text, index) => (
            <Typography key={index} sx={{ color: "#424242", mt: 2.5 }}>
              {text}
            </Typography>
          ))}
        </Container>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Link to={"About"} style={{ textDecoration: "none" }}>
          <BlackButton p="Learn More" />
        </Link>
      </Box>
    </>
  );
}

export default Mission;
