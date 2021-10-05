import React, { useContext } from "react";
import "./ToggleSwitch.css";
import ThemeContext from "../../utils/Themes/ThemeContext";

const ToggleSwitch = () => {
  const { toggleMode, isDark } = useContext(ThemeContext);

  return (
    <div className="ToggleSwitch-div">
      <label className="switch">
        <input onClick={toggleMode} type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;