import classes from './HelpUs.css';
import HelpUsTitle from './HelpUsTitle';

const HelpUs = () => {
  return (
    <section className={classes.HelpUs}>
      <HelpUsTitle />
      <p className={classes.HelpUsParagraph}>
        TEXT HERE ABOUT DONATING
      </p>
    </section>
  );
};

export default HelpUs;