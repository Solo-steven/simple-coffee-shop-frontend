import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as ActionsCreateor from "../../app/action/createor";
import { MdManageSearch, MdShoppingCart } from "react-icons/md"
import {
 NavbarRoot, NavbarSpacer, 
 NavbarText, NavbarTextContainer,
 NavbarButton, NavbarButtonContainer
} from "./style";
import Icon from "../../common/Icon";


const Navbar: React.FC = () => {
    const dispatch = useDispatch();
    return (
        <NavbarRoot>
            <NavbarTextContainer>
                <NavbarText>
                    <Link to="/">
                        {"商店"}
                    </Link>
                </NavbarText>
                <NavbarText>
                    <Link to="/about">
                        {"關於"}
                    </Link>
                </NavbarText>
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
