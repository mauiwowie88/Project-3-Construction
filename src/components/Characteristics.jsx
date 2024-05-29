import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";

// import { characteristics } from "../assets/db";
import { ImgBox } from "../components/Extra";
function Characteristics({ label }) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleImgClick = (skill) => {
    setSelectedSkill(skill);
  };

  const handleClose = () => {
    setSelectedSkill(null);
  };
  return (
    <Container>
      <Grid container>
        {label.map((skill, index) => (
          <Grid key={index} item xs={skill.size} p={0.3}>
            <Box
              onClick={() => handleImgClick(skill)}
              sx={{
                position: "relative",
                cursor: "pointer",
                overflow: "hidden",
                "&:hover": {
                  opacity: 0.8,
                },
              }}
            >
              <ImgBox label={skill}>
                <Typography variant="h4" sx={{ bottom: 1, fontWeight: "bold" }}>
                  {skill.title}
                </Typography>
              </ImgBox>
              {selectedSkill === skill && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                  onClick={handleClose}
                >
                  <Typography variant="body2" p={2} sx={{}}>
                    {skill.description}
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
export default Characteristics;
