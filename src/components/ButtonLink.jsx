import { Link } from "react-router-dom";

function ButtonLink({ to, children }) {
  return (
    <Link to={to}>
      <button className="explore-btn">{children}</button>
    </Link>
  );
}

export default ButtonLink;
