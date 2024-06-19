import { useLocation } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

const Job = () => {
  const location = useLocation();
  const { job } = location.state || {};

  return (
    <Box sx={styles.jobBox}>
      <Box sx={styles.contentBox}>
        <img src={job.image} alt={job.title} />
        <Box sx={styles.infoBox}>
          <Typography
            variant="h4"
            align="center"
            sx={styles.title}
            gutterBottom
          >
            {job.title}
          </Typography>
          <Grid container spacing={4} justifyContent="space-evenly">
            <JobDetail label="DESCRIPTION" content={job.description} />
            <JobDetail
              label="DATES"
              content={`${job.dateStarted} - ${job.dateFinished}`}
            />
            <JobDetail label="COST" content={job.payRange} />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

const JobDetail = ({ label, content }) => (
  <Grid item xs={12} sm={3} textAlign="center">
    <Typography variant="subtitle1" sx={styles.bold} gutterBottom>
      {label}
    </Typography>
    <Typography>{content}</Typography>
  </Grid>
);

const styles = {
  jobBox: {
    textAlign: "center",
    p: 3,
  },
  contentBox: {
    zIndex: 2,
  },
  infoBox: {
    m: 4,
  },
  title: {
    p: 3,
  },
  bold: {
    fontWeight: "bold",
  },
};

export default Job;
