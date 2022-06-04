import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from './../../components'

export function AccordionItem({title, expandIcon, shrinkIcon, content}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div onClick={() => setExpanded(!expanded)}>
        {title} { !expanded ? <Icon name={expandIcon}/> : <Icon name={shrinkIcon}/>}
      </div>
      { expanded &&
        <div>
          content
        </div>
      }
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
