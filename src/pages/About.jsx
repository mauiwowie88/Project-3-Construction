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
import bg from "../assets/images/kkk.jpeg";
import carpenter from "../assets/images/carpentry.jpg";
import { Link } from "react-router-dom";
import { characteristics } from "../assets/db";
import handleClick from "../assets/utils";
import { BlackButton, WhiteButton } from "../components/Extra";

const Item = ({ skill }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box className="job-box">
        {skill.image && (
          <img src={skill.image} alt="Project" className="job-pic" />
        )}
        <Typography
          variant={"h6"}
          sx={{ margin: "10px 0", fontWeight: "bold" }}
        >
          {skill.title}
        </Typography>
        <Typography>{skill.description}</Typography>
      </Box>
    </Grid>
  );
};

function About() {
  return (
    <>
      {/* Hero Picture */}
      <Box
        className="img-box"
        sx={{
          backgroundImage: `url(${bg})`,
          height: 300,
        }}
      ></Box>
      {/* Difference Statement */}
      <Container
        sx={{
          padding: "2rem 4rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" sx={{ margin: "1rem" }}>
          The JSM Difference
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          You have a lot of builders to choose from these days and you likely
          have a lot of ideas of what an ideal builder would bring to the table
          for your home. As a team who has spent the last two and a half decades
          building in a small mountain town, let us give you a few quick things
          to consider about JSM that we have painstakingly hammered into the
          fabric of our company and that are not typical characteristics of
          general contractors in our industry.
        </Typography>
      </Container>
      {/* Defining Characteristics  */}
      <Box sx={{ backgroundColor: "#dfe0e1" }}>
        <Container
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
          >
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
      <Box
        className="box md"
        sx={{
          backgroundImage: `url(${carpenter})`,
          textAlign: "center",
        }}
      >
        <Box sx={{ zIndex: 2 }}>
          <Typography sx={{ fontSize: 40 }}>
            Ready to get started? Give us a call today.
          </Typography>
          <Link to="../Contact" style={{ textDecoration: "none" }}>
            <BlackButton p="Contact Us" />
          </Link>
        </Box>
      </Box>
    </>
  );
}
export default About;
