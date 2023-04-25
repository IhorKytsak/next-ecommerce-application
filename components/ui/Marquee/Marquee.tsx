import { ReactNode, FC } from 'react';
import cn from 'classnames';
import s from './Marquee.module.css';

interface Props {
  children: ReactNode[];
  variant?: 'primary' | 'secondary';
}

const Marquee: FC<Props> = ({ children, variant = 'primary' }) => {
  const rootClassName = cn(s.root, {
    [s.secondary]: variant === 'secondary',
  });

  return (
    <div className={rootClassName}>
      <div className={s.container}>
        <div className={s.slider}>
          {children}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
