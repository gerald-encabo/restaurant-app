import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GiNoodles } from 'react-icons/gi';

export const Nav = styled.div`

    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
`;

export const NavLink = styled(Link)`

    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: flex;
        justify-content: row;
        top: 50;
        left: 25;
    }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;
    font-size: 1.5rem;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const Bars = styled(GiNoodles)`

     font-size: 2rem;
     transform: transfer(-50%, -15%);

     @media screen and (max-width: 800px) {
         display: none;
     }
`;