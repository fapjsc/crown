import classes from './HomeScreen.module.scss';
import Directory from '../components/directory/Directory';
const HomeScreen = () => {
  return (
    <div className={classes.homepage}>
      <Directory />
    </div>
  );
};

export default HomeScreen;
