import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";

const MessageContainer = styled.li`
    /* width: 50% !important; */
    /* margin: 10px 0; */
    padding: 10px 0;
    display: flex;
    flex-direction: ${(props) => (props.from === "he" ? "row" : "row-reverse")};

    /* align-items: flex-start !important; */
    /* justify-content: flex-start; */
`;

const Text = styled.span`
    /* background-color: blue; */
    /* border: 1px solid blue; */
    width: 50%;
    /* border-radius: 15px; */
    background-color: ${(props) =>
        props.from === "me" ? "#F4F4F4" : "rgba(180, 223, 229, 0.5)"};
    border-top-right-radius: ${(props) => (props.from === "me" ? "0" : "15px")};
    border-top-left-radius: ${(props) => (props.from === "he" ? "0" : "15px")};
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    margin: 5px 10px;
    padding: 10px 30px;
    font-size: 0.8rem;
`;
const Message = ({messages}) => {
    return (
        <MessageContainer alignItems='flex-start' from={messages.from}>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />

            <Text from={messages.from}>{messages.message}</Text>
        </MessageContainer>
    );
};

export default Message;
