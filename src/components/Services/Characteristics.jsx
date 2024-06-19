import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { ImgBox } from "./ImgBox";

const SkillBox = ({ skill, isSelected, onClick }) => (
  <Box onClick={onClick} sx={styles.skillBox}>
    <ImgBox label={skill}>
      {isSelected ? (
        <Box sx={styles.descriptionBox}>
          <Typography variant="body2" sx={styles.descriptionText}>
            {skill.description}
          </Typography>
        </Box>
      ) : (
        <Typography variant="h5" sx={styles.title}>
          {skill.title}
        </Typography>
      )}
    </ImgBox>
  </Box>
);

const Characteristics = ({ label }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);

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
          <SkillBox
            skill={skill}
            isSelected={selectedSkill === skill}
            onClick={() => setSelectedSkill(skill)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const styles = {
  skillBox: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    "&:hover": {
      opacity: 0.8,
    },
  },
  descriptionBox: {
    height: "168px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "rgba(0, 0, 0, 0.8)",
    flex: 1,
    p: 2,
  },
  descriptionText: {
    p: 2,
  },
  title: {
    p: 1.5,
    fontWeight: "bold",
    background:
      "linear-gradient(to top, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0) 100%)",
  },
};

export default Characteristics;
