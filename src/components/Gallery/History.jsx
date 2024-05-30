import { Grid, Typography, Box, Container } from "@mui/material";
import { portfolio } from "../../assets/db";

import { BlackButton, PortfolioItem } from "../Extra";

function History() {
  return (
    <Box sx={{ backgroundColor: "#f2f2f2" }}>
      <Container
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Typography variant="h4">Our Recent Work</Typography>

        <Grid container spacing={2.2}>
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
