import { useState } from "react";
import "./index.css";
const Home = () => {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleClick = (context, key) => {
    if (context === "form") {
      setTodos([
        ...todos,
        { name: input, done: false, key: input + Math.random() }
      ]);
      setInput("");
    } else {
      let index = todos.findIndex(todo => {
        return todo.key === key;
      });
      toggleTodo(index);
      console.log(index);
    }
  };

  const toggleTodo = key => {
    let tempTodos = todos;
    tempTodos[key].done = !tempTodos[key].done;
    setTodos([...tempTodos]);
  };

  const deleteTodo = key => {
    let newTodos = todos.filter(todo => {
      return todo.key !== key;
    });
    setTodos([...newTodos]);
  };

  let content = (
    <div>
      <h1>Todo List</h1>
      <input onChange={handleChange} value={input} />
      <button onClick={() => handleClick("form")}>Submit</button>
      <div className="itemList">
        {todos.map(todo => (
          <div className="item" key={todo.key}>
            <div onClick={() => handleClick("todo", todo.key)}>
              <li className={todo.done ? "done" : ""}>{todo.name}</li>
            </div>
            <button onClick={() => deleteTodo(todo.key)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
  return content;
};

export default Home;
