
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";


function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="navStyle">
          <Typography
            variant="h6"
            className="navTitleStyle"
            component={Link}
            to="/"
          >
            QR Health Link
          </Typography>
          <Button
            className="navButtonStyle"
            color="inherit"
            component={Link}
            to="/qr-generator"
          >
            QR Generator
          </Button>
          <Button
            className="navButtonStyle"
            color="inherit"
            component={Link}
            to="/qr-reader"
          >
            QR Reader
          </Button>
        </Toolbar>
      </AppBar>
      <Routes />
    </div>
  );
}

export default App;