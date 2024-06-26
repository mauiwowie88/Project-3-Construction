import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { services } from "../../db"; // Assuming this is where your data is coming from
import OurServicesHeader from "./OurServicesHeader";

const ServicesContent = () => (
  <Container sx={styles.container} maxWidth="md">
    <OurServicesHeader title={["Our", "Services"]} />
    {services.map((section, index) => (
      <Box key={index} sx={styles.section}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" sx={styles.sectionTitle}>
              {section.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              {section.items.map((item, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <List>
                    <ListItem>
                      <ListItemText primary={item} />
                    </ListItem>
                  </List>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
    ))}
  </Container>
);

const styles = {
  container: {
    my: 4,
  },
  section: {
    m: 4,
  },
  sectionTitle: {
    fontWeight: "bold",
    color: "#3f51b5",
  },
};

export default ServicesContent;
