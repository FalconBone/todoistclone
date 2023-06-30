import ButtonGrayTranspBackg from '../../../Buttons/ButtonGrayTranspBackg/ButtonGrayTranspBackg';

import three_dots_zapoln from '../../../../images/dots_three_zapoln.svg'
import pencil from '../../../../images/editpencil.svg'
import comment from '../../../../images/comments.svg'
import calendar from '../../../../images/calendar.svg'
import six_dots from '../../../../images/sixdots.svg'

import classes from './Task.module.css';
import CircleCheckmark from './CircleCheckmark/CircleCheckmark';
import { useDispatch } from 'react-redux';
import { completeTodo } from '../../../../store/slice';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import * as constClass from '../../../../data/moveTypes';

function Task(props) {

  

  const [{isDragging}, refDrag] = useDrag({
    type: constClass.TASK_MOVE_ITEM,
    item: {
      index: props.index,
      chapterIndex: props.chapterIndex,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    },
  })

  

  const [spec, refDrop] = useDrop({
    accept: constClass.TASK_MOVE_ITEM,
    hover(item, monitor) {

      const dragIndex = item.index;
      const hoverIndex = props.index;
      const hoverBoundingRect = refDrop.current.getBoundingClientRect();
      const hoverBottomY = hoverBoundingRect.bottom;
      const hoverTopY = hoverBoundingRect.top;
      const hoverActualTopY = monitor.getClientOffset().y - hoverTopY;
      
      if (dragIndex < hoverIndex && hoverActualTopY < hoverTopY) {
        return
      }
      if (dragIndex > hoverIndex && hoverActualTopY > hoverBottomY) {
        return
      }
      
      props.moveTaskItem(dragIndex, hoverIndex)
      item.index = hoverIndex;
    }
  })

  const refDragr = useRef(null)
  refDrag(refDragr)

  const refDropr = useRef(null)
  refDrop(refDropr)

  const opacity = isDragging ? 0 : 1


  const dispatch = useDispatch();

  const onClickCompleteTask = () => {
    dispatch(completeTodo({
      projectId: props.id.projectId,
      chapterId: props.id.chapterId,
      taskId: props.task.id
    }))
  }

  return (
    <div ref={refDropr} className={classes.flex_block} style={{opacity: opacity}}>
      <div ref={refDragr} className={classes.position_left_actions}>
        <ButtonGrayTranspBackg srcSVG={six_dots} cursor={'move'} />
      </div>

      <CircleCheckmark
        priory={props.task.priory}
        onClick={onClickCompleteTask}/>

      <div className={classes.information}>
        <div className={classes.name}>
          {props.task.name}
        </div >
        <div className={classes.description}>
          {props.task.description}
        </div>
        <div className={classes.date}>
          {props.task.date}
        </div > 
      </div>

      <div className={classes.actions}>
        <div className={classes.item}>
          <ButtonGrayTranspBackg srcSVG={pencil}/>
        </div>
        <div className={classes.item}>
          <ButtonGrayTranspBackg srcSVG={calendar}/>
        </div>
        <div className={classes.item}>
          <ButtonGrayTranspBackg srcSVG={comment}/>
        </div>
        <div className={classes.item}>
          <ButtonGrayTranspBackg srcSVG={three_dots_zapoln}/>
        </div>
      </div>
    </div>
  );
}

export default Task;
