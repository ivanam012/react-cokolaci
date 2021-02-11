import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Čokolači</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/onama" activeStyle>
                        O nama
                    </NavLink>
                    <NavLink to="/kolaci" activeStyle>
                        Kolači
                    </NavLink>
                    <NavLink to="/kontakt" activeStyle>
                        Registruj se
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/gdeSmo">Posetite nas</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
