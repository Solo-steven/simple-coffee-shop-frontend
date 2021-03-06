import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/reducer";
import * as ActionsCreateor from "../../app/action/createor"; 
import { Container, Item } from "../../common/Grid";
import { LoadingReact } from "../../components/Skeleton";
import ProductCard from "./components/ProductCard";
import CategoryItem  from "./components/CategoryItem";
import { HomeRoot, HomeHeader, HomeBody, HomeContent, HomeSidebar, HomeSidebarText } from "./style";

const Home: React.FC = () => {
    
    // React Router Hook
    const { category } = useParams<{category: string}>();

    // Redux Hook
    const products = useSelector((state: RootState) => state.products.filter((product) => product.category === category));
    const dispatch = useDispatch();
    useEffect(() => {
         if(products.length === 0) dispatch(ActionsCreateor.request.fetchProducts(category));
    },[products, category, dispatch]);
    if(products.length ===0) 
        return (
            <HomeRoot>
                <HomeHeader></HomeHeader>
                <HomeBody>
                    <HomeSidebar>
                        <LoadingReact  style={{marginBottom: "25px"}} width={140} height={40} />
                        <LoadingReact width={140} height={80} />
                    </HomeSidebar>
                    <HomeContent>
                        <Container spacing={4} alignItems="flex-start">
                            {
                                [1,2,3,4,5,6].map(index => (
                                    <Item size={4}><LoadingReact key={index} width={350}  height={310}/></Item>
                                ))
                            }
                        </Container>
                    </HomeContent>
                </HomeBody>
            </HomeRoot>
        )
    return ( 
        <HomeRoot>
            <HomeHeader></HomeHeader>
            <HomeBody>
                <HomeSidebar>
                    <HomeSidebarText>{"??????"}</HomeSidebarText>
                    <CategoryItem
                        to="/home/beans"
                        text="?????????"
                        active={category === "beans" }
                    />
                    <CategoryItem
                        to="/home/cakes"
                        text="??????"
                        active={category === "cakes" }
                    />
                    <CategoryItem
                        to="/home/cookies"
                        text="????????????"
                        active={category === "cookies" }
                    />
                </HomeSidebar>
                <HomeContent>
                    <Container spacing={4} alignItems="flex-start">
                        {
                            products.map((product) => {
                                let minPrice = product.price[0], maxPrice= product.price[0];
                                for(const price of product.price){
                                    if(price < minPrice) minPrice = price;
                                    if(price > maxPrice) maxPrice = price;
                                }
                                return(
                                    <Item size={4} key={product.name}>
                                        <ProductCard 
                                            imgUrl={product.imgUrl}
                                            price={`$ ${minPrice} ~ ${maxPrice}`}
                                            name={product.name}
                                        />
                                    </Item>
                                );
                            })
                        }
                    </Container>
                </HomeContent>
            </HomeBody>
        </HomeRoot>
    );
}

export default Home;