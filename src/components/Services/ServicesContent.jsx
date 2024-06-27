import React from "react";
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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { services } from "../../db"; // Assuming this is where your data is coming from
import { Header } from "../Extra";

const ServicesContent = () => (
  <Container sx={styles.container} maxWidth="md">
    <Header title={["Our", "Services"]} />
    {services.map((section, index) => (
      <Box key={index} sx={styles.section}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" sx={styles.sectionTitle}>
              {section.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              {section.items.map((item, idx) => (
                <Grid item xs={12} key={idx}>
                  <Box sx={styles.subSection}>
                    <Typography variant="h6" sx={styles.subSectionTitle}>
                      {item.title}
                    </Typography>
                    <List>
                      {item.tasks.map((task, taskIdx) => (
                        <ListItem key={taskIdx}>
                          <ListItemText primary={task} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
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
    p: 1,
  },
  subSection: {
    p: 2,
  },
  subSectionTitle: {
    fontWeight: "bold",
    // mb: 1,
  },
};

export default ServicesContent;
