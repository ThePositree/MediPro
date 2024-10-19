import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

const startClassName = "w-5 h-5 text-yellow-400";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return <StarSolid key={index} className={startClassName} />;
        }
        if (index === fullStars && hasHalfStar) {
          return (
            <div key={index} className="relative">
              <StarOutline className={startClassName} />
              <div
                className="absolute top-0 left-0 overflow-hidden"
                style={{ width: "50%" }}
              >
                <StarSolid className={startClassName} />
              </div>
            </div>
          );
        }
        return <StarOutline key={index} className={startClassName} />;
      })}
      <span className="ml-2 text-sm text-gray-300">{rating.toFixed(1)}</span>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
