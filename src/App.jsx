import "./App.css";
import History from "./components/History";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <History />
      </Container>
    </>
  );
}

export default App;

/*
// const Item = ({ job }) => {
//   return (
//     <Grid item xs={12} sm={6} md={4} xl={4}>
//       <Box
//         border={1}
//         p={2}
//         m={2}
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//         flexDirection={"column"}
//       >
//         <Typography variant="h3">{job.title}</Typography>
//         {job.image && <img src={job.image} alt="Project" />}
//       </Box>
//     </Grid>
//   );
// };

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography>xs=8</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>xs=4</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>xs=4</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography>xs=8</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>xs=4</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>xs=4</Typography>
        </Grid>
      </Grid>

    <Container>
      <Typography
        variant="h1"
        sx={{ my: 4, textAlign: "center", color: "primary.main" }}
      >
        Services
      </Typography>
      <Typography variant="h2">Overview</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 4,
          pt: 4,
        }}
      >
        {list.map((service, index) => (
          <Paper elevation={3} key={index} sx={{ width: { xs: 1, md: 320 } }}>
            <Box sx={{ m: 3 }}>
              <Typography variant="h3">{service}</Typography>
              <Typography sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget velit quis purus condimentum fermentum. Vivamus feugiat
                vehicula libero, eget fermentum sem ultricies id.
              </Typography>
              <Button variant="contained" sx={{ mt: 2 }} color="secondary">
                Learn More
              </Button>
              <Rating value={Math.floor(Math.random() * 5) + 1}></Rating>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>

*/
