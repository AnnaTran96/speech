import React from 'react';

import styles from 'common/components/Button/Button.module.scss';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className: string;
  children: React.ReactNode;
}

const Button = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
