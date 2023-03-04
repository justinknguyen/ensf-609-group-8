import { Link } from "react-router-dom";
export const LandingPage = () => {
  return (
    <div>
      <h1>QR Health Link</h1>
      <h2>By Ben, Bill, Garnet, Justin, and Kevin </h2>
      Pages:
      <ul>
        <li>
          <Link to="/qr-generator">QR Generator</Link>
        </li>
        <li>
          <Link to="/qr-reader">QR reader</Link>
        </li>
      </ul>
      <p>
        Source Code:
        <a href="https://github.com/ensf-609-hackaton-group-8/ensf-609-group-8">
          GitHub Repo
        </a>
      </p>
      <p>
        License:
        <a href="https://spdx.org/licenses/AGPL-3.0-only.html">AGPL-3.0-only</a>
      </p>
    </div>
  );
};
