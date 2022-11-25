import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../index';

const cx = classNames.bind(styles);

function WrapperMenu({ children, classNames }) {
    return (
        <div className={cx('wrapper', { classNames })}>
            <Tippy
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('Menu-item')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            <h2>dungnc</h2>
                            <h2>dungnc</h2>
                        </PopperWrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default WrapperMenu;
