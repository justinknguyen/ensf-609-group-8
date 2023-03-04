import { Link } from "react-router-dom";
export const LandingPage = () => {
  return (
    <div>
      <h1>QR Health Link</h1>
      Pages:
      <li>
        <ul>
          <Link to="/a">a</Link>
        </ul>
        <ul>
          <Link to="/b">b</Link>
        </ul>
      </li>
    </div>
  );
};
