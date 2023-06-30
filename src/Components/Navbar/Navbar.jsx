import classes from './Navbar.module.css';

import NavItemsDefault from './NavItems/NavItemsDefault/NavItemsDefault';
import svgVhodyashie from "../../images/vhodyshie.svg"
import NavItemsProjects from './NavItems/NavItemsProjects/NavItemsProjects';

import { useSelector } from 'react-redux/es/exports';

function Navbar(props) {

  const projects = useSelector(state => state.todos).map(project =>
    <NavItemsProjects to={`/project/${project.id}`} text={project.name} key={project.id}/>)

  let marginLeft, width
  if (!props.isOpen) {
    if (props.windowWidth < 750) {
      marginLeft = '-100vw'
    } else {
      marginLeft = '-305px'
    }
  } else {
    marginLeft = undefined
  }

  if (props.windowWidth < 750) {
    width = '100vw'
  } else {
    width = 305
  }
  

  return (
    <div className={classes.navbar} style={{marginLeft: marginLeft, width: width}}>
      <div className={classes.defaultItems + " " + classes.items}>
        <NavItemsDefault srcSVG={svgVhodyashie} to={"/"} text={"Входящие"}/>
        <NavItemsDefault srcSVG={svgVhodyashie} to={"/"} text={"Сегодня"}/>
        <NavItemsDefault srcSVG={svgVhodyashie} to={"/"} text={"Предстоящие"}/>
        <NavItemsDefault srcSVG={svgVhodyashie} to={"/"} text={"Фильтры и метки"}/>
      </div>
      <div className={classes.projectsItems + " " + classes.items}>
        {projects}
      </div>
    </div>
  );
}

export default Navbar;