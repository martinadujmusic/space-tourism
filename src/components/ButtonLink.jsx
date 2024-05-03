import { Link } from "react-router-dom";

function ButtonLink({ to, children }) {
  return (
    <div className="explore-button-container">
      <Link to={to}>
        <button className="explore-button">{children}</button>
      </Link>
    </div>
  );
}

export default ButtonLink;
