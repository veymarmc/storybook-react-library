import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './dropdown.scss';

/**
 * Component that deploy a list of option to be selected with one by default
 */
export const Dropdown = ({ data, trigger}) => {
  const [open, setOpen] = useState(false);
  const selected = data.find(d => d.selected) || data[0] || { value: 'choose a value..'};

  return (
    <div className='vmcrjc-dropdown'>
      {trigger(open, () => setOpen(!open), selected.value)}
      <ul className={!open ? 'd-none' : ''}>
        {data.map((d, i) => (
          <li key={i}>{d.item}</li>
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
   * A trigger component to open/close the dropdown
   * Should be a Button component.
   */
  trigger: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  data: [],
};
