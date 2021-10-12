import React, { useState } from "react";
import {
    FormControl,
    OutlinedInput,
    InputLabel,
    Input,
    Button
} from "@mui/material";
import "./Sidebar.css";
import ThemeContext from "../../utils/Themes/ThemeContext";

function Sidebar() {
    const [authorName, setAuthorName] = useState("");
    const [description, setDescription] = useState("");

    const { isDark } = React.useContext(ThemeContext);
    const themeMode = isDark ? "dark-sidebar" : "light-sidebar";

    return (
        <div className={`aside-style ${themeMode}`}>
            {/* Most of the styles will be automatically applied through the other sidebar's styles */}
            <form action="">
                <h2 variant="h4" color="inherit" className="heading">
                    Upload your own
                </h2>
                <FormControl className="sideBarFormControl">
                    <InputLabel htmlFor="author-name-label">
                        Author Name
                    </InputLabel>
                    <OutlinedInput
                        id="author-name-label"
                        value={authorName}
                        onChange={(event) => setAuthorName(event.target.value)}
                        label="Author Name"
                        fullWidth
                        color="primary"
                        autoComplete={false}
                        required
                    />
                </FormControl>
                <FormControl className="sideBarFormControl">
                    <InputLabel htmlFor="description-label">
                        Description
                    </InputLabel>
                    <OutlinedInput
                        id="description-label"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        label="Description"
                        multiline
                        fullWidth
                        autoComplete={false}
                        required
                    />
                </FormControl>
                <FormControl className="sideBarFormControl">
                    <Input
                        type="file"
                        variant="filled"
                        color="warning"
                        disableUnderline
                    />
                </FormControl>
                <Button variant="contained" color="success" fullWidth>
                    <Input
                        type="submit"
                        disableUnderline
                        fullWidth
                    />
                </Button>
            </form>
        </div>
    );
}

export default Sidebar;
