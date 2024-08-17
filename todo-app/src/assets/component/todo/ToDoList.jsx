import { useEffect, useId, useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ data }) => {
  const [add, setAdd] = useState("");
  const [todoList, setTodoList] = useState(data);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [error, setError] = useState({});

  useEffect(() => {
    if (editId) {
      setAdd("");
    }
  }, [editId]);

  const id = useId();

  const handleAdd = () => {
    if (add) {
      const newItem = {
        id,
        name: add,
      };
      setTodoList([...todoList, newItem]);
      setAdd("");
      setError({});
    } else {
      setError({ add: "field should not be empty" });
    }
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.name);
  };

  const handleDelete = (id) => {
    const filterData = todoList.filter((ele) => ele.id !== id);
    setTodoList(filterData);
  };

  const handleSave = (data) => {
    const updateData = todoList.map((todo) => {
      return todo.id === data.id ? { ...todo, name: editText } : todo;
    });
    setTodoList(updateData);
    setEditId(null);
    setEditText("");
  };

  const handleCancel = () => {
    setEditId(null);
    setEditText("");
  };

  const handleInputChange = (e) => {
    setAdd(e.target.value);
    setError({});
  };

  const moveItem = (fromIndex, toIndex) => {
    const updatedTodoList = [...todoList];
    const movedTodoItem = updatedTodoList.splice(fromIndex, 1)[0];
    updatedTodoList.splice(toIndex, 0, movedTodoItem);
    setTodoList(updatedTodoList);
  };

  return (
    <div className="todo-container">
      <div className="add-section">
        <div className="input-container">
          <input
            type="text"
            name="add"
            id=""
            value={add}
            onChange={(e) => {
              handleInputChange(e);
            }}
            disabled={editId}
          />
          {error.add && (
            <label htmlFor="add" className="error">
              {error.add}
            </label>
          )}
        </div>

        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="operation-section">
        {todoList?.map((todo, index) => (
          <ToDoItem
            editText={editText}
            setEditText={setEditText}
            handleEdit={handleEdit}
            handleCancel={handleCancel}
            handleSave={handleSave}
            handleDelete={handleDelete}
            todo={todo}
            index={index}
            editId={editId}
            key={todo.id}
            moveItem={moveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
