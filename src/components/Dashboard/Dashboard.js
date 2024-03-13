import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Container,
  Divider,
} from "@mui/material";
import { Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import { TrendingUp, TrendingDown } from '@mui/icons-material'; // Import icons
import { dashBoardData } from "./dashboardData";

function Dashboard() {
  return (
    <Container>
      <Typography level="h2" gutterBottom margin={2} textColor={'#F6995C'}>
        ERP System Dashboard
      </Typography>
      <Grid container spacing={2}>
        {dashBoardData.map((item, index) => (
          <Grid key={index} item xs={12} md={3}>
            <Card elevation={2}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <Typography level='body-lg' gutterBottom>{item.title}</Typography>
                    <Typography level="h2" gutterBottom>{item.value}</Typography>
                  </div>
                  <Box sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: item.iconColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    {item.icon}
                  </Box>
                </Box>
                <Divider />
                <Box mt={2} sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: 'space-around',
                }}>
                  <Typography level='body-md' color={item.change < 0 ? 'red' : 'green'}
                    sx={{ display: 'flex', alignItems: 'center' }}>
                    {item.change}%
                    {item.change < 0 ? <TrendingDown color="error" /> : <TrendingUp color="success" />}
                  </Typography>
                  <Typography level='body-md'>
                    Since last month
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          my: 4,
        }}
      >
        <Button component={Link} variant="contained" to="/products" >
          Products Management
        </Button>
        <Button color="primary" variant="contained" component={Link} to="/orders">
          Orders Management
        </Button>
      </Box>
    </Container>
  );
}

export default Dashboard;
