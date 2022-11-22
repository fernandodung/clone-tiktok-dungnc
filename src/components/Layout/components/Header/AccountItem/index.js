import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountsItem() {
    return (
        <div className={cx('Wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/89efe2e4ece3a2dc58c944e550f9b46e~c5_100x100.jpeg?x-expires=1669118400&x-signature=JxfuaHypJ2o4Sd%2B6tHD%2Fnb%2BWgbY%3D"
                alt="dungnc"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Cong Dung</span>
                    <FontAwesomeIcon className={cx("check")} icon = {faCheckCircle}/>
                </h4>
                <span className={cx('username')}>nguyencongdung</span>
            </div>
        </div> 
    );
}

export default AccountsItem;