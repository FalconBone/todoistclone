import ButtonGrayTranspBackgBorder from '../../../Buttons/ButtonGrayTranspBackgBorder/ButtonGrayTranspBackgBorder';
import classes from './AddTaskBlock.module.css';

import flag from '../../../../images/flag.svg'
import calendar from '../../../../images/calendar.svg'
import dots from '../../../../images/dots_three_zapoln.svg'
import ButtonGrayBackg from '../../../Buttons/ButtonGrayBackg/ButtonGrayBackg';
import ButtonRedUnclick from '../../../Buttons/ButtonRedUnclick/ButtonRedUnclick';

import { addTodo, closeTodoAdding } from '../../../../store/slice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function AddTaskBlock(props) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('')
  const [butActive, setButActive] = useState(false);
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({
      chapterId: props.id.chapterId,
      projectId: props.id.projectId,
      name: name,
      description:description}));
    dispatch(closeTodoAdding({chapterId: props.id.chapterId,
      projectId: props.id.projectId}))
    setName('');
    setDescription('');
  }

  const cancelAddingTask = () => dispatch(closeTodoAdding({chapterId: props.id.chapterId,
    projectId: props.id.projectId}))

  const onChangeName = (event) => {
    if(event.target.value !== '') {
      setButActive(true)
    } else {
      setButActive(false)
    }
    setName(event.target.value)
  }

  return (
    <div className={classes.block}>
      <form className={classes.form}>
        <div className={classes.up}>
          <input
            className={classes.input_name}
            placeholder='Название задачи'
            value={name}
            onChange={onChangeName}>

          </input>
          <textarea
            className={classes.input_description}
            placeholder='Описание'
            wrap='hard'
            value={description}
            onChange={event => setDescription(event.target.value)}>  

          </textarea>
          <div className={classes.parameters_actions}>
            <div className={classes.item}>
              <ButtonGrayTranspBackgBorder text={'Срок выполнения'} srcSVG={calendar} />
            </div>
            <div className={classes.item}>
              <ButtonGrayTranspBackgBorder text={'Приоритет'} srcSVG={flag} />
            </div>
            <div className={classes.item}>
              <ButtonGrayTranspBackgBorder srcSVG={dots} />
            </div>
          </div>
        </div>
        <div className={classes.down}>
          <div className={classes.create_actions}>
            <div className={classes.right}>
              <div className={classes.item}>
                <ButtonGrayBackg text="Отмена" onClick={cancelAddingTask}/>
              </div>
              <div className={classes.item}>
                <ButtonRedUnclick text="Добавить задачу" onClick={addTask} isActive={butActive}/>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTaskBlock;
