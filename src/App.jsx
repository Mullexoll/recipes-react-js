import React from "react";
import { Grid } from "@material-ui/core";
import { StyledEngineProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import { styled } from "@mui/material/styles";
import HomepageContainer from "./components/Homepage/HomepageContainer";
import AddContainer from "./components/Homepage/Add/AddContainer";

const RightBarMediaQuery = styled("div")(({ theme }) => ({
   [theme.breakpoints.down("sm")]: {
      display: "none",
   },
}));

const App = () => {
   return (
      <StyledEngineProvider injectFirst>
         <Navbar />
         <Grid container>
            <Grid item sm={3} xs={2} lg={2}>
               <Leftbar />
            </Grid>
            <Grid container item sm={6} xs={10} lg={7}>
               <HomepageContainer />
            </Grid>
            <Grid item sm={3} lg={3}>
               <RightBarMediaQuery>
                  <Rightbar />
               </RightBarMediaQuery>
            </Grid>
            <AddContainer />
         </Grid>
      </StyledEngineProvider>
   );
};

export default App;
