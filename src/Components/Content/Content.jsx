import classes from './Content.module.css';

import { Routes, Route } from "react-router-dom";
import CurrentProject from './CurrentProject/CurrentProject';

function Content(props) {

  let paddingLeft
  if (props.windowWidth >= 750) {
    if (props.isNavOpen) {
      paddingLeft = 305
    } else {
      paddingLeft = 0
    }
  } else {
    paddingLeft = 0
  }
  

  return (
    <div className={classes.content} style={{paddingLeft: paddingLeft}}>
      <Routes>
        <Route path="/project/:id" element={<CurrentProject isNavOpen={props.isNavOpen}/>}/>
        <Route path="/" element={<div></div>}/>
      </Routes>
    </div>
  );
}

export default Content;
