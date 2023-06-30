import classes from './AddChapterButton.module.css';

function AddChapterButton(props) {
  return (
    <div className={classes.block} onClick={props.onClick}>
      <div className={classes.border}>

      </div>
      <div className={classes.text}>
        Добавить раздел
      </div>
    </div>
  );
}

export default AddChapterButton;
