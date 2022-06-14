import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './dropdown.scss';
import { useDropDownStatus, useComponentsArentClicked } from './dropdownHooks';

/**
 * Component that deploy a list of option to be selected with one by default
 */
export const Dropdown = ({
  data,
  onChange,
  position,
  trigger,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(
    data.find(d => d.selected) || data[0] || { value: 'choose a value..'}
  );
  const dropdownRef = useRef({});
  const listRef = useRef({});
  const [initialState, dropdownDimension, listDimension] = useDropDownStatus(listRef, dropdownRef);
  const initialStateStyle = initialState ? {visibility: 'hidden'} : {};
  const positionStyle = !initialState && position === 'right'
    ? { left: `${-(listDimension.current.width - dropdownDimension.current.width)}px` }
    : {};
  
  useComponentsArentClicked([dropdownRef, listRef], open, closeList);

  function closeList() {
    setOpen(false);
  }

  function changeOpen() {
    setOpen(!open);
  }
  
  function selectItem(item) {
    setSelected(item);
    onChange && onChange(item);
    setOpen(false);
  }

  return (
    <div className='vmcrjc-dropdown dropdown' ref={dropdownRef}>
      {trigger(open, changeOpen, selected)}

      <ul
        ref={listRef}
        style={{...initialStateStyle, ...positionStyle}}
        className={(!initialState && !open) ? 'd-none': ''}
      >
        {data.map((d, i) => (
          <li key={i} onClick={() => selectItem(d)}>
            {d.item}
          </li>
        ))}
      </ul>
    </div>
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
   * the position of the menu respect to the trigger component
   */
  position: PropTypes.oneOf(['right', 'left']),
  /**
   * A trigger component to open/close the dropdown
   * Should be a Button component.
   */
  trigger: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  data: [],
  position: 'left',
};
