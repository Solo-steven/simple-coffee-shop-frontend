import React from "react";
import { Global, css } from "@emotion/react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AppRoot, AppNavbarSpacer, AppBody } from "./style";
import Navbar from "./common/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";

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
                </Switch>
            </AppBody>
        </AppRoot>
    );
};

export default App;
