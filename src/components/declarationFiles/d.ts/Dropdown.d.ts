import React, { FunctionComponent } from 'react';
import { Dropdown } from '../../dropdown/Dropdown';

interface DropDownData {
  value: string,
  item: React.ReactNode,
  selected?: boolean,
};

interface DropdownProps {
  data: Array<DropDownData>,
  onChange: (event?: any) => void,
  trigger: (
    open: boolean,
    setOpen: boolean,
    current: React.ReactNode,
  ) => React.ReactComponentElement;
};

export const Dropdown: FunctionComponent<DropdownProps>;
