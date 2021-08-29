import { useHistory } from 'react-router-dom';

import classes from './MenuItem.module.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();

  const onClickHandler = () => {
    history.push(`/${linkUrl}`);
  };

  const menuItemClass =
    size === 'large' ? `${classes.menuItem} ${classes.large}` : classes.menuItem;

  return (
    <div className={menuItemClass} onClick={onClickHandler}>
      <div className={classes.backImg} style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className={classes.content}>
        <h1 className={classes.title}>{title.toUpperCase()}</h1>
        <span className={classes.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
