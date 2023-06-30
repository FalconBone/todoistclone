import Chapter from './Chapter/Chapter';
import classes from './CurrentProject.module.css';
import ProjectHeader from './ProjectHeader/ProjectHeader';
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector';



function CurrentProject(props) {

  const {id} = useParams()

  let project;
  useSelector(state => state.todos).forEach(element => {
    if(element.id == id) {
      project = element
    }
  });


  const chapters = project.chapters.map(chapter => <Chapter chapter={chapter} projectId={project.id}/>)

  return (
    <div className={classes.page}>
      <ProjectHeader name={project.name} isNavOpen={props.isNavOpen}/>
      <div className={classes.chapters}>
        {chapters}
      </div>
    </div>
  );
}

export default CurrentProject;
