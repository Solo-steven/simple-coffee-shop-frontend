import React from "react";
import { FooterRoot, FooterBody, FooterText, FooterIcons  } from "./style";
import { MdFacebook } from "react-icons/md"
import { GrInstagram } from "react-icons/gr"

const Footer: React.FC = () => {
    return (
        <FooterRoot>
            <FooterBody>
                <FooterText>{"Follow Us"}</FooterText>
                <FooterIcons>
                    <MdFacebook/>
                    <GrInstagram/>
                </FooterIcons>
            </FooterBody>
        </FooterRoot>
    )
}

export default Footer;