import { ReactNode, FC } from 'react';
// import Ticker from 'react-ticker';
import s from './Marquee.module.css';

interface Props {
  children: ReactNode[];
}

const Marquee: FC<Props> = ({ children }) => {
  return (
    <div className={s.root}>
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
