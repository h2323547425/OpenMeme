import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    Avatar,
    Typography,
    Divider
} from "@mui/material";

import "./Comment.css";

export default function Comments() {
    return (
        <Card className="comments-Card">
            <CardHeader
                avatar={
                    <Avatar className="avatar" aria-label="recipe">
                        R
                    </Avatar>
                }
                title="Shubham Singh"
                subheader="September 18, 2021"
            />
            <CardContent>
                <Typography>This is very funny</Typography>
            </CardContent>
            <Divider />
        </Card>
    );
}
