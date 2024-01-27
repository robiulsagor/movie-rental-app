/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";

export default function Rating({ rating }) {
  const stars = Array(rating).fill(null);

  return (
    <div className="flex items-center gap-1 mt-2">
      {stars.map((star, i) => (
        <FaStar key={i} className="text-primary text-sm" />
      ))}
    </div>
  );
}
