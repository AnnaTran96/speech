import { MouseEvent, ReactNode } from 'react';

import { Button as ButtonStyle } from 'app/styles/components/Button.styled';

interface ButtonProps {
   onClick: (e: MouseEvent<HTMLButtonElement>) => void;
   children: ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
   return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
};

export default Button;
