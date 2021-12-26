import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../app/reducer";
import * as ActionCreators from "../../app/action/createor";
import { CSSTransition } from "react-transition-group";
import { InputButton, PrimaryButton } from "../../common/Button";
import { 
    DrawerRoot, 
    DrawerDialog, 
    DrawerHeader, 
    DrawerBody, 
    DrawerItem,
    DrawerItemBody,
    DrawerItemImg,
    DrawerItemNameAndSpecification,
    DrawerItemName,
    DrawerItemSpecification,
    DrawerItemFooter, 
    DrawerFooter
} from "./style";

const Drawer: React.FC = () => {
    const { push, location } = useHistory();
    const dispatch = useDispatch();
    const carts = useSelector((root: RootState) => root.carts);
    const products = useSelector((root: RootState) => root.products);
    return (
        <CSSTransition in={carts.active} timeout={200} classNames="fade" unmountOnExit>
            <DrawerRoot onClick={()=> {  dispatch(ActionCreators.cart.taggleCartDrawer() )}}>
                <CSSTransition in={carts.active} timeout={200 + 200} classNames="drawer" unmountOnExit>
                    <DrawerDialog onClick={(e) => {e.stopPropagation()}}>
                        <DrawerHeader>{"購物車"}</DrawerHeader>
                        <DrawerBody>
                            {carts.items.map((item) => {
                            const imgUrl = products.filter(product => product.name === item.name)[0].imgUrl;
                            return  (
                                <DrawerItem key={item.name}>
                                    <DrawerItemBody>
                                        <DrawerItemImg src={imgUrl} />
                                        <DrawerItemNameAndSpecification>
                                            <DrawerItemName>{item.name}</DrawerItemName>
                                            <DrawerItemSpecification>{item.specification}</DrawerItemSpecification>
                                        </DrawerItemNameAndSpecification>
                                    </DrawerItemBody>
                                    <DrawerItemFooter>
                                        <InputButton 
                                            theme="dark" 
                                            value={item.number} 
                                            onChange={ (newVal: number) => { 
                                                if(newVal >= 1)
                                                    dispatch(ActionCreators.cart.changeCartItemNumber(item.name, item.specification, newVal)
                                            )}} 
                                        />
                                    </DrawerItemFooter>
                                </DrawerItem>
                            )})}
                        </DrawerBody>
                        <DrawerFooter>
                            <PrimaryButton 
                                onClick={() => { 
                                    if(location.pathname !== "order") {
                                        push("/order") 
                                        dispatch(ActionCreators.cart.taggleCartDrawer())
                                    }
                                }}
                            >
                                {"前往結帳"}
                            </PrimaryButton>
                        </DrawerFooter>
                    </DrawerDialog>
                </CSSTransition>
            </DrawerRoot>
        </CSSTransition>
    );
};

export default Drawer;
