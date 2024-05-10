import { Grid, Typography, Box, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { portfolio } from "../assets/db";
import handleClick from "../assets/utils";

const Item = ({ job }) => {
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Box className="job-box">
        {job.image && <img src={job.image} alt="Project" className="job-pic" />}
        <Typography>{job.title}</Typography>
      </Box>
    </Grid>
  );
};

function History() {
  return (
    <Box sx={{ backgroundColor: "#dfe0e1", padding: "3rem " }}>
      <Container
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Typography variant="h3">Our Recent Work</Typography>
        <Grid container spacing={2}>
          {portfolio.map((job, index) => (
            <Item key={index} job={job} />
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
  );
}
export default History;
