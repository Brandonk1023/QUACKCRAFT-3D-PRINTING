import GiftFrequency from './giftFrequency/GiftFrequency';
import classes from './DonationForm.css';
import SelectAmount from './SelectAmount/SelectAmount';
import Agreement from './agreement';
import NameInput from './nameInput';
import SubmitButton from './submitButton';

const DonationForm = () => {
  return (
    <form className={classes.DonationForm} onSubmit={e => e.preventDefault()}>
      <GiftFrequency />
      <SelectAmount />
      <Agreement />
      <NameInput />
      <SubmitButton />
    </form>
  );
};

export default DonationForm;