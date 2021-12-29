import styled from "@emotion/styled/macro";

export const ProductRoot = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: auto;
    padding: 80px;
    position: relative;
`;
export const ArrowGoBack = styled.div`
    position: absolute;
    top: 5%;
    left: 0px;
    cursor: pointer;
    border: none;
    cursor: pointer;
    user-select: none;
    border-radius: 50%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
       background-color: #232323;
    }
    &:active {
        background-color: #202020; 
        box-shadow: 0 0 1px 1px #2e2e2e;
        transition: all .2s
    }
    & > svg {
        color: #FFFFFF;
        width: 25px;
        height: 25px;
    }
    &:first-child {
       margin-right: 10px
   }
`;
export const ProductImg = styled.img`
    width: 100%;
    height: auto;
`;
export const ProductBody = styled.div`
    margin-left:  60px;
`;
export const ProductName = styled.div`
    font-size: 20px;
    color: #FFFFFF;
    text-align: right;
    margin-bottom: 16px ;
`;
export const ProductPrice = styled.p`
    color: #FFFFFF;
    text-align: right;
    font-size: 30px;
    margin-bottom: 22px ;
`;
export const ProductSpecification = styled.div`
    margin-bottom: 27px;
`;
export const ProductNumber = styled.div`
    margin-bottom: 45px ;
    padding: 0px 15px;
`;
export const ProductButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    & > *:first-child {
        margin-right: 24px;
    }
`;
export const ProductTextTitle = styled.p`
    color: #FFFFFF;
    text-align: left;
    padding: 10px 5px;
`;
export const ProductTextContent = styled.p`
    color: #FFFFFF;
    font-size: 14px;
    padding: 0px 30px;
    margin-bottom: 10px;
`;
