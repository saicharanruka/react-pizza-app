/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function LinkButton({ children, to }) {
  return (
    <Link
      to={to}
      className="text-sm text-blue-500 transition hover:text-blue-600 hover:underline"
    >
      {children}
    </Link>
  );
}

export default LinkButton;
