import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './dropdown.scss';
import { useVerifyClickInComponent } from './dropdownHooks';

/**
 * Component that deploy a list of option to be selected with one by default
 */
export const Dropdown = ({ data, trigger, onChange }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(
    data.find(d => d.selected) || data[0] || { value: 'choose a value..'}
  );

  const changeOpen = () => {
    setOpen(!open);
  };
  
  const selectItem = item => {
    setSelected(item);
    onChange && onChange(item);
    setOpen(false);

  };

  return (
    <div className='vmcrjc-dropdown'>
      {trigger(open, changeOpen, selected.value)}
      {open && 
        <DropdownList 
          data={data}
          selectItem={selectItem}
          setOpen={setOpen}
        />
      }
    </div>
  );
};

const DropdownList = ({data, selectItem, setOpen}) => {
  const list = useRef({});
  useVerifyClickInComponent(list, () => setOpen(false))

  return (
    <ul ref={list}>
      {data.map((d, i) => (
        <li key={i} onClick={() => selectItem(d)} >
          {d.item}
        </li>
      ))}
    </ul>
  );
};

Dropdown.propTypes = {
  /**
   * the nodes list options
   */
  data: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    item: PropTypes.node
  })),
  /**
   * function that will provide the current selected value
   */
  onChange: PropTypes.func,
  /**
   * A trigger component to open/close the dropdown
   * Should be a Button component.
   */
  trigger: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  data: [],
  onChange: undefined
};
