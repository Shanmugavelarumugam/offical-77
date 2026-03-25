import './Card.css';
import { cx } from '../../utils/helpers';

import Tilt from 'react-parallax-tilt';

const Card = ({
  children,
  className = '',
  hoverEffect = true,
  glass = true,
  onClick,
  ...props
}) => {
  const innerContent = (
    <div
      className={cx(
        'ui-card',
        glass ? 'glass-panel' : 'solid-panel',
        hoverEffect && 'card-hover',
        onClick && 'card-clickable',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );

  // If hover effect disabled, just return the standard div
  if (!hoverEffect) return innerContent;

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      transitionSpeed={1000}
      scale={1.02}
      gyroscope={true}
      className={onClick ? 'card-clickable' : ''}
    >
      {innerContent}
    </Tilt>
  );
};

export default Card;
