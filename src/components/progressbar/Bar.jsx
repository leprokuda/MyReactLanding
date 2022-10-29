import Progressbar from "react-js-progressbar";
import React, {useState, useEffect} from "react";

const ProgressBar = ({scrollY, value}) => {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    if (scrollY > 1890) {
      setPercentage(value)
    }
  }, [scrollY, value]);

  return (
    <Progressbar
      input={percentage}
      clockwise={false}
      size={'70%'}
      pathWidth={10}
      pathColor={'#4db5ff'} // use an array for gradient color.
      trailWidth={15}
      trailColor={'#2c2c6c'} // use a string for solid color.
      textStyle={{ fill: 'white' }} // middle text style
      animation={ {animateOnMount: false, animateOnInputChange: true, duration: 2000, delay: 500, ease: 'linear'} }
    />
  )
}

export default ProgressBar