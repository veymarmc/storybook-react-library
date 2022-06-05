import React, { FunctionComponent } from 'react';

interface AccordionItemProps {
  title: string,
  content: React.ReactNode,
  active?: boolean
}

interface AccordionProps {
  data?: Arra<AccordionItemProps>;
  primary?: boolean,
  secondary?: boolean,
  inverted?: boolean,
  expandIcon?: string,
  shrinkIcon?: string,
  backgrounColor?: string,
  color?: string,
  className?: string,
}

export const Accordion: FunctionComponent<AccordionProps>;
