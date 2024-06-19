import { Box, Container, Typography, Grid } from "@mui/material";
import { SectionImg, BlackButton } from "../Extra";
import { Link } from "react-router-dom";

function CallUs() {
  return (
    <SectionImg title="Call Us">
      <Box p="3rem 2rem 0 2rem">
        <Typography variant="h2">
          Ready to get started? Give us a call today.
        </Typography>
      </Box>
      <Link to="../Contact" style={{ textDecoration: "none" }}>
        <BlackButton label="Contact Us" width="250px" m />
      </Link>
    </SectionImg>
  );
}
export default CallUs;
