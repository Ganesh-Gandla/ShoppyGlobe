import { useRouteError, Link } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
  const error = useRouteError();
  console.log(error)

  return (
    <div className="notfound-container">
      <div className="notfound-content">

        <h1 className="notfound-code">404</h1>

        <h2 className="notfound-title">
          Page Not Found
        </h2>

        <p className="notfound-text">
          {error.data}
        </p>

        <Link to="/" className="notfound-btn">
          ⬅ Back to Home
        </Link>

      </div>
    </div>
  );
}

export default NotFound;
