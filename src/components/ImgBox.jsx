import { Box, Container, Typography, Button } from "@mui/material";
import { sectionImgs } from "../assets/db";

function ImgBox({ title, children }) {
  const section = sectionImgs.find((section) => section.title == title);
  const boxStyles = {
    backgroundImage: section.dark
      ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${section.image})`
      : `url(${section.image})`,
    height: `${section.size}px`,
    color: section.dark ? "white" : "black", // Example of additional styling based on dark property
  };

  return (
    <Box className="box" sx={boxStyles}>
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
export default ImgBox;
