import React, {
  FC,
  ReactNode,
  Children,
  isValidElement,
  useState,
} from 'react';
import { useKeenSlider } from 'keen-slider/react';
import cn from 'classnames';
import s from './ProductSlider.module.css';

const ProductSlider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  console.log(currentSlide);

  return (
    <div className={s.root}>
      <div
        ref={sliderRef as any}
        className='keen-slider h-full transition-opacity'
      >
        <button
          onClick={() => slider.current?.prev()}
          className={cn(s.leftControl, s.control)}
        />
        <button
          onClick={() => slider.current?.next()}
          className={cn(s.rightControl, s.control)}
        />
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className}` : ''
                } keen-slider__slide`,
              },
            };
          }

          return child;
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
