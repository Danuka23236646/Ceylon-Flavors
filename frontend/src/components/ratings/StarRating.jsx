import React from "react";
import { FaStar } from "react-icons/fa";



const StarRating = ({ rating, setRating }) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          size={20}
          color={i < rating ? "gold" : "gray"}
          onClick={() => setRating(i + 1)}
          style={{ cursor: "pointer" }}
        />
      ))}
    </div>
  );
};

export default StarRating;
