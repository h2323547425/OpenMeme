import React from "react";
import Home from "./containers/Home/Home";
import "./App.css";
import ThemeProviderLocal from "./utils/Themes/ThemeProvider";

function App() {
    return (
        <ThemeProviderLocal>
            <div>
                <Home />
            </div>
        </ThemeProviderLocal>
    );
}

export default App;
