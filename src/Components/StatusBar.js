import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";

import SortIcon from "@mui/icons-material/Sort";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// import avatar from './ironman.jpg';
const Container = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.06);
    /* flex: 2; */
    /* margin-bottom:15px; */
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    margin: 0 20px;
`;
const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 18%;
    margin: 0 20px;
    @media (max-width:576px) {
        margin: none;
        width: 40%;

    }
`;
const H2 = styled.h3``;
const Username = styled.span`
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    /* ... */
`;
const Span = styled.span`
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    
`;

const Image = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 10px;
`;
const Sort = styled(SortIcon)`
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 20%;
    margin: 0 10px;
    transform: scale(1.2);
`;
const Notifications = styled(NotificationsIcon)``;
const DownIcon = styled(KeyboardArrowDownIcon)`
    margin: 0 2px;
    transform: scale(1.2);
`;

const StatusBar = () => {
    return (
        <Container>
            <LeftContainer>
                <H2>Chat</H2>
                <Span>
                    <Sort />
                    Sort
                </Span>
            </LeftContainer>
            <RightContainer>
                <Badge badgeContent={4} color="primary">
                    <Notifications />
                </Badge>
                <Username>
                    <Image src='ironman.jpg' />
                    Hibjul Ahmed
                    <DownIcon />
                </Username>
            </RightContainer>
        </Container>
    );
};

export default StatusBar;
