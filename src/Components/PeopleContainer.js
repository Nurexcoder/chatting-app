import styled from "styled-components";
import List from "@mui/material/List";

import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { SearchOutlined } from "@mui/icons-material";
import People from "./People";
import profiles from "../People";

const Container = styled.div`
    width: 30%;
    height: 90vh;

    background-color: white;
    /* border: 1px solid red; */
    margin: 0 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const SearchContainer = styled.div`
    margin: 20px 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.7);
    justify-content: center;
    /* border-radius: 10px; */
`;
const Input = styled.input`
    width: 90%;
    padding: 10px;
    height: 35px;
    border: none;
    outline: none;
`;
const Button = styled.button`
    background-color: white;
    /* border: none; */
    outline: none;
    height: 35px;
    border: none;
    `;
const Peoples = styled(List)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100% !important;
    margin: 2px 0px !important;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior:none;
    /* border: 1px solid red; */
    border: 1.4px solid rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    ::-webkit-scrollbar{
      display: none;
    }
`;

const PeopleContainer = () => {
    return (
        <Container>
            <SearchContainer>
                <Input />
                <Button>
                    <SearchOutlined />
                </Button>
            </SearchContainer>
            <Peoples
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}>
                {profiles && profiles.length
                    ? profiles.map((profile) => (
                          <People data={profile} key={profile.userId} />
                      ))
                    : "hello"}
            </Peoples>
        </Container>
    );
};

export default PeopleContainer;
