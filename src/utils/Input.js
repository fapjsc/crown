import classes from './Input.module.scss';
const Input = ({ onChangeHandler, label, ...otherProps }) => {
  return (
    <div className={classes.group}>
      <input className={classes.formInput} onChange={onChangeHandler} {...otherProps} />
      {label && (
        <label className={`${otherProps.value.length && classes.shrink} ${classes.formInputLabel}`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
