import React, {useEffect} from 'react';
import resetScroll from './resetScroll'

function UseScroll(pathName) {
   useEffect(resetScroll,[pathName]);
}

export default UseScroll;
