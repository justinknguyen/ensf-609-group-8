import React from "react";
import { Title } from "../styles";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <Title>QR Health Link</Title>
        <p className="text-muted">
          By Ben, Bill, Garnet, Justin, Kevin, Laura, and Omar.
        </p>
        <br />
        <p>
          <p>Information fragmentation or the lack of information sharing between health services is an issue in health care (Everson et al., 2017). 
            Within Alberta Health Services (AHS), there is currently no communication of Health Link visits with Emergency Departments (EDs) 
            because each service uses a different computer system (M. Kim, personal communication, January 21, 2023). We are working to design a 
            computer application using QR codes to share Health Link visit information with Emergency Departments (EDs).
          </p>
        </p>
        <br />
        <br />
        <p>
          <p>Source Code:</p>
          <a href="https://github.com/ensf-609-hackaton-group-8/ensf-609-group-8">
            GitHub Repo
          </a>
        </p>
        <br />
        <p>
          <p>License:</p>
          <a href="https://spdx.org/licenses/AGPL-3.0-only.html">
            AGPL-3.0-only
          </a>
        </p>
      </div>
    </div>
  );
}
