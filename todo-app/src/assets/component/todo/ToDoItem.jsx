import React from "react";
import withDragAndDrop from "../common/hoc-component/withDragAndDrop";

const ToDoItem = ({
  editText,
  setEditText,
  handleEdit,
  handleCancel,
  handleSave,
  handleDelete,
  todo,
  index,
  editId,
}) => {
  return (
    <>
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
            <button className="delete" onClick={() => handleDelete(todo.id)}>
              Delete
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default withDragAndDrop(ToDoItem);
