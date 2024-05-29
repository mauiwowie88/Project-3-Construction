import { SectionImg } from "../components/Extra";
import Faded from "../components/Faded";
import BoxSlider from "../components/BoxSlider";
import { work } from "../assets/db";
import { Container, Box } from "@mui/material";

function Services() {
  return (
    <>
      <SectionImg title="Services" />
      <Faded />
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <BoxSlider data={work} sideBySide={true} />
      </Box>
    </>
  );
}
export default Services;
