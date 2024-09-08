import { Box, TextField, Button, Grid } from "@mui/material";
import paper from "../../assets/images/newest/paper.jpg";

/* eslint-disable */
const FormField = ({ field }) => (
  <Grid item xs={12} sm={field.sm || 12} md={field.md || 12}>
    <TextField
      fullWidth
      label={field.label}
      variant="outlined"
      required={field.required}
      name={field.name}
      multiline={field.multiline || false}
      rows={field.rows || 1}
      aria-label={field.label}
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
  <section aria-labelledby="contact-section">
    <Box sx={styles.imageContainer}>
      <img src={paper} alt="Contact" style={styles.image} />
    </Box>
    <Box sx={styles.outerBox}>
      <Box sx={styles.innerBox}>
        <form
          action="https://formspree.io/f/mjvndzaw"
          method="POST"
          name="contact-form"
        >
          <Grid container spacing={2}>
            {formFields.map((field, index) => (
              <FormField key={index} field={field} />
            ))}
            <Grid item xs={12} sx={styles.submitButtonGrid}>
              <Button
                variant="contained"
                type="submit"
                sx={styles.submitButton}
                aria-label="Submit contact form"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  </section>
);

const styles = {
  imageContainer: {
    width: "100%",
    height: "222px",
    overflow: "hidden",
    mb: 3,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  outerBox: {
    display: "flex",
    justifyContent: "center",
    mt: 3,
  },
  innerBox: {
    maxWidth: 1000,
    width: "100%",
    padding: { xs: 2, sm: 3 }, // Responsive padding for small and medium screens
    backgroundColor: "#f9f9f9", // Add background color for form contrast
  },
  submitButtonGrid: {
    display: "flex",
    justifyContent: "center",
    mt: 2,
  },
  submitButton: {
    px: 5,
    py: 1,
    backgroundColor: "#0069d9", // Customize button color
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
};

export default Contact;
