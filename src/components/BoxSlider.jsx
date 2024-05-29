import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function BoxSlider({ data, sideBySide }) {
  const [index, setIndex] = useState(0);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const nextQuote = () =>
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  const prevQuote = () =>
    setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);

  useEffect(() => {
    const interval = setInterval(nextQuote, 6000);
    return () => clearInterval(interval);
  }, []);

  if (sideBySide && !isSmallScreen) {
    return (
      <Grid container sx={{ justifyContent: "center", flexWrap: "wrap" }}>
        {data.map((item, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            key={idx}
            sx={{
              display: "flex",
              flex: "1 1 0",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                height: "50vh",
                backgroundImage: `url(${item.imgPath})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0))",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  position: "relative",
                  textAlign: "center",
                  zIndex: 1,
                  padding: "20px",
                  fontWeight: "bold",
                  lineHeight: 1.2,
                  textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
                }}
              >
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Box
      key={index}
      sx={{
        height: "40vh",
        width: "100%",
        background: "center / cover no-repeat",
        backgroundImage: `url(${data[index].imgPath})`,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <Typography
        variant="h4"
        sx={{
          position: "relative",
          textAlign: "center",
          zIndex: 1,
          padding: "0 20px",
          fontWeight: "bold",
          lineHeight: 1.2,
          textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        {data[index].label}
      </Typography>

      <Box
        sx={{
          m: 1,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <IconButton onClick={prevQuote} style={{ color: "white" }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton onClick={nextQuote} style={{ color: "white" }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default BoxSlider;
