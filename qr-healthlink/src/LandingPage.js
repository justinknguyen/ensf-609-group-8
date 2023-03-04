import { Link } from "react-router-dom";
export const LandingPage = () => {
  return (
    <div>
      <h1>QR Health Link</h1>
      Pages:
      <ul>
        <li>
          <Link to="/qr-generator">QR Generator</Link>
        </li>
        <li>
          <Link to="/qr-reader">QR reader</Link>
        </li>
      </ul>
    </div>
  );
};
