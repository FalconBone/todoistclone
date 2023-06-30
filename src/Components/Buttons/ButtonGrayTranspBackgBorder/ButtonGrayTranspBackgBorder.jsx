import classes from './ButtonGrayTranspBackgBorder.module.css';
import { ReactSVG } from 'react-svg'

function ButtonGrayTranspBackgBorder(props) {
  return (
    <button type='button' className={classes.button}>
      <div className={classes.flex_container}>
          <div className={classes.image}>
            <ReactSVG src={props.srcSVG} />
          </div>
          {props.text &&
          <div className={classes.text}>
            {props.text}
          </div>}
        </div>
    </button>
  );
}

export default ButtonGrayTranspBackgBorder;
