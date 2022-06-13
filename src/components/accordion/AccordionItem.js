import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from './../../components'

import './accordionItem.scss';

export function AccordionItem({
  backgroundColor,
  content,
  color,
  active,
  setActive,
  expandIcon,
  inverted,
  primary,
  secondary,
  shrinkIcon,
  title,
}) {
  const mode = primary || secondary || inverted
    ? 'accordion-item__title' + (primary
      ? '--primary'
      : secondary
        ? '--secondary'
        : inverted
          ? '--inverted'
          : '')
    : '';
  const invertedColor = inverted && color && !backgroundColor ? { border: `2px solid ${color}` } : {};
  const contentInverted = inverted && color && !backgroundColor ? { border: `2px solid ${color}`, borderTop: 'none' } : {};
  const contentBackground = backgroundColor && color && !inverted ? { border: `2px solid ${backgroundColor}`, borderTop: 'none' } : {};
  const colorStyle = color ? { color } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};

  return (
    <div className='vmcrjc-accordion-item accordion-item'>
      <div
        onClick={() => setActive()}
        className={[
          'accordion-item__title',
          mode
        ].join(' ')}
        style={{...colorStyle, ...backgroundColorStyle, ...invertedColor}}
      >
        {title} { !active ? <Icon name={expandIcon}/> : <Icon name={shrinkIcon}/>}
      </div>
      { active &&
        <div
          className='accordion-item__content'
          style={{...contentInverted, ...contentBackground}}
        >
          {content}
        </div>
      }
    </div>
  );
}

AccordionItem.propTypes = {
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
   * The content of the accordion item.
   */
  content: PropTypes.node,
  /**
   * The color to be applied to the text to the title
   */
  color: PropTypes.string,
  /**
   * Accordion's background color
   */
  backgroundColor: PropTypes.string,
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
  inverted: false,
  primary: false,
  secondary: false,
  shrinkIcon: 'caret-up',
  title: 'title',
};
