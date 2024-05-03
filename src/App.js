import React, { useState, useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google"
import Login from "./components/Login";
import Logout from "./components/Logout"
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";

import Home from "./components/Home";
import VisitList from "./components/VisitList";
import EatList from "./components/EatList";
import Advising from "./components/Advising";
import Submit from "./components/Submit";

import VisitDetail from "./components/VisitDetail";
import EatDetail from "./components/EatDetail";
import EatAddReview from "./components/EatAddReview";
import VisitAddReview from "./components/VisitAddReview";
import './App.css';

import {SocialIcon} from "react-social-icons";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    let loginData = JSON.parse(localStorage.getItem("login"));
    
    if (loginData) {
      let loginExp = loginData.exp;
      let now = Date.now()/1000;
      if (now < loginExp) {
        setUser(loginData);
      } else {
        localStorage.setItem("login", null);
      }
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
      <Navbar expand="lg" sticky="top" className="navbar-light">
          <Container className="container-fluid">
            <Navbar.Brand href="/">
              <img src="/images/Logo.png" alt="logo" className="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="link-active">
                    HOME
                </Nav.Link>
                <Nav.Link as={Link} to="/visits" className="link-active">
                    VISIT
                </Nav.Link>
                <Nav.Link as={Link} to="/eats" className="link-active">
                    EAT
                </Nav.Link>
                <Nav.Link as={Link} to="/advising" className="link-active">
                    ADVISING
                </Nav.Link>
                <Nav.Link>
                { user ? (
                        <Logout setUser={setUser} clientId={clientId}/>
                      ) : (
                        <Login setUser={setUser}/>
                      )}    
                </Nav.Link>
              </Nav>

            </Navbar.Collapse>

          </Container>

        </Navbar>

        <Routes>
          <Route exact path="/" element={
            <Home
              user={ user }
            />}
          />
          <Route path="/eats" element={
            <EatList
              user={user}
            />}
          />
          <Route path="/visits" element={
            <VisitList
              user={user}
            />}
          />
          <Route path="/advising" element={
            <Advising
              user={user}
            />}
          />
          <Route path="/submit" element={
            <Submit
            />}
          />
          <Route path="/visits/:id" element={
            <VisitDetail user={user}/>} 
          />
          <Route path="/eats/:id" element={
            <EatDetail user={user}/>} 
          />
          <Route path="/visits/:id/review" element={
            <VisitAddReview user = { user } />}
          />
          <Route path="/eats/:id/review" element={
            <EatAddReview user = { user } />}
          />
        </Routes>

        <footer className="text-center">
            <h3>
              Contact Us
            </h3>
            <SocialIcon url="mailto:yin.qian1@northeastern.edu" id="contactIcon"/>
            <SocialIcon url="https://www.instagram.com/pennyyin215/" rel="noreferrer" target="_blank" id="contactIcon"/>
            <SocialIcon url="https://www.facebook.com/profile.php?id=100082834158555" rel="noreferrer" target="_blank" id="contactIcon"/>   

          <div className="text-center pt-2">
            © 2023 Copyright
          </div>
        </footer>

      </div>
    </GoogleOAuthProvider>
  );
}

export default App;