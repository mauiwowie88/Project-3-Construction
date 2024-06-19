import { Box, Container, Typography, Grid, Card } from "@mui/material";
import { Link } from "react-router-dom";
const PortfolioItem = ({ job }) => {
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Link to="../Job" state={{ job }} style={{ textDecoration: "none" }}>
        <Card square>
          <img src={job.image} alt="Project" className="job-pic" />
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            {job.title}
          </Typography>
        </Card>
      </Link>
    </Grid>
  );
};

export default PortfolioItem;
