/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from "react";
import "./ToggleSwitch.css";
import ThemeContext from "../../utils/Themes/ThemeContext";

const ToggleSwitch = () => {
    const { toggleMode } = useContext(ThemeContext);

    return (
        <div className="ToggleSwitch-div">
            <label className="switch">
                <input onClick={toggleMode} type="checkbox" />
                <span className="slider round" />
            </label>
        </div>
    );
};

export default ToggleSwitch;
