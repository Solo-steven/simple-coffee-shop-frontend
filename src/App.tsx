import React from "react";
import { Global, css } from "@emotion/react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AppRoot, AppNavbarSpacer, AppBody } from "./style";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Drawer from "./components/Drawer";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Order from "./pages/Order";
import AboutUs from "./pages/Aboout";
import "./asset/animation.css";

const App: React.FC = () => {
    return (
        <AppRoot>
            <Global styles={css`
                * {
                    font-family: PingFang SC;
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
            `}/>
            <Navbar/>
            <AppNavbarSpacer/>
            <AppBody>
                <Switch>
                    <Redirect
                        exact path="/"
                        to="/home/beans"
                    />
                    <Route exact path="/home/:category">
                        <Home />
                    </Route>
                    <Route exact path="/home/:category/:name">
                        <Product />
                    </Route>
                    <Route exact path="/order">
                        <Order.Form />
                    </Route>
                    <Route exact path="/order/:id">
                        <Order.Search/>
                    </Route>
                    <Route exact path="/about">
                        <AboutUs/>
                    </Route>
                </Switch>
                <Modal/>
                <Drawer />
                <Footer />
            </AppBody>
        </AppRoot>
    );
};

export default App;
