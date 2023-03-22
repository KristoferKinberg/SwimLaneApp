import useOfferModal from "../../../hooks/useOfferModal";
import {useState} from "react";
import {Input} from "../../../components/Input/Input";
import {CANCEL, REMOVE, SALARY, SAVE} from "../../../constants";
import Button from "../../../components/Button/Button";
import {ButtonTypes} from "../../../components/Button/StyledButton";
import Modal from "../../../components/Modal/Modal";
import {StyledOfferModalFooter, StyledOfferModalContainer, StyledOfferModalContent } from "../../../components/Modal/StyledModal";
import useRemoveModal from "../../../hooks/removeModal";

const RemoveModal = () => {
  const { close, remove, active, prospect } = useRemoveModal();

  if (!prospect) return null;

  const { firstname, lastname } = prospect;

  const renderContent = () => <StyledOfferModalContainer>
    <h3>Remove</h3>

    <StyledOfferModalContent>
      <span>
        Are you sure you want to remove { firstname } { lastname }:
      </span>
    </StyledOfferModalContent>

    <StyledOfferModalFooter>
      <Button label={REMOVE} onClick={remove} buttonType={ButtonTypes.ACCEPT}/>
      <Button label={CANCEL} onClick={close} buttonType={ButtonTypes.ERROR}/>
    </StyledOfferModalFooter>
  </StyledOfferModalContainer>;

  return <Modal close={close} active={active} content={renderContent()} height={175} />;
}

export default RemoveModal;
