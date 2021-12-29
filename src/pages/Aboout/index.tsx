import React from "react";
import Icon from "../../common/Icon";
import { AboutUsRoot, AboutUsIcon, AboutUsText } from "./style";

const AboutUs: React.FC = () => {
    return (
        <AboutUsRoot>
            <AboutUsIcon>
                <Icon width={625.8} height={187.5}/>
            </AboutUsIcon>
            <AboutUsText>
                {"Coffee day 是一個測試用的網站，內容是一個簡易的咖啡甜點電商網頁，可以有基本瀏覽商品，下訂單，查詢訂單的功能。"}
            </AboutUsText>
        </AboutUsRoot>
    );
};

export default AboutUs;