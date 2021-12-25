import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/reducer";
import * as ActionsCreateor from "../../app/action/createor"; 
import { Container, Item } from "../../common/Grid";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import CategoryItem  from "./components/CategoryItem";
import { HomeRoot, HomeHeader, HomeBody, HomeContent, HomeSidebar } from "./style";

const Home: React.FC = () => {
    
    // React Router Hook
    const { category } = useParams<{category: string}>();

    // Redux Hook
    const products = useSelector((state: RootState) => state.products.filter((product) => product.category === category));
    const dispatch = useDispatch();
    useEffect(() => {
        if(products.length === 0) dispatch(ActionsCreateor.request.fetchProducts(category));
    },[products, category, dispatch]);
    
    return ( 
        <HomeRoot>
            <HomeHeader></HomeHeader>
            <HomeBody>
                <HomeSidebar>
                    <SearchBar/>
                    <CategoryItem
                        to="/home/beans"
                        text="咖啡豆"
                        active={category === "beans" }
                    />
                    <CategoryItem
                        to="/home/cakes"
                        text="蛋糕"
                        active={category === "cakes" }
                    />
                    <CategoryItem
                        to="/home/cookies"
                        text="各式餅乾"
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