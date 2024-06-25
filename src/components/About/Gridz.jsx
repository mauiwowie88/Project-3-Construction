import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, p: 2, backgroundColor: "#1a202c", color: "#fff" }}>
      <Grid container spacing={2}>
        {/* Top Summary Boxes */}
        <Grid item xs={3}>
          <Paper sx={{ p: 2, backgroundColor: "#2d3748", color: "#fff" }}>
            <Typography variant="h6">12,361</Typography>
            <Typography variant="subtitle1">Emails Sent</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 2, backgroundColor: "#2d3748", color: "#fff" }}>
            <Typography variant="h6">431,225</Typography>
            <Typography variant="subtitle1">Sales Obtained</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 2, backgroundColor: "#2d3748", color: "#fff" }}>
            <Typography variant="h6">32,441</Typography>
            <Typography variant="subtitle1">New Clients</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 2, backgroundColor: "#2d3748", color: "#fff" }}>
            <Typography variant="h6">1,325,134</Typography>
            <Typography variant="subtitle1">Traffic Received</Typography>
          </Paper>
        </Grid>

        {/* Main Graph */}
        <Grid item xs={8}>
          <Paper sx={{ p: 2, backgroundColor: "#2d3748", color: "#fff" }}>
            <Typography variant="h6">Revenue Generated</Typography>
            <Box sx={{ height: 300 }}>{/* Insert graph component here */}</Box>
          </Paper>
        </Grid>

        {/* Recent Transactions */}
        <Grid item xs={4}>
          <Paper sx={{ p: 2, backgroundColor: "#2d3748", color: "#fff" }}>
            <Typography variant="h6">Recent Transactions</Typography>
            <Box sx={{ height: 300 }}>
              {/* Insert transactions component here */}
            </Box>
          </Paper>
        </Grid>

        {/* Campaign */}
        <Grid item xs={4}>
          <Paper sx={{ p: 2, backgroundColor: "#2d3748", color: "#fff" }}>
            <Typography variant="h6">Campaign</Typography>
            <Box sx={{ height: 300 }}>
              {/* Insert campaign component here */}
            </Box>
          </Paper>
        </Grid>

        {/* Sales Quantity */}
        <Grid item xs={4}>
          <Paper sx={{ p: 2, backgroundColor: "#2d3748", color: "#fff" }}>
            <Typography variant="h6">Sales Quantity</Typography>
            <Box sx={{ height: 300 }}>
              {/* Insert sales quantity component here */}
            </Box>
          </Paper>
        </Grid>

        {/* Geography Based Traffic */}
        <Grid item xs={4}>
          <Paper sx={{ p: 2, backgroundColor: "#2d3748", color: "#fff" }}>
            <Typography variant="h6">Geography Based Traffic</Typography>
            <Box sx={{ height: 300 }}>
              {/* Insert geography traffic component here */}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
