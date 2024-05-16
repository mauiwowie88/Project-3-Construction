import { Box, Container, Typography, Button } from "@mui/material";
import hero from "../assets/images/dope.jpg";
import { BlackButton } from "./Extra";
import { Link } from "react-router-dom";
import { intro } from "../assets/db";

function Mission() {
  return (
    <>
      <Box className="box" sx={{ backgroundImage: `url(${hero})` }}>
        <Box
          sx={{
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: "5rem" }}>GB</Typography>
          <Typography
            sx={{
              display: "flex",
              fontSize: "1rem",
            }}
          >
            A NEW CULTURE OF BUILDERS.
          </Typography>
        </Box>
      </Box>
      <Container sx={{ p: "3rem 3rem 0 3rem", textAlign: "center" }}>
        <Typography variant="h4">Kyle Custom Home Builder</Typography>
        <Typography variant="h6" sx={{ p: 3, fontWeight: "bold" }}>
          Top Choice for a Luxury Home Builder in Kyle, TX
        </Typography>
        {intro.map((thing, index) => (
          <Typography key={index} sx={{ color: "#424242", mt: 2.5 }}>
            {thing}
          </Typography>
        ))}
      </Container>
      <Box sx={{ textAlign: "center" }}>
        <Link to={"About"} style={{ textDecoration: "none" }}>
          <BlackButton p="Learn More" />
        </Link>
      </Box>
    </>
  );
}

export default Mission;
