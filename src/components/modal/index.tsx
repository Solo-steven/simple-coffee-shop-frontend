import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/reducer"; 
import * as ActionsCreateor from "../../app/action/createor";
import { MdError, MdOutlineCheckCircle } from "react-icons/md";
import { PrimaryButton } from "../../common/Button";
import { ModalRoot, ModalDialog, ModalTitle, ModalTitleIcon, ModalBody, ModalFooter } from "./style";


const  Modal: React.FC = () => {
    const modalState = useSelector((root: RootState) => root.modal);
    const dispatch = useDispatch();
    if(modalState.active === false)
        return null;
    return (
        <ModalRoot>
            <ModalDialog>
                <ModalTitle>
                    <ModalTitleIcon color={modalState.type === "error" ? "#dd2020": "#028cfd"}>
                        {modalState.type === "error" ? <MdError/> : <MdOutlineCheckCircle />}
                    </ModalTitleIcon>
                    {modalState.title}
                </ModalTitle>
                <ModalBody>
                    {modalState.body}
                </ModalBody>
                <ModalFooter>
                    <PrimaryButton size="small" outline
                        onClick={()=> {  dispatch( ActionsCreateor.modal.taggleModal(false) ) }}
                    >
                        關閉
                    </PrimaryButton>
                </ModalFooter>
            </ModalDialog>
        </ModalRoot>
    );
}

export default Modal;
