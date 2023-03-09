import React from 'react';

import { Button as ButtonStyle } from 'app/styles/components/Button.styles';

interface ButtonProps {
   onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
   children: React.ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
   return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
};

export default Button;
