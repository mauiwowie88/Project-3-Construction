import React from "react";
import { SectionImg, PortfolioItem } from "../components/Extra";

import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const Item = ({ props }) => {
  return (
    <Grid item xs={12} sm={props.sm} md={props.md}>
      <TextField
        fullWidth
        label={props.label}
        variant="outlined"
        required={props.required}
        name={props.name}
        multiline={props.multiline || false}
        rows={props.rows || 1}
      />
    </Grid>
  );
};

function Contact() {
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

  return (
    <>
      <SectionImg title="Contact" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ maxWidth: 1000, p: 3 }}>
          <form action="https://formspree.io/f/mjvndzaw" method="POST">
            <Grid container spacing={2}>
              {formFields.map((field, index) => (
                <Item key={index} props={field} />
              ))}
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button variant="contained" type="submit" sx={{ px: 5 }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Contact;
