import classes from './AddTaskButton.module.css';
import { ReactSVG } from 'react-svg';

import plus from '../../../../images/plus.svg'

function AddTaskButton(props) {
  return (
    <button type='button' className={classes.button} onClick={props.onClick}>
      <div className={classes.flex_container}>
          <div className={classes.image}>
            <ReactSVG src={plus} />
          </div>
          <div className={classes.text}>
            Добавить задачу
          </div>
        </div>
    </button>
  );
}

export default AddTaskButton;
