import React from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
  Container,
} from "@mui/material";
import bg from "../assets/images/mmm.jpg";

function Contact() {
  return (
    <Box>
      <Box
        className="img-box"
        sx={{ backgroundImage: `url(${bg})`, height: 300 }}
      ></Box>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" sx={{ justifyContent: "center" }}>
          Contact Us
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Email" variant="outlined" required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Phone" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                required
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
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox />}
                label="Sign up for news and updates"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

export default Contact;
