import { Typography, Box, Container, Grid } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <footer>
      <Container>
        <Grid
          container
          className="footer-box
        "
        >
          <Grid item>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "3rem" }}>JSM</Typography>
              <br />
              <Typography>
                1125 Lincoln Avenue #400
                <br />
                Steamboat Springs, CO 80487
              </Typography>
              <br />
              <Typography variant="body1">
                info@jsmbuilders.com
                <br />
                970.871.4899
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                gap: 2,
                flex: 1,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Box>
                <Typography variant="h6">Hours</Typography>
                <Typography>
                  Monday – Friday
                  <br />9 AM – 5 PM
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6">Follow Us</Typography>
                <Box sx={{ display: "flex" }}>
                  <Facebook sx={{ marginRight: 1 }} />
                  <Instagram sx={{ marginRight: 1 }} />
                  <LinkedIn />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;

/*
<Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" component="div" gutterBottom>
            JSM
          </Typography>
          <Typography variant="body1" gutterBottom>
            1125 Lincoln Avenue #400
            <br />
            Steamboat Springs, CO 80487
          </Typography>
          <Typography variant="body1">
            info@jsmbuilders.com
            <br />
            970.871.4899
          </Typography>
        </Box>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "space-around" }}>
          <Box>
            <Typography variant="h6">Hours</Typography>
            <Typography>
              Monday – Friday
              <br />9 AM – 5 PM
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">Follow Us</Typography>
            <Box sx={{ display: "flex" }}>
              <Facebook sx={{ marginRight: 1 }} />
              <Instagram sx={{ marginRight: 1 }} />
              <LinkedIn />
            </Box>
          </Box>
        </Box>
      </Container>
*/
