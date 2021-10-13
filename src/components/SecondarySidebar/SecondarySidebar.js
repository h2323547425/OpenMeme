import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./SecondarySidebar.css";
import ThemeContext from "../../utils/Themes/ThemeContext";

function SecondarySidebar() {
    const { isDark } = React.useContext(ThemeContext);
    const themeMode = isDark ? "dark-secSidebar" : "light-secSidebar";
    return (
        <div className={`aside-style ${themeMode}`}>
            <Box className="panel-container">
                <h2 className="panel-header">Top Creators</h2>
                <Box className="sidebar-box" />
            </Box>
            <Button className="contact-button" fullWidth>Contact</Button>
        </div>
    );
}

export default SecondarySidebar;
