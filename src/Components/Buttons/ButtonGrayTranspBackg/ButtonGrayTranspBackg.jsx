import classes from './ButtonGrayTranspBackg.module.css';
import { ReactSVG } from 'react-svg'

function ButtonGrayTranspBackg(props) {
  return (
    <button
      type='button'
      className={classes.button}
      onClick={props.onClick}
      style={{cursor: `${props.cursor}`}}>
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

export default ButtonGrayTranspBackg;
