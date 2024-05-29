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
                {selectedSkill === skill ? (
                  <Box sx={{}}>
                    <Typography
                      variant="body2"
                      p={2}
                      sx={{
                        height: "168px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      {skill.description}
                    </Typography>
                  </Box>
                ) : (
                  <Typography
                    variant="h6"
                    sx={{ bottom: 1, fontWeight: "bold" }}
                  >
                    {skill.title}
                  </Typography>
                )}
              </ImgBox>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
export default Characteristics;
