import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from './../../components'

export function AccordionItem({
  content,
  active,
  setActive,
  expandIcon,
  shrinkIcon,
  title,
}) {
  return (
    <>
      <div onClick={() => setActive()}>
        {title} { !active ? <Icon name={expandIcon}/> : <Icon name={shrinkIcon}/>}
      </div>
      { active &&
        <div>
          {content}
        </div>
      }
    </>
  );
}

AccordionItem.propTypes = {
  /**
   * The content of the accordion item.
   */
  content: PropTypes.node,
  /**
   * Tells the component if it is expanded
   */
  active: PropTypes.bool,
  /**
   * function to fire when the expanded event has been triggered
   */
  setActive: PropTypes.func.isRequired,
  /**
   * Icon that denotes that the item can be expanded
   */
  expandIcon: PropTypes.string,
  /**
   * Icon that denotes that the item can be shunrk
   */
  shrinkIcon: PropTypes.string,
  /**
   * Title of the Accordion Item.
   */
  title: PropTypes.string.isRequired,
};

AccordionItem.defaultProps = {
  active: false,
  expandIcon: 'caret-down',
  shrinkIcon: 'caret-up',
  title: 'title',
};
