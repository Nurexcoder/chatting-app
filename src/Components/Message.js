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
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: ${(props) =>
        props.from === "he" ? "flex-start" : "flex-end"};
    /* justify-content: flex-start; */
    width: 50%;
    margin: 5px 10px;
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
    padding: 10px 30px;
    font-size: 0.8rem;
`;
const Image = styled.img`
    width: 400px;
    height: auto;
`;
const Message = ({ message }) => {
    console.log(message.file);
    // var URL = window.URL || window.webkitURL;

    // Create and revoke ObjectURL
    
    return (
        <MessageContainer alignItems='flex-start' from={message.from}>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
            <TextContainer from={message.from}>
                {message.message ? (
                    <Text from={message.from}>{message.message}</Text>
                ) : (
                    ""
                )}

                {message.file ? <Image src={message.file} /> : ""}
            </TextContainer>
        </MessageContainer>
    );
};

export default Message;
