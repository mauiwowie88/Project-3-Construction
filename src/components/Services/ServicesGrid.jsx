import { work } from "../../db";
import { Box, Grid } from "@mui/material";
import CustomCard from "./CustomCard";

function ServicesGrid() {
  return (
    <Box>
      <Grid container sx={styles.container}>
        {work.map((el, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4} lg={3} xl={1.5}>
            <CustomCard data={el} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const styles = {
  container: {
    px: "10%",
    py: "5%",
  },
};

export default ServicesGrid;
