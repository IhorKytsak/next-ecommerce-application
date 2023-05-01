import { FC, ReactNode } from 'react';
import s from './ProductSlider.module.css';

const ProductSlider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={s.root}>
      <div className='h-full transition-opacity'>{children}</div>
    </div>
  );
};

export default ProductSlider;
