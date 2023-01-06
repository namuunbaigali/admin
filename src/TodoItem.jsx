import { useState } from "react";

const styles = {
  edit: {
    padding: " 12.5px 20px ",
    lineHeight: "20px",
    margin: 0,
    background: "transparent",
    boxShadow: "none",
    border: 0,
    right: "0",
  },
  checkbox: {
    marginRigth: "15",
  },
  deleteIcon: {
    color: "orangered",
    fontSize: 20,
  },
};

const DeleteIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    style={styles.deleteIcon}
  >
    <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
  </svg>
);

export default function TodoItem({ todo, index, handleCheck, removeTodo }) {
  const [editing, setEditing] = useState(true);
  const [value, setValue] = useState(todo.value);
  if (editing) {
    return (
      <input
        style={styles.edit}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={(e) => {
          e.preventDefault();
          TodoItem();
        }}
      />
    );
  }
  return (
    <>
      <div>
        <input
          type="checkbox"
          style={styles.check}
          checked={todo.checked}
          onChange={() => {
            handleCheck(index);
          }}
        />

        <span style={{ textDecoration: todo.checked ? "line-through" : "" }}>
          {value}
        </span>
      </div>

      <div
        onClick={() => {
          removeTodo(index);
        }}
      >
        <DeleteIcon />
      </div>
    </>
  );
}
