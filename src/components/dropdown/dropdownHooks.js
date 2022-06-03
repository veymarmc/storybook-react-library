import { useEffect } from 'react';

/**
 * TODO imporove this logic:
 * Hook that verifies if a click was done outside of the html element (ref)
 * This will be execute the callback if the click was outside the component.
 * @param {ReactRef} ref reference of an html element to get its position. 
 */
export function useVerifyClickInComponent(ref, callback) {
  useEffect(() => {
    function checksBlurComponent(e) {
      const {top, right, bottom, left} = ref.current.getBoundingClientRect();
      
      if (!(e.pageX >= left && e.pageX <= right && e.pageY >= top && e.pageY <= bottom)) {
        callback();
      }
    }
    
    document.addEventListener('mousedown', checksBlurComponent);
    
    return () => document.removeEventListener('mousedown', checksBlurComponent);
  }, [ref, callback])
}
