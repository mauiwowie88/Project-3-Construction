import React, { useState, useEffect } from "react";
import { fetchData } from "../../client";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
} from "@mui/material";

const FeatureCard = ({ feature }) => (
  <Grid item xs={12} sm={6} md={4} lg={3} sx={styles.gridItem}>
    <Card sx={styles.card}>
      <CardHeader
        avatar={<Box component={feature.icon} sx={styles.icon} />}
        title={feature.title}
        titleTypographyProps={{ variant: "h6" }}
      />
      <CardContent sx={styles.cardContent}>
        <Typography variant="body2" component="ul" sx={styles.description}>
          {feature.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

const FeatureSection = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetchData(`*[_type == "features"]{title, description, icon}`, setFeatures);
  }, []);

  if (!features.length) return <div>Loading...</div>;

  return (
    <Box sx={styles.box}>
      <Box sx={styles.titleBox}>
        <Typography variant="h3" sx={styles.titleHeader}>
          Superior & High Quality Services
        </Typography>
        <Typography variant="body1">
          Why deal with multiple service providers when Project 3 can do it all?
        </Typography>
      </Box>

      <Grid container spacing={2} sx={styles.gridContainer}>
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </Grid>
    </Box>
  );
};

const styles = {
  box: { flexGrow: 1, p: 2 },
  gridContainer: { display: "flex", alignItems: "stretch" },
  gridItem: { display: "flex" },
  card: { display: "flex", flexDirection: "column", width: "100%", p: 2 },
  icon: { fontSize: 40 },
  cardContent: { flexGrow: 1 },
  description: { margin: 0, padding: 0 },
  titleBox: { textAlign: "center", py: 4 },
  titleHeader: { fontWeight: "bold", color: "#800000", mb: 2 },
};

export default FeatureSection;
