import styled from "@emotion/styled/macro";

export const NavbarRoot = styled.div`
    width: 100%;
    height: 100px;
    padding: 18px 120px;
    display: flex;
    align-items: center;
    background-color: #292929;
    border-bottom: 1px solid #fafafaa9;
    position: fixed;
    top: 0px;
    z-index: 10;
`;

export const NavbarSpacer = styled.div`
    flex-grow: 1;
`;

export const NavbarTextContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const NavbarText = styled.p`
   &:first-child {
       margin-right: 10px
   }
   & > a {
        text-decoration: none;
        font-size: 20px;
        color: #FAFAFA;
        cursor: pointer;
        user-select: none;
   }
`;

export const NavbarButtonContainer = styled.div`
    display: flex;
    align-items: center;
`;
export const NavbarButton = styled.button`
    border: none;
    background-color: #292929;
    cursor: pointer;
    user-select: none;
    border-radius: 50%;
    padding: 10px;
    &:hover {
       background-color: #232323;
    }
    &:active {
        background-color: #202020; 
        box-shadow: 0 0 1px 1px #2e2e2e;
        transition: all .2s
    }
    & > svg {
        width: 35px;
        height: 35px;
        color: #FAFAFA;
    }
    &:first-child {
       margin-right: 10px
   }
`

