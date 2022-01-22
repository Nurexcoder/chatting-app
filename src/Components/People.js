import React from "react";
import styled from "styled-components";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import BadgeUnstyled from "@mui/base/BadgeUnstyled";
import { Badge } from "@mui/material";

const Container = styled(ListItem)`
    :hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;
const Image = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 10px;
`;
const People = ({ data }) => {
    return (
        <Container>
            <ListItemAvatar>
                <Badge color="primary"  variant={data.isOnline?'dot':' '}>
                    <Avatar>
                        <Image src={data.avatar} />
                    </Avatar>
                </Badge>
            </ListItemAvatar>
            <ListItemText
                primary={data.username}
                secondary={data.lastMessage}
            />
        </Container>
    );
};

export default People;
