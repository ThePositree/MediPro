import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Card = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`bg-white bg-opacity-10 rounded-lg shadow-lg overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
