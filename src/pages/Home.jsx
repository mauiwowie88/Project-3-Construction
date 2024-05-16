import { Container, Box, Typography } from "@mui/material";
import History from "../components/History";
import Mission from "../components/Mission";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Mission />
      <History />
      <Testimonials />
    </>
  );
}
export default Home;
