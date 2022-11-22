import classNames from "classnames/bind";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react";
import {Wrapper as PopperWrapper} from "../../../Popper"
import AccountsItem from "./AccountItem";

import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import { faCircleXmark, faMagnifyingGlass, faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'
import Button from "../../../Button";

const cx = classNames.bind(styles);

function Header() {
  const [searchResult,setSearchResult] = useState([])

  useEffect(() => {
    setTimeout(() =>{
      setSearchResult([1])
    },2000)
  },[])

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx('logo')}>
          <img src= {images.logo} alt= 'tiktok'/>
        </div>
        <Tippy 
          visible={searchResult.length > 0}
          render = {attr => (
            <div className={cx('search-result')} tabIndex="-1" {...attr}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountsItem/>
                <AccountsItem/>
                <AccountsItem/>
                <h4 className={cx('span')}> View all results for ....</h4>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts and videos" spellCheck = {false}/>
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark}/>
            </button>
            <FontAwesomeIcon icon={faSpinner} className={cx('loading')}/>
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
          </div>
        </Tippy>
        <div className={cx('action')}>
          <Button leftIcon = {<FontAwesomeIcon icon={faPlus}/>} text>Upload</Button>
          <Button primary>Log in</Button>
          <Button outline>Follow</Button>
          <Button rounded>Get App</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
