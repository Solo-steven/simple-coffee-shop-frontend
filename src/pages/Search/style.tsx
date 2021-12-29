import styled from "@emotion/styled/macro";

export const SearchRoot = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const SearchBlock = styled.div`
    margin: auto;
    max-width: 640px;
    width: 100%;
    background: #ffffff;
    color: #292929;
    border-radius: 15px;
    padding: 3%;
`;
export const  SearchText = styled.div`
    text-align: left;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 25px;
`;
export const SearchBarRoot = styled.div`
    border-bottom: 1px solid #292929;
    display: flex;
`;
export  const SearchInput = styled.input`
    outline: none;
    border: none;
    background-color: #ffffff;
    color: #292929;
    padding: 5px 10px;
    width: 100%;
`;
export const SearchButton = styled.button`
    background-color: #FFFFFF00;
    border: none;
    cursor: pointer;
    & > svg {
        color: #292929;
        width: 20px;
        height: 20px;
    }
`;
