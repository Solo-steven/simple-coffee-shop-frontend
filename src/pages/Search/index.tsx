import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as ActionsCreateor from "../../app/action/createor";
import { useHistory } from "react-router-dom";
import { SearchRoot, SearchBlock, SearchText, SearchBarRoot, SearchButton, SearchInput } from "./style";
import { MdSearch } from "react-icons/md"

const Search: React.FC = () => {
    const dispatch = useDispatch();
    const [orderId, setOrderId] = useState("");
    const { push } = useHistory();
    return (
        <SearchRoot>
            <SearchBlock>
                <SearchText>{"查詢訂單"}</SearchText>
                <SearchBarRoot>
                    <SearchInput 
                        value={orderId} 
                        onChange={(e) => setOrderId(e.target.value) }
                    />
                    <SearchButton 
                        onClick={() => { 
                            if(orderId === "") {
                                dispatch(ActionsCreateor.modal.taggleModal(true, "error", "錯誤", "訂單的編號不可以為空"))
                                return;
                            }
                            push(`/order/${orderId}`) 
                        }}
                    >
                        <MdSearch />
                    </SearchButton>
                </SearchBarRoot>
            </SearchBlock>
        </SearchRoot>
    );
};

export default Search;