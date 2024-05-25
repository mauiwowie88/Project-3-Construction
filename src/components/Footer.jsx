// import React from "react";
// import { Typography, Box, Container, Grid, IconButton } from "@mui/material";
// import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

// function Footer() {
//   return (
//     <Box sx={{ backgroundColor: "black", color: "white", p: 6 }}>
//       <Container>
//         <Grid container spacing={10}>
//           {/* JSM Details */}
//           <Grid item md>
//             <Typography variant="h2" sx={{ fontWeight: "bold" }}>
//               BG
//             </Typography>
//             <Typography>
//               1125 Lincoln Avenue #400
//               <br />
//               Steamboat Springs, CO 80487
//             </Typography>
//             <Typography>
//               info@jsmbuilders.com
//               <br />
//               970.871.4899
//             </Typography>
//           </Grid>
//           {/* Hours */}
//           <Grid item>
//             <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//               Hours
//             </Typography>
//             <Typography>
//               Monday – Friday
//               <br />9 AM – 5 PM
//             </Typography>
//           </Grid>
//           {/* Social Media Links */}
//           <Grid item>
//             <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//               Follow Us
//             </Typography>
//             <IconButton color="inherit" aria-label="Facebook">
//               <Facebook />
//             </IconButton>
//             <IconButton color="inherit" aria-label="Instagram">
//               <Instagram />
//             </IconButton>
//             <IconButton color="inherit" aria-label="LinkedIn">
//               <LinkedIn />
//             </IconButton>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default Footer;

import React from "react";
import { Typography, Box, Container, Grid, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "black", color: "white", p: 6 }}>
      <Container>
        <Grid container spacing={10} justifyContent="center">
          {/* JSM Details */}
          <Grid item md sx={{ alignItems: "space-around" }}>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              Project 3
            </Typography>
            <br />
            <Typography variant="body2">
              1125 Lincoln Avenue #400
              <br />
              Steamboat Springs, CO 80487
              <br />
              <br />
              info@jsmbuilders.com
              <br />
              970.871.4899
            </Typography>
          </Grid>
          {/* Hours */}
          <Grid item>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Hours
            </Typography>
            <br />
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Monday – Friday
              <br />9 AM – 5 PM
            </Typography>
          </Grid>
          {/* Social Media Links */}
          <Grid item>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Follow Us
            </Typography>
            <IconButton color="inherit" aria-label="Facebook">
              <a href="https://www.linkedin.com/in/mauricio-garza-guzman/">
                <Facebook />
              </a>
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram">
              <a href="https://mauiwowie88.github.io/">
                <Instagram />
              </a>
            </IconButton>
            <IconButton color="inherit" aria-label="LinkedIn">
              <a href="https://google.com">
                <LinkedIn />
              </a>
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
