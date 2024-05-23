import { Box, Container, Typography, Button } from "@mui/material";
import { sectionImgs } from "../assets/db";

function JobImg({ children }) {
  return (
    <Box className="job-box">
      <Box
        sx={{
          zIndex: 2,
          textAlign: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
export default JobImg;
