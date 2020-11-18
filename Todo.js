import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import request from "superagent";
import styled from "styled-components";
import { Reset } from "styled-reset";
import EmptyApp from "./EmptyApp";
import StyleTest from "./StyleTest";
import {
  action,
  computed,
  createStore,
  StoreProvider,
  useStoreState,
  useStoreActions,
  useStore,
} from "easy-peasy";

const store = createStore({
  tasks: ["aaa", "bbb", "ccc"],
  add: action((state, payload) => {
    state.tasks.push(payload);
  }),
});

function Todo() {
  const tasks = useStoreState((state) => state.tasks);
  const add = useStoreActions((actions) => actions.add);
  const [text, setText] = useState("");
  const onClick = () => {
    add(text);
    setText("");
  };
  return (
    <section id="todo">
      <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
      <button onClick={onClick}>+</button>
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </section>
  );
}

export default function () {
  return (
    <StoreProvider store={store}>
      <Todo />
    </StoreProvider>
  );
}
