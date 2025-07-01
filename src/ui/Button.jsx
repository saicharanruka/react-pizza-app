import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "rounded-xl bg-yellow-400 p-3 font-semibold  text-sm uppercase  text-stone-800 transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-1 disabled:cursor-not-allowed";

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
