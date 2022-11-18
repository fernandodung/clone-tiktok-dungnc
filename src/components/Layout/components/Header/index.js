import classNames from "classnames/bind";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import { faCircleXmark, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx('logo')}>
          <img src= {images.logo} alt= 'tiktok'/>
        </div>
        <div className={cx('search')}>
          <input placeholder="Search accounts and videos" spellCheck = {false}/>
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark}/>
          </button>
          <FontAwesomeIcon icon={faSpinner} className={cx('loading')}/>

          <Tippy content = 'dungnc' placement="right">
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
          </Tippy>
        </div>
        <div className={cx('action')}>
        </div>
      </div>
    </header>
  );
}

export default Header;
