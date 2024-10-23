import React, { FC, useState } from 'react';
import cn from 'clsx';
import style from './Counter.module.css';
import { on } from 'events';

export type CounterProps = {
  count: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onInputChange?: (value: number) => void;
};

const Counter: FC<CounterProps> = ({ count, min, max, disabled = true, onIncrement = () => { }, onDecrement = () => { }, onInputChange = (value: number) => { } }) => {
  // const [countValue, setCountValue] = useState(count);
  console.log({ caption: 'component', count, min, max, disabled, onIncrement, onDecrement, onInputChange })
  console.log({ style: !disabled && (min === undefined || count > min), disabled: disabled || (min && count <= min) })
  console.log({ style: !disabled && (max === undefined || count < max), disabled: disabled || (max && count >= max) })
  return (
    <div className={cn(style.wrapper)}>
      <button
        onClick={() => onDecrement()}
        className={cn(style.counter, { [style.counter_enable]: !disabled && (min === undefined || count > min) })}
        disabled={disabled || (min !== undefined && count <= min)}
      >
        -
      </button>
      <input
        className={cn(style.input)}
        type="number"
        value={count}
        disabled={disabled}
        onChange={(event) =>
          (max === undefined || Number(event.target.value) <= max)
            && (min === undefined || Number(event.target.value) >= min)
            ? onInputChange(Number(event.target.value))
            : event.target.value = count.toString()
        }
      />
      <button
        onClick={() => onIncrement()}
        className={cn(style.counter, { [style.counter_enable]: !disabled && (max === undefined || count < max) })}
        disabled={disabled || (max !== undefined && count >= max)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
