import styled from "@emotion/styled/macro";

export const ProductRoot = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: auto;
    padding: 80px;
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
