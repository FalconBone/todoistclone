import classes from './NavItemsDefault.module.css';
import { ReactSVG } from 'react-svg'
import { NavLink } from 'react-router-dom';


function NavItemsDefault(props) {

  return (
    <div className={classes.block}>
      <NavLink to={props.to}>
        <div className={classes.flex_container}>
          <div className={classes.image}>
            <ReactSVG src={props.srcSVG} />
          </div>
          <div className={classes.text}>
            {props.text}
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default NavItemsDefault;