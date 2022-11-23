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
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e3cefb6c1314941ae90c571f4f2954da~c5_100x100.jpeg?x-expires=1669341600&x-signature=shne8%2B3Y0%2B%2FUJkE0pBxfDUWZ%2BtQ%3D"
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