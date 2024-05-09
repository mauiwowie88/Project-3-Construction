import {
  Grid,
  Container,
  Typography,
  Box,
  Paper,
  Button,
  Rating,
} from "@mui/material";
import portfolio from "../assets/db";
import { styled } from "@mui/system";

const JobBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  marginTop: 50,
});

const StyledImage = styled("img")({
  width: "100%",
  height: 200,
  objectFit: "cover",
});

export { JobBox, StyledImage };
