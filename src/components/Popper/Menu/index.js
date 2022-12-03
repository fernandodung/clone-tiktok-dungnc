import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../index';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function WrapperMenu({ children, classNames, items = [] }) {
    const renderItems = items.map((item) => <MenuItem data={item} />);
    return (
        <div className={cx('wrapper', { classNames })}>
            <Tippy
                interactive
                delay={[0, 700]}
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('Menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>{renderItems}</PopperWrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default WrapperMenu;
