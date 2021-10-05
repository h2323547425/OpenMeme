
import React from "react";
import { Grid } from "@mui/material";
import Footer from "../../components/Footer/Footer"
import {
  Navbar,
  Sidebar,
  SecondarySidebar,
  MainContentWindow,
} from "./imports";
import ThemeContext from "../../utils/Themes/ThemeContext";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Home.css'

function Home() {
  const { isDark } = React.useContext(ThemeContext);
  let themeMode = isDark ? "dark-homeGrid" : "light-homeGrid";
  const darkTheme = createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Navbar></Navbar>
        <Grid
          container
          spacing={3}
          className={`homeGrid ${themeMode}`}
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
          <Grid item xs={0} sm={12} lg={0}>
            <Footer />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>

  );
}

export default Home;
