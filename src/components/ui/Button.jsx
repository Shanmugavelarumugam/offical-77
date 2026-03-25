import './Button.css';
import { cx } from '../../utils/helpers';

const Button = ({
  children,
  variant = 'primary', // primary, secondary, outline, ghost
  size = 'md', // sm, md, lg
  className = '',
  icon: Icon,
  glow = false,
  ...props
}) => {
  return (
    <button
      className={cx(
        'ui-button',
        `variant-${variant}`,
        `size-${size}`,
        glow ? 'with-glow' : '',
        className
      )}
      {...props}
    >
      {Icon && <Icon className="button-icon" size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
