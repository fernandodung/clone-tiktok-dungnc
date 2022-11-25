import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountsItem from './AccountItem';

import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { faCircleXmark, faEllipsisVertical, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '../../../Button';
import { PlusIcon, SearchIcon, LanguageIcon, FeedbackIcon, KeyboardIcon, DarkmodeIcon } from '../../../Icons';
import Menu from '../../../Popper/Menu';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 2000);
    }, []);

    const listItem = [
        {
            icon: <LanguageIcon />,
            title: 'English',
        },
        {
            icon: <FeedbackIcon />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <KeyboardIcon />,
            title: 'Keyboard shortcuts',
        },
        {
            icon: <DarkmodeIcon />,
            title: 'Dark mode',
            button: 'mode',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    render={(attr) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attr}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountsItem />
                                <h4 className={cx('span')}> View all results for ....</h4>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button leftIcon={<PlusIcon className="dungnc" />} text>
                        Upload
                    </Button>
                    <Button primary>Log in</Button>
                    <Menu items={listItem}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon className={cx('icon-menu')} icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
