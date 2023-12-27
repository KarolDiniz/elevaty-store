import { Menu } from "@ui/Menu";
import Grid from "@mui/material/Grid";

const Project = () => {

  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12}>
        <Menu />
      </Grid>
    </Grid>
  );
};

export default Project;
