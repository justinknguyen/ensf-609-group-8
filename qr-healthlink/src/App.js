import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "./lib/contextLib";
import Routes from "./Routes";
import { createGlobalStyle } from "styled-components";
import { Nav, NavButton } from "./styles";

const MainContainer = createGlobalStyle`
  * {
    border: 0 none transparent;
    box-sizing: border-box;
    font-family: 'DM Sans';
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
  input {
    height: 100%;
  }
`;

function App() {
  const nav = useNavigate();
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isuserType, userType] = useState(false);

  function handleLogout() {
    userHasAuthenticated(false);
    nav("/ensf-609-group-8");
  }

  return (
    <div>
      <MainContainer />
      <Nav>
        {isAuthenticated ? (
          <>
            <NavButton to="/ensf-609-group-8/home">QR Health Link</NavButton>
            <NavButton to="/ensf-609-group-8/qr-generator">Generate</NavButton>
            <NavButton to="/ensf-609-group-8/qr-reader">Read</NavButton>
            <NavButton to="/ensf-609-group-8" onClick={handleLogout}>Logout</NavButton>
          </>
        ) : (
          <NavButton>QR Health Link</NavButton>
        )}
      </Nav>
      <AppContext.Provider
        value={{
          isAuthenticated,
          userHasAuthenticated,
          isuserType,
          userType,
        }}
      >
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
