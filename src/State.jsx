import { useState } from "react";
import TodoItem from "./TodoItem";

const styles = {
  wrapper: {
    width: "580px",
    margin: "0 auto",
    borderRadius: "100px",
    minHeight: "80vh",
    display: "flex",
    maxWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    fontSize: "4.5rem",
    fontWeight: 900,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "10vh",
    maxWidth: "100%",
    color: "green",
  },
  input: {
    width: "100%",
    height: 45,
    paddingLeft: 30,
    paddingRight: 60,
    borderRadius: 50,
    boxShadow: " 0 1px 6px 0 rgb(0 0 0 / 38%)",
    border: 0,
  },
  plusIcon: {
    color: "darkcyan",
    fontSize: 20,
  },
  button: {
    padding: " 12.5px 20px ",
    lineHeight: "20px",
    margin: 0,
    background: "transparent",
    boxShadow: "none",
    border: 0,
    position: "absolute",
    right: "0",
  },
  form: {
    position: "relative",
    borderRadius: 50,
    width: "100%",
    marginBottom: 40,
  },
  ul: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    width: "100%",
  },
  li: {
    borderBottom: "1px solid #aeaeae",
    padding: "17px 0",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.2 rem",
  },
};

const PlusIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    style={styles.plusIcon}
  >
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path>
  </svg>
);

export default function State() {
  const [todos, setTodos] = useState([
    { value: "Egg", checked: false },
    { value: "Bread", checked: true },
    { value: "Ham", checked: false },
  ]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    const newList = [...todos, { value: input, checked: false }];
    setTodos(newList);
    setInput("");
  };

  const EditingTodo = () => {
    const editList = [...editList];
    setTodos(editList);
    setInput("");
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((k, i) => i !== index));
  };

  const handleCheck = (index) => {
    const newList = todos.map((todo, i) => {
      if (i === index) {
        const newTodo = { ...todo };
        newTodo.checked = !newTodo.checked;
        return newTodo;
      }
      return todo;
    });
    setTodos(newList);
  };

  return (
    <>
      <div style={styles.wrapper}>
        <nav>
          <h1 style={styles.header}>todos</h1>
        </nav>
        <form
          style={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            addTodo();
          }}
        >
          <input
            style={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button type="submit" style={styles.button}>
            <PlusIcon />
          </button>
        </form>
        {/* <button onClick={addTodo} id='InputTarget'> Add</button> */}
        <ul style={styles.ul}>
          {todos.map((todo, index) => (
            <li style={styles.li} key={`list-item-${index}`}>
              <TodoItem
                todo={todo}
                handleCheck={handleCheck}
                removeTodo={removeTodo}
                index={index}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
