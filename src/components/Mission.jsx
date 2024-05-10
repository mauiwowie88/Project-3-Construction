import { Box, Container, Typography, Button } from "@mui/material";
import hero from "../assets/images/k.jpg";

function Mission() {
  return (
    <Box>
      <Box className="mission-box" sx={{ backgroundImage: `url(${hero})` }}>
        <Box sx={{ zIndex: 2 }}>
          <Typography sx={{ fontSize: 120 }}>JSM</Typography>
          <Typography sx={{ aligntItems: "center" }}>
            A New Culture Of Builders
          </Typography>
        </Box>
      </Box>
      <Box className="mission-container">
        <Typography variant="h4"> Our Mission</Typography>
        <Typography className="mission-text">
          A culture where our team members are empowered to do what they do best
          because they ARE the best at what they do.
        </Typography>
        <Typography className="mission-text">
          A culture where people matter, are respected, and aren’t just used as
          a means to an end.
        </Typography>
        <Typography className="mission-text">
          A culture where honesty, transparency, and forthrightness are defining
          characteristics of our process and all our relationships.
        </Typography>
        <Typography className="mission-text">
          A culture where our team members are empowered to do what they do best
          because they ARE the best at what they do.
        </Typography>
        <Typography className="mission-text">
          A culture where our client’s goals are championed over our
          bottom-line.
        </Typography>
        <Typography className="mission-text">
          A culture that is collaborative, efficient, and smart.
        </Typography>
        <Typography className="mission-text">
          A culture that is constantly learning, adapting, and growing.
        </Typography>
        <Box>
          <Typography variant="h5" sx={{ margin: 3 }}>
            This Is JMS
          </Typography>
          <Button className="mission-btn">Learn More</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Mission;
