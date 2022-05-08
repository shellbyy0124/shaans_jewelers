import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
`;
export const WelcomeContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    padding: 16px;
    width: 90%;
`;
export const WelcomeInnerLeftContainer = styled.div`
    width: 90%;
    border-radius: 20px;
    padding: 2%;
    margin-left: 2%;
    margin-right: auto;
    background: linear-gradient(
        145deg,
        darkgray, pink, darkgray
    );
`;
export const WelcomeInnerMiddleContainer = styled.div`
    width: 90%;
    border-radius: 20px;
    padding: 2%;
    margin-left: 2%;
    margin-right: auto;
    background: linear-gradient(
        145deg,
        darkgray, pink, darkgray
    );
`;
export const WelcomeInnerRightContainer = styled.div`
    width: 90%;
    border-radius: 20px;
    padding: 2%;
    margin-left: 2%;
    margin-right: auto;
    background: linear-gradient(
        145deg,
        darkgray, pink, darkgray
    );
`;
export const Title = styled.h1`
    text-align: center;
    color: black;
    width: 40%;
    margin-right: auto;
    margin-left: auto;
`;
export const Title3 = styled.h3`
    color: black;
    width: 50%;
    margin-right: auto;
    margin-left: auto;
`;
export const Description = styled.p`
    text-align: center;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
`;
export const Footer = styled.footer`
    border-top: 1px solid black;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const FooterTitle3 = styled.h3`
    text-align: center;
`;