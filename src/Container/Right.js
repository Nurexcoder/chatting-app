import React from "react";
import StatusBar from "../Components/StatusBar";
import styled from "styled-components";
import ChatPart from "./ChatPart";


const Container = styled.div`
    width: 95%;
    height: 100vh;
    /* background-color: yellow; */
`;

const Right = () => {
    return (
        <Container>
            <StatusBar />
            <ChatPart/>
        </Container>
    );
};

export default Right;
