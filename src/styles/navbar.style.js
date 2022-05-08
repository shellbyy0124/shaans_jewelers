import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavbarContainer = styled.nav`
    width: 100%;
    height: 80px;
    background-color: black;
    display: flex;
    flex-direction: column;
`;

export const LeftNavbarContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5px;
    background: linear-gradient(
        145deg, pink, pink, pink, white
    );
`;


export const RightNavbarContainer = styled.div`
    flex: 10%;
    display: flex;
    justify-content: center;
    background: linear-gradient(
        to left, pink, white, white, white
    )
`;


export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;


export const NavbarLinkContainer = styled.div`
    display: flex;
`;


export const NavbarLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: x-large;
    margin: 10px;
    &:hover {
        color: white;
        text-decoration: underline;
    }
`;


export const NavbarExtendedContainer = styled.div`
`;