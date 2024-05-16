import { services } from "../assets/db";
import { Grid, Typography, Box, Container, Button, Card } from "@mui/material";
import { BlackButton, PortfolioItem } from "../components/Extra";
import bg from "../assets/images/Construction.jpeg";

const Item = ({ service }) => {
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Box className="job-box" textAlign="center">
        <Typography
          variant={"h6"}
          sx={{ margin: "10px 0", fontWeight: "bold" }}
        >
          {service.title}
        </Typography>
        <img src={service.image} alt="Project" className="job-pic" />

        <Typography>{service.description}</Typography>
      </Box>
    </Grid>
  );
};

function Services() {
  return (
    <>
      <Box
        className="box"
        sx={{ backgroundImage: `url(${bg})`, height: 300 }}
      ></Box>
      <Box sx={{ backgroundColor: "#dfe0e1", padding: "3rem " }}>
        <Container
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <Typography variant="h3">Our Services</Typography>
          <Grid container spacing={2}>
            {services.map((service, index) => (
              <Item key={index} service={service} />
            ))}
          </Grid>
          <BlackButton p="Back to Top" />
        </Container>
      </Box>
    </>
  );
}
export default Services;
