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

const Item = ({ job }) => {
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Box className="job-box">
        {console.log(job)}
        {/* {job.image && <img src={job.image} alt="Project" className="job-pic" />}
        <Typography>{job.title}</Typography> */}
      </Box>
    </Grid>
  );
};

function About() {
  return (
    <Box>
      <Box
        className="img-box"
        sx={{
          backgroundImage: `url(${bg})`,
          height: 300,
          // backgroundPosition: "center top",
        }}
      ></Box>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <Typography variant="h4" sx={{ margin: "1rem" }}>
          The JSM Difference
        </Typography>
        <Typography>
          You have a lot of builders to choose from these days and you likely
          have a lot of ideas of what an ideal builder would bring to the table
          for your home. As a team who has spent the last two and a half decades
          building in a small mountain town, let us give you a few quick things
          to consider about JSM that we have painstakingly hammered into the
          fabric of our company and that are not typical characteristics of
          general contractors in our industry.
        </Typography>
      </Container>
      <Box sx={{ backgroundColor: "#dfe0e1", padding: "3rem " }}>
        <Container
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <Typography variant="h3">Our Recent Work</Typography>
          <Grid container spacing={2}>
            {characteristics.map((skill, index) => (
              <Item key={index} skill={skill} />
            ))}
          </Grid>
          <Button
            className="mission-btn"
            sx={{ marginTop: 3 }}
            onClick={handleClick}
          >
            Back to Top
          </Button>
        </Container>
      </Box>
      <Box
        className="big-img-box"
        sx={{
          backgroundImage: `url(${carpenter})`,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography>Ready to get started? Give us a call today.</Typography>
        </Box>
        <Box>
          {" "}
          <Link>
            <Button>Contact Us</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
export default About;
