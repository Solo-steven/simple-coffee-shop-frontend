import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { RootState } from "../../app/reducer";
import * as ActionCreators from "../../app/action/createor";
import { useSpring } from "react-spring";
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
    const dispatch = useDispatch();
    const carts = useSelector((root: RootState) => root.carts);
    const products = useSelector((root: RootState) => root.products);
    const styles = useSpring({
        transform: carts.active? "translateX(0)": "translateX(200%)",
        config: { duration: 200 }
    })
    if(!carts.active) 
        return null;
    return (
        <DrawerRoot onClick={()=> {  dispatch(ActionCreators.cart.taggleCartDrawer() )}}>
            <DrawerDialog  style={styles} onClick={(e) => {e.stopPropagation()}}>
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
                    <PrimaryButton>{"前往結帳"}</PrimaryButton>
                </DrawerFooter>
            </DrawerDialog>
        </DrawerRoot>
    );
};

export default Drawer;