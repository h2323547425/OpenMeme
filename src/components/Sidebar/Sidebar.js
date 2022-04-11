import React from "react";
import { useForm, Controller } from 'react-hook-form';
import FormData from 'form-data';
import axios from 'axios';
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
    const { isDark } = React.useContext(ThemeContext);
    const themeMode = isDark ? "dark-sidebar" : "light-sidebar";
    
    const { handleSubmit, control } = useForm();

    async function submitHandler(values) {
        const formData = new FormData();
        console.log(values)
        formData.append("name", values.name);
        formData.append("comment", values.comment);
        formData.append("meme", values.meme);
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        const url = 'http://localhost:5000/api/memes';
        axios.post(url, formData, config).then(() => {
            alert("Meme is successfully submitted");
        }).catch((err) => {
            console.error(err);
        })
    }

    return (
        <div className={`aside-style ${themeMode}`}>
            {/* Most of the styles will be automatically applied through the other sidebar's styles */}
            <form onSubmit={handleSubmit(submitHandler)}>
                <h2>
                    Upload your own
                </h2>
                <FormControl className="sideBarFormControl">
                    <InputLabel htmlFor="author-name-label">
                        Author Name
                    </InputLabel>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <OutlinedInput
                                id="author-name-label"
                                value={value}
                                onChange={onChange}
                                label="Author Name"
                                fullWidth
                                color="primary"
                                autoComplete={false}
                                required
                            />
                        )}
                    />
                </FormControl>
                <FormControl className="sideBarFormControl">
                    <InputLabel htmlFor="description-label">
                        Comment
                    </InputLabel>
                    <Controller
                        name="comment"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <OutlinedInput
                                id="description-label"
                                value={value}
                                onChange={onChange}
                                label="Description"
                                multiline
                                fullWidth
                                autoComplete={false}
                                required
                            />
                        )}
                    />
                </FormControl>
                <FormControl className="sideBarFormControl">
                <Controller
                        name="meme"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                type="file"
                                value={value}
                                onChange={onChange}
                                variant="filled"
                                color="warning"
                                disableUnderline
                                required
                            />
                        )}
                    />
                </FormControl>
                <Button className="submit-button" fullWidth>
                    <Input type="submit" disableUnderline fullWidth/>
                </Button>
            </form>
        </div>
    );
}

export default Sidebar;
