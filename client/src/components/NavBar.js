import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, MAIL_ROUTE} from "../utils/consts";

const NavBar = () => {
    const {user} = useContext(Context)
    return (
       <NavBar bg="dark" variant="dark">
           <NavLink>Клиент сообщений</NavLink>
               <Nav className="mr-auto">
                   <Nav.Link href="#home">Home</Nav.Link>
                   <Nav.Link href="#ff">ff</Nav.Link>
                   <Nav.Link href="#ww">ww</Nav.Link>
               </Nav>
       </NavBar>
    );
};

export default NavBar;