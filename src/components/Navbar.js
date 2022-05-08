import React from 'react';
import "../App.css";
import logo from '../logo.svg';
import { NavbarContainer, LeftNavbarContainer, NavbarInnerContainer,
NavbarLinkContainer, NavbarLink, RightNavbarContainer 
} from "../styles/navbar.style";

function Navbar() {
    return (
        <NavbarContainer>
            <NavbarInnerContainer>
                <LeftNavbarContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/">Home</NavbarLink> |
                        <NavbarLink to="/booking">Booking</NavbarLink> |
                    </NavbarLinkContainer>
                </LeftNavbarContainer>
                <RightNavbarContainer>
                    <img className="App-logo" src={logo} alt="Gawth3r Platform" />
                </RightNavbarContainer>
            </NavbarInnerContainer>
        </NavbarContainer>
    );
}

export default Navbar;