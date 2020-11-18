import React, { useState } from "react";
import {
  action,
  createStore,
  StoreProvider,
  useStoreState,
  useStoreActions,
} from "easy-peasy";

const store = createStore({
  tasks: ["aaa", "bbb", "ccc"],
  add: action((state, payload) => {
    state.tasks.push(payload);
  }),
  remove: action((state, payload) => {
    state.tasks.splice(payload, 1);
  }),
});

function Todo() {
  const tasks = useStoreState((state) => state.tasks);
  const [add, remove] = useStoreActions((actions) => [
    actions.add,
    actions.remove,
  ]);
  const [text, setText] = useState("");
  const onClick = () => {
    add(text);
    setText("");
  };
  const onRemove = (index) => {
    remove(index);
  };
  return (
    <section id="todo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onClick}>+</button>
      {tasks.map((task, key) => (
        <p key={key}>
          {task}
          <span
            onClick={() => onRemove(key)}
            style={{ cursor: "pointer", color: "crimson" }}
          >
            x
          </span>
        </p>
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
