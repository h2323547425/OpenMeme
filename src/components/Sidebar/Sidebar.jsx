import React, { useState } from "react";
import {
    Typography,
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
        <aside className={`aside-style ${themeMode}`}>
            {/* Most of the styles will be automatically applied through the other sidebar's styles */}
            <Typography variant="h4" color="inherit" className="box-typography">
                add new
            </Typography>
            <form action="">
                <FormControl className="sideBarFormControl">
                    <InputLabel htmlFor="author-name-label">
                        Author Name
                    </InputLabel>
                    <OutlinedInput
                        id="author-name-label"
                        value={authorName}
                        onChange={(event) => setAuthorName(event.target.value)}
                        label="Author Name"
                        sx={{ outline: "none" }}
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
                        sx={{ outline: "none" }}
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
                        sx={{ color: "white" }}
                        disableUnderline
                        fullWidth
                    />
                </Button>
            </form>
        </aside>
    );
}

export default Sidebar;
