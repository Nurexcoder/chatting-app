import myMessages from "../Messages";

import styled from "styled-components";
import { Avatar, Badge } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import Message from "./Message";
import { useEffect, useState } from "react";

const Container = styled.div`
    width: 70%;
    height: 90vh;
    /* background-color: blanchedalmond; */
    margin: 0px 20px;
    /* border: 1px solid rgba(0,0,0,0.6) ; */
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CardContainer = styled.div`
    width: 100%;
    height: 90%;
    background-color: burlywood;
    margin: 200px 20px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const DetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #303c6c;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    color: #fff;
    width: 100%;
`;
const UserContainer = styled.div``;
const Username = styled.span`
    margin-left: 15px;
`;
const SettingsContainer = styled.div``;

const Image = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 10px;
`;
const Messages = styled.ul`
    width: 100%;

    padding: 10px 25px !important;
    height: 80%;
    display: flex;
    flex-direction: column;
    /* align-items: ; */
    /* justify-content: space-between; */
    list-style: none;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
    /* background-color: black; */
`;

const SendMessageContainer = styled.div`
    width: 100%;
    padding: 10px 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const WriteMessageContainer = styled.div`
    /* margin: 20px 10px; */
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.7);
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
`;
const Input = styled.input`
    width: 90%;
    padding: 20px 5px;

    height: 35px;
    border: none;
    outline: none;
`;
const File = styled.input`
    visibility: hidden;
    width: 0;
    height: 0;
`;
const Label = styled.label``;
const FileIcon = styled(AttachFileIcon)`
    background-color: white;
`;
const Send = styled(SendIcon)`
    background-color: white;
    transform: scale(1.2);
`;
const Button = styled.button`
    background-color: white;
    /* border: none; */
    outline: none;
    height: 35px;
    border: none;
    padding: 20px 5px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 35px;
    width: 45px;
    margin-left: 5px;
`;

const MessageContainer = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {

    
      
    }, [messages]);
    
    return (
        <Container>
            <CardContainer>
                <DetailsContainer>
                    <UserContainer>
                        <Badge color='primary' variant='dot'>
                            <Avatar>
                                <Image src='ironman.jpg' />
                            </Avatar>
                        </Badge>
                        <Username>Hibjul Ahmed</Username>
                    </UserContainer>
                    <SettingsContainer>
                        <MoreVertIcon />
                        <CloseIcon />
                    </SettingsContainer>
                </DetailsContainer>
                <Messages>
                    {myMessages && myMessages.length !== 0
                        ? myMessages[0].messages.map((messages) => (
                              <Message messages={messages} />
                          ))
                        : "Loading"}
                </Messages>
                <SendMessageContainer>
                    <WriteMessageContainer>
                        <Input type='text' />
                        {/* <File type='file' /> */}
                        <Label htmlFor='file-input'>
                            <FileIcon />
                        </Label>
                        <File id='file-input' type='file' />
                    </WriteMessageContainer>
                    <Button>
                        <Send />
                    </Button>
                </SendMessageContainer>
            </CardContainer>
        </Container>
    );
};

export default MessageContainer;
