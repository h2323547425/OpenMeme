import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./SecondarySidebar.css";
import ThemeContext from "../../utils/Themes/ThemeContext";

function SecondarySidebar() {
  const { isDark } = React.useContext(ThemeContext);
  let themeMode = isDark ? "dark-secSidebar" : "light-secSidebar";
  return (
    <aside className={`aside-style ${themeMode}`}>
      <Box className='panel-container'>
        <h2 className='panel-header'>Top Creators</h2>
        <Box className="sidebar-box"></Box>
      </Box>
      <Box>
        <Typography
          variant="h4"
          color="inherit"
          className={`box-typography ${themeMode}`}
        >
          Contact
        </Typography>
        <Button
          className="capitalized"
          variant="contained"
          fullWidth
        >
          click to contact
        </Button>
      </Box>
    </aside>
  );
}

export default SecondarySidebar;
