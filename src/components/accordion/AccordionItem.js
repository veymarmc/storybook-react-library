import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from './../../components'

export function AccordionItem({title, expandIcon, shrinkIcon, content}) {
  return (
    <>
      <div>
        {title} <Icon name={expandIcon}/> <Icon name={shrinkIcon}/>
      </div>
      <div>
        content
      </div>
    </>
  );
}

AccordionItem.propTypes = {
  /**
   * Title of the Accordion Item.
   */
  title: PropTypes.string.isRequired,
  /**
   * Icon that denotes that the item can be expanded
   */
  expandIcon: PropTypes.string,
  /**
   * Icon that denotes that the item can be shunrk
   */
  shrinkIcon: PropTypes.string,
  /**
   * The content of the accordion item.
   */
  content: PropTypes.node,
};

AccordionItem.defaultProps = {
  title: 'title',
  expandIcon: 'caret-down',
  shrinkIcon: 'caret-up',
  content: 'content', // to be erased, only for test.
};
