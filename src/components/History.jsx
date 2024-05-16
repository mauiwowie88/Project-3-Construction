import { Grid, Typography, Box, Container } from "@mui/material";
import { portfolio } from "../assets/db";

import { BlackButton, PortfolioItem } from "../components/Extra";

function History() {
  return (
    <Box sx={{ backgroundColor: "#eef5f8" }}>
      <Container
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            mt: 4,
          }}
        >
          Our Recent Work
        </Typography>

        <Grid container spacing={1.6}>
          {portfolio.map((job, index) => (
            <PortfolioItem key={index} job={job} />
          ))}
        </Grid>
        <BlackButton p="Back to Top" sx={{ mt: 4 }} />
      </Container>
    </Box>
  );
}
export default History;
