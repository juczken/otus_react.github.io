// CartButton.tsx
import React, { FC } from 'react';
import cn from 'clsx';
import buttonStyle from '../../../../shared/ui/Button/Button.module.css';
import style from './CartButton.module.css';
import Counter from '../../../../shared/ui/Counter/Counter';
import { useTranslation } from 'react-i18next';

export type CartButtonProps = {
  count: number;
  // min?: number;
  max?: number;
  disabled?: boolean;
  onCountChange?: (value: number) => void;
};

const CartButton: FC<CartButtonProps> = ({
  count,
  max,
  disabled,
  onCountChange = (value: number) => {
    /* do nothing */
  },
}) => {
  const { t } = useTranslation();

  const Increment = () => onCountChange(count + 1);
  const Decrement = () => onCountChange(count - 1);
  const InputChange = (value: number) => onCountChange(value);

  return (
    <div className={cn(style.wrapper)}>
      {count === 0 ? (
        <button
          className={cn({
            [buttonStyle.button_disable]: disabled,
            [buttonStyle.button_enable]: !disabled,
            [style.button]: !disabled,
            [buttonStyle.button]: true,
          })}
          disabled={disabled}
          onClick={() => InputChange(1)}
        >
          {t('CartButton.button')}
        </button>
      ) : (
        <Counter
          count={count}
          min={0}
          max={max}
          disabled={disabled}
          onDecrement={Decrement}
          onIncrement={Increment}
          onInputChange={InputChange}
        />
      )}
    </div>
  );
};

export default CartButton;

// import React, { FC } from 'react';
// import cn from 'clsx';
// import style from './CartButton.module.css';
// import Counter from '../../../../shared/ui/Counter/Counter';
// import Button from '../../../../shared/ui/Button/Button';

// export type CartButtonProps = {
//   count: number;
//   // min?: number;
//   max?: number;
//   disabled?: boolean;
//   onCountChange?: (value: number) => void;
// };

// const CartButton: FC<CartButtonProps> = ({ count, max, disabled, onCountChange = (value: number) => { /* do nothing */ } }) => {

//   const onIncrement = () => onCountChange(count + 1);
//   const onDecrement = () => onCountChange(count - 1);
//   const onInputChange = (value: number) => onCountChange(value);

//   return (
//     <div className={cn(style.wrapper)}>
//       {count === 0
//         ? (<Button className={cn(style.button)} lable="В корзину" disabled={disabled} onClick={onIncrement} />)
//         : (<Counter count={count} min={0} max={max} disabled={disabled} onIncrement={onIncrement} onDecrement={onDecrement} onInputChange={onInputChange} />)}
//     </div>
//   );
// };
// export default CartButton;
