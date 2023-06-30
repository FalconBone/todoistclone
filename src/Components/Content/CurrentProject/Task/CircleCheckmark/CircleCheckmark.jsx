import classes from './CircleCheckmark.module.css';

import { ReactSVG } from 'react-svg';

import checkmark from '../../../../../images/checkmark.svg'

const colors = [
  {color: '#D1453B',
  backColor: '#FAECEB',
  priory: 1},
  {color: '#EB8909',
  backColor: '#FDF3E6',
  priory: 2},
  {color: '#246FE0',
  backColor: '#E9F0FC',
  priory: 3},
  {color: '#gray',
  backColor: 'transparent',
  priory: 4},
]

function CircleCheckmark(props) {

  let color

  colors.forEach(element => {
    if (props.priory === element.priory)
      color = element
  });

  let style = {border: `2px solid ${color.color}`, backgroundColor: `${color.backColor}`}

  return (
    <div className={classes.circle_place} onClick={props.onClick}>
        <div className={classes.circle} style={style}>
          <ReactSVG src={checkmark}/>
        </div>
      </div>
  );
}

export default CircleCheckmark;
