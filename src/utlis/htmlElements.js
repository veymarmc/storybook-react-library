export function getBoxModelStyleWidth(element, style) {
  return parseInt(window.getComputedStyle(element, null).getPropertyValue(style));
}

export function getElementComposedWidth(element, boxModelStyle, addstyle) {
  const { width } = element.getBoundingClientRect();
  const styleWidth = getBoxModelStyleWidth(element, boxModelStyle);

  switch(boxModelStyle) {
    case 'padding':
      return addstyle ? width : width - (styleWidth * 2);
    case 'margin-left':
      return addstyle ? width + styleWidth : width - styleWidth;
    default:
      return 0;
  }
}
