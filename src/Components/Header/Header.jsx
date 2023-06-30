
import classes from './Header.module.css';

import burger from '../../images/hamburgermenu.svg'
import ButtonBigGrayTranspBackg from '../Buttons/ButtonBigGrayTranspBackg/ButtonBigGrayTranspBackg';

function Header(props) {

  return (
    <header className={classes.header}>
      <div className={classes.right_actions}>
        <ButtonBigGrayTranspBackg srcSVG={burger} onClick={props.setNavOpen}/>
      </div>
    </header>
  );
}


export default Header;
