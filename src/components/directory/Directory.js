import classes from './Directory.module.scss';
import MenuItem from '../menu/MenuItem';

import menus from '../../data/data';

const Directory = () => {
  const menuItemEl = menus.map(({ id, ...props }) => <MenuItem key={id} {...props} />);

  return <div className={classes.directoryMenu}>{menuItemEl}</div>;
};

export default Directory;
