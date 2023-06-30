import ButtonGrayTranspBackg from '../../../Buttons/ButtonGrayTranspBackg/ButtonGrayTranspBackg';

import three_dots from '../../../../images/three_dots_polie.svg'
import arrow from '../../../../images/arrow_down.svg'
import six_dots from '../../../../images/sixdots.svg'

import classes from './ChapterHeader.module.css';
import { useDispatch } from 'react-redux';
import { closeChapter, openChapter } from '../../../../store/slice';

function ChapterHeader(props) {

  const dispatch = useDispatch()
  const onClickArrow = () => {
    if (!props.parameters.isClosed) {
      dispatch(closeChapter({ chapterId: props.id.chapterId, projectId: props.id.projectId }))
    } else {
      dispatch(openChapter({ chapterId: props.id.chapterId, projectId: props.id.projectId }))
    }

  }

  return (
    <div className={classes.flex_block}>
      <div className={classes.position_left_actions}>

        <div className={classes.move_button}>
          <ButtonGrayTranspBackg srcSVG={six_dots} cursor={'move'}/>
        </div>
        <ButtonGrayTranspBackg srcSVG={arrow} onClick={onClickArrow} parameters={{ isClosed: props.parameters.isClosed }} cursor={'default'} />
      
      </div>
      <div className={classes.name}>
        {props.name}
      </div>
      <div className={classes.number}>
        {props.number}
      </div>
      <div className={classes.actions}>
        <div className={classes.item}>
          <ButtonGrayTranspBackg srcSVG={three_dots} />
        </div>
      </div>
    </div>
  );
}

export default ChapterHeader;
