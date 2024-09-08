import { Grid, Typography, Container } from "@mui/material";
import { portfolio } from "../db";
import { SectionImg } from "../components/Extra";
import PortfolioItem from "../components/Gallery/PortfolioItem";

const Gallery = () => (
  <>
    <section aria-label="Gallery of recent work">
      <SectionImg title="Gallery" />

      <Container sx={styles.container}>
        <Typography variant="h4" sx={styles.title}>
          Our Recent Work
        </Typography>

        <Grid container spacing={2.2} role="list">
          {portfolio.map((job, index) => (
            <PortfolioItem key={index} job={job} role="listitem" />
          ))}
        </Grid>
      </Container>
    </section>
  </>
);

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    mt: 4,
  },
  title: {
    width: "100%",
    textAlign: "center",
    mb: 4,
  },
};

export default Gallery;
