import React from 'react';
import { Nav, NavLink, NavIcon } from './NavbarElements';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { GiNoodles } from 'react-icons/gi';

const Navbar = ({toggle}) => {
    return (
        <div>
            <Nav>
                <NavLink to="/">Ramen &nbsp; <BsFillHouseDoorFill /> &nbsp; House</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu&nbsp;<GiNoodles /></p>
                </NavIcon>
            </Nav>
        </div>
    );
}

export default Navbar
