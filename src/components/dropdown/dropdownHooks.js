import { useEffect } from 'react';

/**
 * TODO imporove this logic:
 * Hook that verifies if a click was done outside of the html element (ref)
 * This will be execute the callback if the click was outside the component.
 * @param {Array} refs references to verify if the click was on one of them. 
 */
export function useVerifyClickInComponent(refs, callback) {
  useEffect(() => {
    function checksBlurComponent(e) {
      const elementWasClicked = refs.some(ref => {
        const {top, right, bottom, left} = ref.current.getBoundingClientRect();
        return e.pageX >= left && e.pageX <= right && e.pageY >= top && e.pageY <= bottom
      });
      
      !elementWasClicked && callback();
    }
    
    document.addEventListener('mousedown', checksBlurComponent);
    
    return () => document.removeEventListener('mousedown', checksBlurComponent);
  }, [refs, callback])
}
