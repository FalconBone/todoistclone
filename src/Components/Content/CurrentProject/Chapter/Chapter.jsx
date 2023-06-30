import { useDispatch } from 'react-redux';
import AddChapterButton from '../AddChapterButton/AddChapterButton';
import AddTaskBlock from '../AddTaskBlock/AddTaskBlock';
import AddTaskButton from '../AddTaskButton/AddTaskButton';
import ChapterHeader from '../ChapterHeader/ChapterHeader';
import Task from '../Task/Task';
import classes from './Chapter.module.css';
import { showChapterAdding, showTodoAdding } from '../../../../store/slice';
import AddChapterBlock from '../AddChapterBlock/AddChapterBlock';
import { useCallback } from 'react';

function Chapter(props) {


  const moveTaskInChapters = useCallback(
    
  )










  const tasks = props.chapter.tasks.map((task,index) =>
    <Task 
      task={task} 
      key={task.id} 
      id={{chapterId: props.chapter.id, projectId: props.projectId}}
      index={index}/>)

  const dispatch = useDispatch()
  
  const showAddTaskBlock = () => dispatch(showTodoAdding({chapterId: props.chapter.id, projectId: props.projectId}))
  const showAddChapterBlock = () => dispatch(showChapterAdding({chapterId: props.chapter.id, projectId: props.projectId}))

  let taskHiddenStyle;
  if (props.chapter.isHiddenAddingTask) {
    taskHiddenStyle = classes.isDisplayNone;
  } 

  let chapterHiddenStyle;
  if (props.chapter.isHiddenAddingChapter) {
    chapterHiddenStyle = classes.isVisibilityHidden
  }

  let tasksHiddenStyle;
  if (props.chapter.isClosed) {
    tasksHiddenStyle = classes.isDisplayNone
  }

  return (
    <div className={classes.chapter}>
      {props.chapter.name && <ChapterHeader name={props.chapter.name} parameters={{isClosed: props.chapter.isClosed,
                isAddingTask: props.chapter.isAddingTask,
                isHiddenAddingTask: props.chapter.isHiddenAddingTask,
                isAddingChapter: props.chapter.isAddingChapter,
                isHiddenAddingChapter: props.chapter.isHiddenAddingChapter}} id={{chapterId: props.chapter.id, projectId: props.projectId}}/>}
      <div className={classes.tasks + " " + tasksHiddenStyle}>
       {tasks}
      </div>
      <div className={classes.addTask + " " + taskHiddenStyle}>
        {props.chapter.isAddingTask ?
          <AddTaskBlock id={{chapterId: props.chapter.id, projectId: props.projectId}}/> : <AddTaskButton onClick={showAddTaskBlock}/>}
      </div>
      <div className={classes.addChapter + " " + chapterHiddenStyle}>
        {props.chapter.isAddingChapter ?
          <AddChapterBlock id={{chapterId: props.chapter.id, projectId: props.projectId}}/> : <AddChapterButton onClick={showAddChapterBlock}/>}
        
        
      </div>
    </div>
  );
}

export default Chapter;
