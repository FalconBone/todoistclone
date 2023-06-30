import Content from '../Content/Content';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

import {BrowserRouter} from "react-router-dom";

import classes from './AppWrapper.module.css';
import { useState } from 'react';
import { useResize } from '../../useResize';


function AppWrapper() {

  const {width} = useResize()
  const [isNavOpen, setNavOpen] = useState(true);

  const setNavOpenFunc = () => {
    console.log(isNavOpen)
    setNavOpen(!isNavOpen)
  }


  return (
    <BrowserRouter>
      <div className={classes.appwrapper}>
        <Header setNavOpen={setNavOpenFunc}/>
        <div className={classes.contentandnav}>
          <Navbar isOpen={isNavOpen} windowWidth={width}/>
          <Content isNavOpen={isNavOpen} windowWidth={width}/>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default AppWrapper;
