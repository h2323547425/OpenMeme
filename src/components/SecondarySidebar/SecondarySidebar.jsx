import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./SecondarySidebar.css";
import ThemeContext from "../../utils/Themes/ThemeContext";

function SecondarySidebar() {
    const { isDark } = React.useContext(ThemeContext);
    const themeMode = isDark ? "dark-secSidebar" : "light-secSidebar";
    return (
        <aside className={`aside-style ${themeMode}`}>
            <Box className="panel-container">
                <h1 className="panel-header">Top Creators</h1>
                <Box className="sidebar-box" />
            </Box>
            <Box>
                <Button className="capitalized" variant="contained" fullWidth>contact</Button>
            </Box>
        </aside>
    );
}

export default SecondarySidebar;
