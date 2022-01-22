import React from "react";
import styled from "styled-components";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import ChatIcon from "@mui/icons-material/Chat";
import LogoutIcon from "@mui/icons-material/Logout";
const Container = styled.div`
    width: 5%;
    height: 100vh;
    background-color: #303c6c;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (max-width:576px) {
        display: none;
    }
    
`;
const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`;
const ManuItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* height: 20%; */
`;

const LogoContainer = styled.div`
    /* background-color: rgba(255, 255, 255, 0.5); */
    margin: 30px 0;
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Logo = styled(BrandingWatermarkIcon)`
    color: white;
    margin: 25px 0;
    transform: scale(1.2);
    `;
const HomeContainer = styled.div`
    /* background-color: rgba(255, 255, 255, 0.5); */
    margin: 15px 0;
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    `;
const Home = styled(HomeIcon)`
    color: white;
    margin: 15px 0;
    transform: scale(1.1);
    `;
const ChatContainer = styled.div`
    /* background-color: rgba(255, 255, 255, 0.5); */
    margin: 15px 0;
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    `;
const Chat = styled(ChatIcon)`
    color: white;
    margin: 15px 0;
    transform: scale(1.1);
    `;
const SettingsContainer = styled.div`
    /* background-color: rgba(255, 255, 255, 0.5); */
    margin: 15px 0;
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    `;
const Settings = styled(SettingsIcon)`
    color: white;
    `;
const LogoutContainer = styled.div`
    /* background-color: rgba(255, 255, 255, 0.5); */
    margin: 15px 0;
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(1.2);
    `;
const Logout = styled(LogoutIcon)`
    color: white;
`;

const Sidebar = () => {
    return (
        <Container>
            <ItemsContainer>
                <LogoContainer>
                    <Logo />
                </LogoContainer>

                <ManuItemsContainer>
                    <HomeContainer>
                        <Home />
                    </HomeContainer>
                    <ChatContainer>
                        <Chat />
                    </ChatContainer>
                    <SettingsContainer>
                        <Settings />
                    </SettingsContainer>
                </ManuItemsContainer>
            </ItemsContainer>
            <LogoutContainer>
                <Logout />
            </LogoutContainer>
        </Container>
    );
};

export default Sidebar;
