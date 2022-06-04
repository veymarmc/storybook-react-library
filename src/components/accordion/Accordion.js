import React from 'react';
import PropTypes from 'prop-types';
import { AccordionItem } from './AccordionItem';

import './accordion.scss'

export const Accordion = ({data, expandIcon, shrinkIcon}) => {
  return (data.map( item => (
    <AccordionItem {...item} expandIcon={expandIcon} shrinkIcon={shrinkIcon} />
  )));
};

Accordion.propTypes = {
  /**
   * Data for the accordion items.
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node
    }),
  
  ),

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
   bgColor: PropTypes.string,
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
};
