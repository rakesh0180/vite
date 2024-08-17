import { useEffect, useId, useState } from "react";

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
        {todoList?.map((todo) => (
          <div key={todo.id} className="name-row">
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  className="name"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button className="save" onClick={() => handleSave(todo)}>
                  Save
                </button>
                <button className="cancel" onClick={handleCancel}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <p className="name">{todo.name}</p>
                <button className="edit" onClick={() => handleEdit(todo)}>
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
