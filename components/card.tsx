import Image from 'next/image';
import React, { useState } from 'react';

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'is-flipped' : ''}`} onClick={handleClick}>
      <div className="card__face card__face--front">
       please<br/> click here<br/> to projects
      </div>
      <div className="card__face card__face--back">
        Back<Image src={''} alt={''}/>
      </div>
    </div>
  );
};

export default Card;