import { Grid, Typography, Box, Container, Button, Card } from "@mui/material";
import { Link } from "react-router-dom";
import handleClick from "../assets/utils";

const PortfolioItem = ({ job }) => {
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Link className="nav-link" to="/Job" state={{ job }}>
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

const BlackButton = ({ p }) => {
  return (
    <Button
      className="btn"
      onClick={handleClick}
      sx={{
        color: "white",
        backgroundColor: "black",
        margin: "2rem auto",
        display: "block",
        width: { xs: "80%", md: "50%" },
        maxWidth: "300px",
        "&:hover": {
          backgroundColor: "white",
          color: "black",
          outline: "1px solid black",
        },
      }}
    >
      {p}
    </Button>
  );
};

const WhiteButton = ({ p }) => {
  return (
    <Button className="btn-dark" onClick={handleClick}>
      {p}
    </Button>
  );
};

export { PortfolioItem, BlackButton, WhiteButton };
