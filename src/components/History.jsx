import { Grid, Typography } from "@mui/material";
import portfolio from "../assets/db";

import { JobBox, StyledImage } from "../assets/styles";

const Item = ({ job }) => {
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <JobBox>
        {job.image && <StyledImage src={job.image} alt="Project" />}
        <Typography variant="h6">{job.title}</Typography>
      </JobBox>
    </Grid>
  );
};

function History() {
  return (
    <Grid container spacing={2}>
      {portfolio.map((job, index) => (
        <Item key={index} job={job} />
      ))}
    </Grid>
  );
}
export default History;
