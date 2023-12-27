import { useEffect, useState } from "react";
import { Menu } from "@comp/ui/Menu";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <Grid component="main" rowSpacing={12}>
      <Grid component="header" mt={3} mb={3}>
        <Menu />
      </Grid>
          </Grid>
  );
};

export default Home;
