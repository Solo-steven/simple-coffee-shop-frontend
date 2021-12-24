import React from "react";
import { MdManageSearch, MdShoppingCart } from "react-icons/md"
import {
 NavbarRoot, NavbarSpacer, 
 NavbarText, NavbarTextContainer,
 NavbarButton, NavbarButtonContainer
} from "./style";
import Icon from "./icon";


const Navbar: React.FC = () => {
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
                <NavbarButton>
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
