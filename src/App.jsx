import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { StyledEngineProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar/Leftbar";
import Rightbar from "./components/Rightbar";
import { styled } from "@mui/material/styles";
import HomepageContainer from "./components/Homepage/HomepageContainer";
import AddContainer from "./components/Homepage/Add/AddContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import Footer from "./components/Footer/Footer";

const RightBarMediaQuery = styled("div")(({ theme }) => ({
   [theme.breakpoints.down("sm")]: {
      display: "none",
   },
}));

const App = () => {
   return (
      <BrowserRouter>
         <StyledEngineProvider injectFirst>
            <Navbar />
            <Grid container>
               <Grid item sm={3} xs={2} lg={2}>
                  <Leftbar />
               </Grid>
               <Route
                  path="/homepage"
                  render={() => {
                     return (
                        <>
                           <Grid container item sm={6} xs={10} lg={7}>
                              <HomepageContainer />
                           </Grid>
                           <Grid item sm={3} lg={3}>
                              <RightBarMediaQuery>
                                 <Rightbar />
                              </RightBarMediaQuery>
                           </Grid>
                           <AddContainer />
                        </>
                     );
                  }}
               ></Route>
               <Route
                  path="/friends"
                  render={() => {
                     return (
                        <>
                           <Grid
                              container
                              item
                              sm={6}
                              xs={10}
                              lg={7}
                              spacing={1}
                           >
                              <FriendsContainer />
                           </Grid>
                           <Grid item sm={3}>
                              <RightBarMediaQuery>
                                 <Rightbar />
                              </RightBarMediaQuery>
                           </Grid>
                        </>
                     );
                  }}
               ></Route>
               <Grid item xs={12} sm={12}>
                  <Footer />
               </Grid>
            </Grid>
         </StyledEngineProvider>
      </BrowserRouter>
   );
};

export default App;
