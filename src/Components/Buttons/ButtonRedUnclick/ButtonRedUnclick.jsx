import classes from './ButtonRedUnclick.module.css';


function ButtonRedUnclick(props) {

  let activeStyle;

  if (!props.isActive) {
    activeStyle = classes.disabled
  } else {
    activeStyle = classes.active
  }

  return (
    <button
      type='button'
      className={classes.button + " " + activeStyle}
      onClick={props.isActive ? props.onClick : undefined}>

      {props.text}

    </button>
  );
}

export default ButtonRedUnclick;
