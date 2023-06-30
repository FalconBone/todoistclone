import classes from './ButtonGrayBackg.module.css';


function ButtonGrayBackg(props) {
  return (
    <button type='button' className={classes.button} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default ButtonGrayBackg;
