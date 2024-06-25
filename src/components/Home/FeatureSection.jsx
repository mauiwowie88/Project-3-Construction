import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  Box,
  Container,
} from "@mui/material";
import {
  Engineering,
  Plumbing,
  Construction,
  Roofing,
  Foundation,
  Carpenter,
  HelpOutline,
} from "@mui/icons-material";
import { fetchData } from "../../client"; // Ensure this path is correct for your project
import { useTheme } from "@mui/material/styles";

const iconMap = {
  Engineering: Engineering,
  Plumbing: Plumbing,
  Construction: Construction,
  Roofing: Roofing,
  Foundation: Foundation,
  Carpenter: Carpenter,
};

// FeatureCard Component
const FeatureCard = ({ feature }) => {
  const [showDetails, setShowDetails] = useState(false);
  const IconComponent = iconMap[feature.icon] || HelpOutline; // Fallback to HelpOutline if icon not found
  const theme = useTheme();
  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={styles.gridItem}>
      <Card sx={styles.card}>
        <CardHeader
          avatar={<IconComponent sx={styles.icon} />}
          title={feature.title}
          titleTypographyProps={{ variant: "h6" }}
        />
        <CardContent sx={styles.cardContent}>
          <Typography
            variant="body1"
            color={theme.palette.gray.default}
            sx={styles.shortDescription}
          >
            {feature.description}
          </Typography>
          {showDetails && (
            <Typography variant="body2" component="ul" sx={styles.details}>
              {feature.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </Typography>
          )}
        </CardContent>
        <Box sx={styles.showServicesContainer}>
          <Typography
            variant="body2"
            sx={styles.showServices}
            onClick={toggleDetails}
          >
            {showDetails ? "Hide Services" : "Show Services"}
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};

// FeatureSection Component
const FeatureSection = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetchData(
      `*[_type == "features"]{title, description, details, icon}`,
      setFeatures
    );
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
      <Container>
        <Grid container spacing={2} sx={styles.gridContainer}>
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const styles = {
  box: {
    flexGrow: 1,
    p: "70px 40px",
    backgroundColor: "#ebebeb",
    clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
  },
  gridContainer: { display: "flex", alignItems: "stretch" },
  gridItem: { display: "flex" },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  icon: { fontSize: 40, color: "#B71C1C" },
  cardContent: { flexGrow: 1, display: "flex", flexDirection: "column" },
  details: {
    "& li": {
      marginBottom: "8px",
    },
  },
  showServicesContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "10px 0",
  },
  showServices: {
    color: "#388E3C",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  titleBox: { textAlign: "center", py: 4 },
  titleHeader: { fontWeight: "bold", color: "#800000", mb: 2 },
  shortDescription: {
    marginBottom: "10px",
    flex: 1,
  },
};

export default FeatureSection;
