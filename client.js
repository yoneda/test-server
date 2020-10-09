import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import request from "superagent";
import styled from "styled-components";
import EmptyApp from "./EmptyApp";
import { Reset } from "styled-reset";

const StatusGood = styled.span`
  color: green;
`;

const StatusBad = styled.span`
  color: red;
`;

const Box = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  width: 400px;
`;

function Home() {
  const [helth, setHelth] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const port = process.env.PORT || 3000;
    const url = `http://localhost:${port}/api/helth`;
    request
      .get(url)
      .then((res) => res.body)
      .then((body) => {
        setHelth(body.helth);
      });
  }, []);
  useEffect(() => {
    const port = process.env.PORT || 3000;
    const url = `http://localhost:${port}/api/helth`;
    request
      .get(url)
      .then((res) => res.body)
      .then((body) => {
        setUsers(body.users);
      });
  }, []);

  return (
    <div>
      <Nav />
      <Box>
        helth:{" "}
        {helth ? <StatusGood>{helth}</StatusGood> : <StatusBad>bad</StatusBad>}
      </Box>
      <Box>
        {users.map((user, index) => (
          <div key={index}>{user.email}</div>
        ))}
      </Box>
    </div>
  );
}

function About() {
  const [name, setName] = useState("");
  useEffect(() => {
    const url = "https://reqres.in/api/users/1";
    request
      .get(url)
      .then((res) => res.body)
      .then((body) => {
        setName(body.data.last_name);
      });
  }, []);
  return (
    <div>
      <Nav />
      <div>This is about page</div>
      {name && <div>{name}</div>}
    </div>
  );
}

function Works() {
  return (
    <div>
      <Nav />
      <div>This is works page</div>
      <p>Please check my awesome works.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <Nav />
      <div>This is contact page</div>
      <p>Mail to me.</p>
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="./../about">about</Link> |{" "}
      <Link to="./../works">works</Link> |{" "}
      <Link to="./../contact">contant</Link> | <Link to="./../app">app</Link>
    </nav>
  );
}

function App() {
  return (
    <Fragment>
      <Reset />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Works path="/works" />
        <Contact path="/contact" />
        <EmptyApp path="/app" />
      </Router>
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
