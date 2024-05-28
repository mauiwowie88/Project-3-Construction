import React from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { SectionImg } from "../components/Extra";

function Contact() {
  return (
    <Box>
      <SectionImg title="Contact" />
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" sx={{ justifyContent: "center" }}>
          Contact Us
        </Typography>
        <form action="https://formspree.io/f/mjvndzaw" method="POST">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                required
                name="first_name"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                name="last_name"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                required
                name="email"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone"
                variant="outlined"
                name="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                name="subject"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                required
                name="message"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox name="newsletter" />}
                label="Sign up for news and updates"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

export default Contact;
