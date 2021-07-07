import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav} from "react-bootstrap";
import "./Header.css";

const NavLinkstyle = {
    color : "brown",
    fontWeight : "500"
}

// export const NavLinkhoverstyle = (y) => {
//     y.style.color = "red";
//     y.style.fontWeight="500"
// }

const Header = () => {    
const NavbarBrand = {
        marginLeft:"50px",
        marginTop:"10px",
    }
const NavStyle = {
        marginLeft:"200px",
        marginTop:"10px", 
    }    
    return (
        <div>
            <div className="Container">
            <Navbar id="Navbar" sticky="top" expand="lg" collapseOnSelect>
                    <Navbar.Brand style={NavbarBrand}> 
                        <img src="https://www.oodlestechnologies.com/wp-content/uploads/2019/02/Oodles-Technologies-2.svg"
                        height="26.5px" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                    <Nav style={NavStyle}>
                        <Nav.Link href="#" style={NavLinkstyle}>Services</Nav.Link>
                        <Nav.Link href="#" style={NavLinkstyle}>Tech Stack</Nav.Link>
                        <Nav.Link href="#" style={NavLinkstyle}>Our Work</Nav.Link>
                        <Nav.Link href="#" style={NavLinkstyle}>Our Vision</Nav.Link>
                        <Nav.Link href="#" style={NavLinkstyle}>Team</Nav.Link>
                        <Nav.Link href="#" style={NavLinkstyle}>Blog</Nav.Link>
                        <Nav.Link href="#" style={{color:"orangered"}}>Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
            </Navbar>
            </div>
        </div>
    )
}

export default Header;
