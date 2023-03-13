import { HTMLProps, forwardRef } from 'react';

type InputProps = HTMLProps<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
   props,
   ref
) {
   return <input {...props} ref={ref}></input>;
});

export default Input;
