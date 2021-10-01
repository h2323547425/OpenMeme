import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import './SecondarySidebar.css';

function SecondarySidebar() {
  return (
    <aside className="aside-style">
      {}
      <Box className = 'panel-container'>
      <h2 className = 'panel-header'>Top Creators</h2>
        <Box className="sidebar-box"></Box>
      </Box>
      <Box>
        <Typography
          variant="h4"
          color="initial"
          className="box-typography"
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
