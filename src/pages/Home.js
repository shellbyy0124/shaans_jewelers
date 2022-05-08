import React from 'react';
import "../App.css";
import {
    Title, MainContainer, WelcomeContainer, WelcomeInnerLeftContainer, WelcomeInnerMiddleContainer,
    WelcomeInnerRightContainer, Description, Footer, FooterTitle3
} from "../styles/home.style";

function Home() {
    return (
        <MainContainer>
            <Title>
                Shaans Jewelers
            </Title>
            <Description>
                From watches and bracelets to various styles of hip-hop accessories, we're the jewelery store you need!
            </Description>
            <WelcomeContainer>
                <WelcomeInnerLeftContainer>
                    Current Deals
                    <ul>
                        <li>Select Gold, Silver, Diamonds 50% OFF</li>
                        <li>No Min. Down Payment on Lay-Away Items</li>
                    </ul>
                </WelcomeInnerLeftContainer>
                <WelcomeInnerMiddleContainer>
                    Featured Items
                    <ul>
                        <li>Insert First Item</li>
                        <li>Insert Second Item</li>
                    </ul>
                </WelcomeInnerMiddleContainer>
                <WelcomeInnerRightContainer>
                    Customer Reviews
                    <ul>
                        <li>Insert First Review</li>
                        <li>Insert Second Review</li>
                    </ul>
                </WelcomeInnerRightContainer>
            </WelcomeContainer>
            <Footer>
                <FooterTitle3>
                    Located At:<br />900 Commons Dr. Dothan, AL 36303
                </FooterTitle3>
                <FooterTitle3>
                    Call Us At:<br />(334) 712-0097
                </FooterTitle3>
                <FooterTitle3>
                    Email Us At:<br />~insert_email~
                </FooterTitle3>
            </Footer>
        </MainContainer>
    );
}

export default Home;