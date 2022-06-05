import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AccordionItem } from './AccordionItem';

import './accordion.scss'

export const Accordion = ({
  data,
  ...props
}) => {
  const [sData, setSData] = useState([...data]);

  function setItemActive(index) {
    setSData(sData.map((item, i) => ({
      ...item,
      active: i === index ? !item.active : false
    })));
  }

  return (
    sData.map((item, i) => (
      <AccordionItem
        key={i}
        setActive={() => setItemActive(i)}
        {...item}
        {...props}
      />
    ))
  );
};

Accordion.propTypes = {
  /**
   * Data for the accordion items.
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node,
      active: PropTypes.bool,
    }),
  
  ),
  /**
   * Accordion primary mode
   */
  primary: PropTypes.bool,
  /**
   * Accordion secondary mode
   */
  secondary: PropTypes.bool,
  /**
   * Accordion inverted mode
   */
  inverted: PropTypes.bool,
  /**
   * Icon that denotes that the item can be expanded
   */
  expandIcon: PropTypes.string,
  /**
   * Icon that denotes that the item can be shunrk
   */
  shrinkIcon: PropTypes.string,
  /**
   * The accordion item background color
   */
  backgroundColor: PropTypes.string,
  /**
   * The accordion item font color
   */
  color: PropTypes.string,
  /**
   * Addtional classes to apply
   */
  className: PropTypes.string,
  /**
   * The content of the accordion item.
   */
};

Accordion.defaultProps = {
  data: [],
  primary: false,
  inverted: false,
  secondary: false,
};
