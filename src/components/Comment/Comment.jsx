import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";

import './Comment.css'

export default function Comment({comment}) {
  return (
    <Card className="comments-Card">
      <CardHeader
        avatar={
          <Avatar className="avatar" aria-label="recipe" src={comment.author.profilePicture}>
          </Avatar>
        }
        title={comment.author.userName}
        subheader={comment.createdAt}
      />
      <CardContent>
        <Typography>{comment.body}</Typography>
      </CardContent>
      <Divider />
    </Card>
  );
}
