import { Menu } from "@comp/ui/Menu";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import imgHome from "@img/img-home.jpg";

const Home = () => {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12}>
        <Menu />
      </Grid>

      <Grid item xs={12}>
       <Typography variant="h4" align="left" gutterBottom style={{ color: "#6357F1",  marginLeft:"12rem", marginTop:"12rem" }}>
          Welcome to Our Virtual Market
        </Typography>
        <Typography variant="body1" align="left" paragraph style={{ lineHeight: 1.6,  marginLeft:"12rem" }}>
          Explore a wide variety of products and shop online with us.
        </Typography>

        <img
          src={imgHome}  
          alt="Market Image"
          style={{ maxWidth: "40%", height: "auto", marginTop: "-19rem",justifyContent: "right", alignItems: "center", display: "flex", marginLeft: "53rem"}}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
