import React from 'react';
import Typed from 'react-typed';

const TypingEffect = () => {
  const strings = ["Frontend Developer", "Web Developer"];

  const options = {
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  };

  return (
    <div className="text-center mt-10">
      <Typed strings={strings} typeSpeed={options.typeSpeed} backSpeed={options.backSpeed} backDelay={options.backDelay} loop={options.loop} />
    </div>
  );
};

export default TypingEffect;