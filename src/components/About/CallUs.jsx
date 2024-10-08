import { Box, Typography } from "@mui/material";
import { SectionImg, BlackButton } from "../Extra";
import { Link } from "react-router-dom";

function CallUs() {
  return (
    <section aria-labelledby="call-us-title">
      <SectionImg title="Call Us">
        <Box p="3rem 2rem 0 2rem">
          <Typography variant="h2" id="call-us-title">
            Ready to get started? Give us a call today.
          </Typography>
        </Box>
        <Link
          to="../Contact"
          style={{ textDecoration: "none" }}
          aria-label="Contact Us"
        >
          <BlackButton label="Contact Us" width="250px" />
        </Link>
      </SectionImg>
    </section>
  );
}

export default CallUs;
