import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";

// import { characteristics } from "../assets/db";
import { ImgBox } from "../../components/Extra";
function Characteristics({ label }) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleImgClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <Grid container>
      {label.map((skill, index) => (
        <Grid
          key={index}
          item
          xs={skill.xs}
          sm={skill.sm}
          md={skill.md}
          p={0.3}
        >
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
                      background: "rgba(0, 0, 0, 0.8)",
                      flex: "1",
                      p: 2,
                    }}
                  >
                    {skill.description}
                  </Typography>
                </Box>
              ) : (
                <Typography
                  variant="h5"
                  sx={{
                    p: 1.5,
                    fontWeight: "bold",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0) 100%)",
                  }}
                >
                  {skill.title}
                </Typography>
              )}
            </ImgBox>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
export default Characteristics;
