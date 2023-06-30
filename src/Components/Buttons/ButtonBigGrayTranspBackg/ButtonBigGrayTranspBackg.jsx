import classes from './ButtonBigGrayTranspBackg.module.css';
import { ReactSVG } from 'react-svg'

function ButtonBigGrayTranspBackg(props) {
  return (
    <button type='button' className={classes.button} onClick={props.onClick}>
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

export default ButtonBigGrayTranspBackg;
