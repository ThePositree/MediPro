import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const baseClassName =
  "px-4 py-2 rounded-lg shadow-lg transition-all duration-300";

const animation = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

const Button = ({ children, to, onClick, className = "", type = "button" }) => {
  const combinedClassName = `${baseClassName} ${className}`;
  const buttonContent = <span className="inline-block">{children}</span>;

  if (to) {
    return (
      <motion.button {...animation} type={type} onClick={onClick}>
        <Link className={combinedClassName} to={to}>
          {buttonContent}
        </Link>
      </motion.button>
    );
  }

  return (
    <motion.button
      {...animation}
      type={type}
      className={combinedClassName}
      onClick={onClick}
    >
      {buttonContent}
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
