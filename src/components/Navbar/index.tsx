import React from "react";
import { useDispatch } from "react-redux";
import * as ActionsCreateor from "../../app/action/createor";
import { MdManageSearch, MdShoppingCart } from "react-icons/md"
import {
 NavbarRoot, NavbarSpacer, 
 NavbarText, NavbarTextContainer,
 NavbarButton, NavbarButtonContainer
} from "./style";
import Icon from "./icon";


const Navbar: React.FC = () => {
    const dispatch = useDispatch();
    return (
        <NavbarRoot>
            <NavbarTextContainer>
                <NavbarText>{"商店"}</NavbarText>
                <NavbarText>{"關於"}</NavbarText>
            </NavbarTextContainer>
            <NavbarSpacer/>
            <Icon/>
            <NavbarSpacer/>
            <NavbarButtonContainer>
                <NavbarButton onClick={ ()=> { dispatch(ActionsCreateor.cart.taggleCartDrawer()) } }>
                    <MdShoppingCart/>
                </NavbarButton>
                 <NavbarButton>
                     <MdManageSearch/>
                 </NavbarButton>
            </NavbarButtonContainer>
        </NavbarRoot>
    );  
};

export default Navbar;
