import classes from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg';

const Header = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logoContainer} to="/">
        <Logo className={classes.logo} />
      </Link>

      <div className={classes.options}>
        <Link className={classes.option} to="/shop">
          SHOP
        </Link>

        <Link className={classes.option} to="/contact">
          CONTACT
        </Link>
      </div>
    </header>
  );
};

export default Header;
