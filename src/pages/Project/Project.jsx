import React from "react";
import { Menu } from "@ui/Menu";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Project = () => {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12}>
        <Menu />
      </Grid>

      <Grid item xs={12} style={{ marginTop: "12rem" }}>
        <Typography variant="h5" align="center">
          Project Credits
        </Typography>
        <Typography variant="body1" align="center">
        <br />This project was developed as part of a technical challenge for a front-end position. <br />
          For more information, please refer to the README in the repository on GitHub with the link: <a href="https://github.com/KarolDiniz/elevaty-store#" target="_blank" rel="noopener noreferrer">https://github.com/KarolDiniz/elevaty-store#</a>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Project;
