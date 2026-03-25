import './Container.css';
import { cx } from '../../utils/helpers';

const Container = ({ children, className = '' }) => {
  return (
    <div className={cx('ui-container', className)}>
      {children}
    </div>
  );
};

export default Container;
