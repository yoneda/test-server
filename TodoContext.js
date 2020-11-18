import React, { createContext, useState, useContext} from "react";

const TaskContext = createContext({
  tasks: ["aaa", "bbb", "ccc"],
  add: () => {},
  remove: () => {},
});

function Todo() {
  const { tasks, add, remove } = useContext(TaskContext);
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
  const [tasks, setTasks] = useState([]);
  const add = function (payload) {
    setTasks([...tasks, payload]);
  };
  const remove = function (payload) {
    setTasks(tasks.filter((_, index) => index !== payload));
  };
  return (
    <TaskContext.Provider value={{ tasks, add, remove }}>
      <Todo />
    </TaskContext.Provider>
  );
}
