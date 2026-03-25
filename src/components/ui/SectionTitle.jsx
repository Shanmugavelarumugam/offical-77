import './SectionTitle.css';
import { cx } from '../../utils/helpers';

const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  className = '',
  titleClassName = '',
  subtitleClassName = ''
}) => {
  return (
    <div className={cx('ui-section-title-wrapper', centered && 'text-center', className)}>
      {subtitle && (
        <span className={cx('ui-section-subtitle', subtitleClassName)}>
          {subtitle}
        </span>
      )}
      <h2 className={cx('ui-section-title heading-lg', titleClassName)}>
        {title}
      </h2>
      <div className={cx('ui-section-decorator', centered && 'mx-auto')}></div>
    </div>
  );
};

export default SectionTitle;
