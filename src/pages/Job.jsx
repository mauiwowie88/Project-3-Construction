import { Link } from "react-router-dom";
import { JobImg } from "../components/Extra";
import { Box, Container, Grid, Typography } from "@mui/material";

function Job({ state }) {
  const location = useLocation();
  const { job } = location.state || {};

  return (
    <>
      <Box>
        <JobImg>
          <img src={job.image} alt="" />

          <Box m={4}>
            <Typography variant="h4" align="center" p={3} gutterBottom>
              {job.title}
            </Typography>
            <Grid container spacing={4} justifyContent="space-evenly">
              <Grid item xs={12} sm={3} textAlign="center">
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  DESCRIPTION
                </Typography>
                <Typography>{job.description}</Typography>
              </Grid>
              <Grid item xs={12} sm={3} textAlign="center">
                <Typography sx={{ fontWeight: "bold" }} gutterBottom>
                  DATES
                </Typography>
                <Typography>{job.dateStarted}</Typography>
                {"-"}
                <Typography>{job.dateFinished}</Typography>
              </Grid>
              <Grid item xs={12} sm={3} textAlign="center">
                <Typography sx={{ fontWeight: "bold" }} gutterBottom>
                  COST
                </Typography>
                <Typography>{job.payRange}</Typography>
              </Grid>
            </Grid>
          </Box>
        </JobImg>
      </Box>
    </>
  );
}

export default Job;
