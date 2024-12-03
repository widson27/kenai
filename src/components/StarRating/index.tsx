import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa6';
export interface Props {
  rating: number;
}

function StarRating(props: Props) {
  const numStars = Math.round(props.rating / 2);

  const fullStars = [];
  const emptyStars = [];

  for (let i = 0; i < 5; i++) {
    if (i < numStars) {
      fullStars.push(i);
    } else {
      emptyStars.push(i);
    }
  }

  return (
    <div className="flex gap-1">
      {fullStars.map((index) => (
        <FaStar className="text-[#FFA634] border-[#FFA634]" key={index} />
      ))}
      {emptyStars.map((index) => (
        <FaRegStar className="text-[#FFA634]" key={index} />
      ))}
    </div>
  );
}

export default StarRating;
