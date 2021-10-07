import { Container } from "@mui/material";
import React from "react";
import useFetch from "react-fetch-hook";
import Card from "../Card/Card";
import "./MainContentWindow.css";

function MainContentWindow() {
    const { isLoading, data } = useFetch("http://localhost:5000/api/memes");

    return (
        <Container className="Meme-container">
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {data.map((me) => (
                        <Card meme={me} />
                    ))}
                </>
            )}
        </Container>
    );
}

export default MainContentWindow;
