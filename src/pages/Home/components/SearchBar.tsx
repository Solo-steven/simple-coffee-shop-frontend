import React from "react";
import styled from "@emotion/styled/macro";
import { MdSearch } from "react-icons/md"

const SearchBarRoot = styled.div`
    border-bottom: 1px solid #FFFFFF;
    display: flex;
`;
const SearchInput = styled.input`
    outline: none;
    border: none;
    background-color: #292929;
    color: #FFFFFF;
    padding: 5px 10px;
    width: 100px;
`;
const SearchButton = styled.button`
    background-color: #FFFFFF00;
    border: none;
    cursor: pointer;
    & > svg {
        color: #FFFFFF;
        width: 20px;
        height: 20px;
    }
`;


const SearchBar: React.FC = () => {
    return (
        <SearchBarRoot>
            <SearchInput />
            <SearchButton >
                <MdSearch />
            </SearchButton>
        </SearchBarRoot>
    );
};

export default SearchBar;
