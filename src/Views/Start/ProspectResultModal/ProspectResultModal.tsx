import Modal from "../../../components/Modal/Modal";
import useOfferModal from "../../../hooks/useOfferModal";
import {useState} from "react";
import {Input} from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import {CANCEL, NO, SALARY, SAVE, YES} from "../../../constants";
import {ButtonTypes} from "../../../components/Button/StyledButton";
import {StyledOfferModalFooter, StyledOfferModalContainer, StyledOfferModalContent } from "../../../components/Modal/StyledModal";
import useProspectResultModal from "../../../hooks/useProspectResultModal";

const ProspectResultModal = () => {
  const { close, save, active, prospect } = useProspectResultModal();

  if (!prospect) return null;

  const { firstname, lastname } = prospect;

  const _save = (didAccept: number) => () => save(didAccept);

  const renderContent = () => <StyledOfferModalContainer>
    <h3>Result</h3>

    <StyledOfferModalContent>
      <p>
        Did { firstname } { lastname } accept the offer?
      </p>
    </StyledOfferModalContent>

    <StyledOfferModalFooter>
      <Button label={YES} onClick={_save(1)} buttonType={ButtonTypes.ACCEPT}/>
      <Button label={NO} onClick={_save(0)} buttonType={ButtonTypes.ERROR}/>
    </StyledOfferModalFooter>
  </StyledOfferModalContainer>;

  return <Modal close={close} active={active} content={renderContent()} height={175} />
}

export default ProspectResultModal;
