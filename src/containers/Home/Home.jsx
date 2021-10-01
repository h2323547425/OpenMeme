import React from "react";
import { Grid } from "@mui/material";
import {
  Navbar,
  Sidebar,
  SecondarySidebar,
  MainContentWindow,
} from "./imports";

import './Home.css'

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Grid
        container
        spacing={3}
        className="homeGrid"
      >
        <Grid item xs={0} sm={0} lg={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={0} sm={12} lg={6}>
          <MainContentWindow />
        </Grid>
        <Grid item xs={0} sm={0} lg={3}>
          <SecondarySidebar />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
