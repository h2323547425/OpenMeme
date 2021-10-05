/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from "react";
import "./ToggleSwitch.css";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import ThemeContext from "../../utils/Themes/ThemeContext";

const ToggleSwitch = () => {
    const { toggleMode } = useContext(ThemeContext);
    const { isDark } = useContext(ThemeContext);
    return (
        <IconButton size="large" onClick={toggleMode} color="inherit">
            <div className={isDark ? `` : `hide`}>
                <Brightness4Icon />
            </div>
            <div className={isDark ? `hide` : ``}>
                <Brightness7Icon />
            </div>
        </IconButton>
    );
};

export default ToggleSwitch;
