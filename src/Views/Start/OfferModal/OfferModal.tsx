import Modal from "../../../components/Modal/Modal";
import useOfferModal from "../../../hooks/useOfferModal";
import {useState} from "react";
import {Input} from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import {CANCEL, SALARY, SAVE} from "../../../constants";
import {StyledOfferModalButtons, StyledOfferModalContainer, StyledOfferModalContent} from "./StyledOfferModal";
import {ButtonTypes} from "../../../components/Button/StyledButton";

const OfferModal = () => {
  const { close, save, active, prospect } = useOfferModal();
  const [offer, setOffer] = useState('');

  if (!prospect) return null;

  const { firstname, lastname } = prospect;

  const _save = () => {
    offer.length && save(parseInt(offer, 10));
    setOffer('');
  }

  const renderContent = () => <StyledOfferModalContainer>
    <h3>Offer</h3>

    <StyledOfferModalContent>
      <p>
        Please provide offer made for { firstname } { lastname }:
      </p>
      <Input value={offer} onChange={setOffer} label={SALARY.toUpperCase()}/>
    </StyledOfferModalContent>

    <StyledOfferModalButtons>
      <Button label={SAVE} onClick={_save} buttonType={ButtonTypes.ACCEPT}/>
      <Button label={CANCEL} onClick={close} buttonType={ButtonTypes.ERROR}/>
    </StyledOfferModalButtons>
  </StyledOfferModalContainer>;

  return <Modal close={close} active={active} content={renderContent()} height={250} />
}

export default OfferModal;
