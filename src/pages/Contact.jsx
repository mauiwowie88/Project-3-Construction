import React from "react";
import { SectionImg } from "../components/Extra";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";

const FormField = ({ field }) => (
  <Grid item xs={12} sm={field.sm} md={field.md}>
    <TextField
      fullWidth
      label={field.label}
      variant="outlined"
      required={field.required}
      name={field.name}
      multiline={field.multiline || false}
      rows={field.rows || 1}
    />
  </Grid>
);

const formFields = [
  { name: "first_name", label: "First Name", required: true, md: 6 },
  { name: "last_name", label: "Last Name", md: 6 },
  { name: "email", label: "Email", required: true, md: 6, sm: 12 },
  { name: "phone", label: "Phone", md: 6 },
  { name: "subject", label: "Subject", md: 12 },
  {
    name: "message",
    label: "Message",
    required: true,
    multiline: true,
    rows: 4,
    md: 12,
  },
];

const Contact = () => (
  <>
    <SectionImg title="Contact" />
    <Box sx={styles.outerBox}>
      <Box sx={styles.innerBox}>
        <form action="https://formspree.io/f/mjvndzaw" method="POST">
          <Grid container spacing={2}>
            {formFields.map((field, index) => (
              <FormField key={index} field={field} />
            ))}
            <Grid item xs={12} sx={styles.submitButtonGrid}>
              <Button
                variant="contained"
                type="submit"
                sx={styles.submitButton}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  </>
);

const styles = {
  outerBox: {
    display: "flex",
    justifyContent: "center",
  },
  innerBox: {
    maxWidth: 1000,
    p: 3,
  },
  submitButtonGrid: {
    display: "flex",
    justifyContent: "center",
  },
  submitButton: {
    px: 5,
  },
};

export default Contact;
