import React from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
  Container,
} from "@mui/material";
import bg from "../assets/images/dope.jpg";
import carpenter from "../assets/images/carpentry.jpg";
import { Link } from "react-router-dom";
import { characteristics } from "../assets/db";
import handleClick from "../assets/utils";
import { BlackButton, WhiteButton } from "../components/Extra";
import ImgBox from "../components/ImgBox";

const Item = ({ skill }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box>
        <img src={skill.image} alt="Project" className="job-pic" />
        <Typography
          variant="h6"
          sx={{ marginTop: "1rem", fontWeight: "bold", textAlign: "center" }}
        >
          {skill.title}
        </Typography>
        <Typography variant="body2">{skill.description}</Typography>
      </Box>
    </Grid>
  );
};

function About() {
  return (
    <>
      <ImgBox title="About" />

      {/* Difference Statement */}
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            margin: "2.5rem",
          }}
        >
          The JSM Difference
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            m: 5,
          }}
        >
          You have a lot of builders to choose from these days and you likely
          have a lot of ideas of what an ideal builder would bring to the table
          for your home. As a team who has spent the last two and a half decades
          building in a small mountain town, let us give you a few quick things
          to consider about JSM that we have painstakingly hammered into the
          fabric of 6our company and that are not typical characteristics of
          general contractors in our industry.
        </Typography>
      </Container>
      {/* Defining Characteristics  */}
      <Box sx={{ backgroundColor: "#dfe0e1" }}>
        <Container
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <Typography variant="h4" sx={{ m: 5, textAlign: "center" }}>
            Our Defining Characteristics
          </Typography>
          <Grid container spacing={2}>
            {characteristics.map((skill, index) => (
              <Item key={index} skill={skill} />
            ))}
          </Grid>
          <BlackButton p="Back to Top" />
        </Container>
      </Box>
      {/* Give Us A Call */}
      <ImgBox title="Call Us">
        <Box sx={{ zIndex: 2 }}>
          <Typography variant="h2" sx={{ p: 2 }}>
            Ready to get started? Give us a call today.
          </Typography>
          <Link to="../Contact" style={{ textDecoration: "none" }}>
            <BlackButton p="Contact Us" />
          </Link>
        </Box>
      </ImgBox>
    </>
  );
}
export default About;
