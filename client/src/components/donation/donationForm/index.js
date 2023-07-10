import GiftFrequency from './giftFrequency/GiftFrequency';
import './DonationForm.css';
import SelectAmount from './selectAmount/SelectAmount';
import Agreement from './agreement';
import NameInput from './nameInput';
import SubmitButton from './submitButton';
import HelpUs from '../helpUs';

const DonationForm = () => {
  return (
    <form className='DonationForm' onSubmit={e => e.preventDefault()}>
      <div className='help-us-style'>
      <HelpUs />
      </div>
      <div>
      <GiftFrequency />
      <SelectAmount />
      <Agreement />
      <NameInput />
      <SubmitButton />
      </div>
    </form>
  );
};

export default DonationForm;