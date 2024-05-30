import { Box } from "@mui/material";
import { quotes } from "../../assets/db";
import { BoxSlider } from "../Extra";

function Testimonials() {
  return (
    <Box>
      <BoxSlider data={quotes} sideBySide={false} />
    </Box>
  );
}
export default Testimonials;
