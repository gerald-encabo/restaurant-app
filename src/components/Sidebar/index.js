import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from './SidebarElement';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon />
           </Icon>
           <SidebarMenu>
               <SidebarLink to="special">Special</SidebarLink>
               <SidebarLink to="ramen">Ramen</SidebarLink>
               <SidebarLink to="sides">Sides</SidebarLink>
               <SidebarLink to="dessert">Desserts</SidebarLink>
           </SidebarMenu>
           <SidebarBtnWrap>
               <SidebarRoute to="/">Order Now</SidebarRoute>
           </SidebarBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
