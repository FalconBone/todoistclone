import classes from './AddChapterBlock.module.css';


import ButtonGrayBackg from '../../../Buttons/ButtonGrayBackg/ButtonGrayBackg';
import ButtonRedUnclick from '../../../Buttons/ButtonRedUnclick/ButtonRedUnclick';

import { addChapter, closeAddingChapter } from '../../../../store/slice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function AddChapterBlock(props) {

  const [name, setName] = useState('');
  const [butActive, setButActive] = useState(false);
  const dispatch = useDispatch();

  const addNewChapter = () => {
    
    dispatch(addChapter({
      chapterId: props.id.chapterId,
      projectId: props.id.projectId,
      name: name}));
    dispatch(closeAddingChapter({chapterId: props.id.chapterId,
      projectId: props.id.projectId}))
      setName('');
  }

  const cancelAddingChapter = () => {
    setName('');
    dispatch(closeAddingChapter({chapterId: props.id.chapterId,
      projectId: props.id.projectId}))
  }

  /*const cancelAddingTask = () => dispatch(closeTodoAdding({chapterId: props.id.chapterId,
    projectId: props.id.projectId}))*/

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
            placeholder='Название раздела'
            value={name}
            onChange={onChangeName}>

          </input>
        </div>
        <div className={classes.down}>
          <div className={classes.create_actions}>
              <div className={classes.item + " " + classes.cancel}>
                <ButtonGrayBackg text="Отмена" onClick={cancelAddingChapter}/>
              </div>
              <div className={classes.item}>
                <ButtonRedUnclick text="Добавить раздел" onClick={addNewChapter} isActive={butActive}/>
              </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddChapterBlock;
