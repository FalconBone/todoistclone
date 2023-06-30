import ButtonGrayTranspBackg from '../../../Buttons/ButtonGrayTranspBackg/ButtonGrayTranspBackg';

import classes from './ProjectHeader.module.css';

import three_dots from '../../../../images/three_dots_polie.svg'
import add_friend from '../../../../images/addfriend.svg'
import sliders from '../../../../images/sliders.svg'
import comments from '../../../../images/comments.svg'
import { useEffect } from 'react';
import { useResize } from '../../../../useResize';
import { useStyle } from '../../../../useStyle';

function ProjectHeader(props) {

  const {width} = useResize()

  const [w, setW] = useStyle('width')

  useEffect(() => {
    if (width < 1200) {
      if (props.isNavOpen) {
        setW(width - 385)
      } else {
        setW(width - 80)
      }
      
    } else {
      setW('inherit')
    }
  })


  return (
    <div className={classes.flex_block + " " + classes.small} style={{width: w}}>
      <div className={classes.name}>
        {props.name}
      </div>
      <div className={classes.actions}>
        <div className={classes.item}>
          <ButtonGrayTranspBackg srcSVG={add_friend} text={width > 1200 ? 'Поделиться' : undefined} />
        </div>
        <div className={classes.item}>
          <ButtonGrayTranspBackg srcSVG={sliders} text={width > 1200 ? 'Отображение' : undefined} />
        </div>
        <div className={classes.item}>
          <ButtonGrayTranspBackg srcSVG={comments} text={width > 1200 ? 'Комментарии' : undefined} />
        </div>
        <div className={classes.item}>
          <ButtonGrayTranspBackg srcSVG={three_dots} />
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
