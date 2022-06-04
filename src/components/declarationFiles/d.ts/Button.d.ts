import React, { FunctionComponent } from 'react';

interface ButtonProps {
  backgroundColor?: string,
  primary?: boolean,
  secondary?: boolean,
  children?: React.ReactNode,
  className?: string,
  color?: string,
  label?: string,
  leadingIcon?: string,
  size: 'small' | 'medium' | 'large',
  trailingIcon: string,
  fluid: boolean,
  inverted: boolean,
  onBlur: (event: any) => void,
  onClick: (event: any) => void,
};

export const Button: FunctionComponent<ButtonProps>;
