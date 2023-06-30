import classes from './NavItemsProjects.module.css';
import { ReactSVG } from 'react-svg'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


function NavItemsProjects(props) {

  return (

    <div className={classes.block}>
      <NavLink to={props.to}>
        <div className={classes.flex_container}>
          <div className={classes.point_place}>
            <div className={classes.point}></div>
          </div>
          <div className={classes.text}>
            {props.text}
          </div>
          <div className={classes.number}>
            {props.number}
          </div>
          <div className={classes.action}>
          </div>
          
        </div>
      </NavLink>
    </div>   
  );
}

export default NavItemsProjects;