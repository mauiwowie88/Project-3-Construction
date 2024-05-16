import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import bg from "../assets/images/kkk.jpeg";

function Job({ state }) {
  console.log(state);
  return (
    <>
      {/* Hero Picture */}
      <Box
        className="img-box"
        sx={{
          backgroundImage: `url(${bg})`,
          height: 300,
        }}
      ></Box>
    </>
  );
}

export default Job;
