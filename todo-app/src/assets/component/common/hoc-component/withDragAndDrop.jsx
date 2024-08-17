/* eslint-disable react/display-name */
import { useState, useCallback } from "react";

const withDragAndDrop = (WrappedComponent) => {
  return (props) => {
    const { index, moveItem } = props;
    const [isDragging, setIsDragging] = useState(false);
    const [dragOver, setDragOver] = useState(false);

    const handleDragStart = useCallback(
      (e) => {
        setIsDragging(true);
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", index);
      },
      [index]
    );

    const handleDragEnd = useCallback(() => {
      setIsDragging(false);
    }, []);

    const handleDragOver = useCallback((e) => {
      e.preventDefault();
      setDragOver(true);
      e.dataTransfer.dropEffect = "move";
    }, []);

    const handleDragLeave = useCallback(() => {
      setDragOver(false);
    }, []);

    const handleDrop = useCallback(
      (e) => {
        e.preventDefault();
        setDragOver(false);
        const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
        moveItem(draggedIndex, index);
      },
      [moveItem, index]
    );

    return (
      <div
        className={`draggable-item ${isDragging ? "dragging" : ""} ${
          dragOver ? "drag-over" : ""
        }`}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          opacity: isDragging ? 0.1 : 1,
          border: dragOver ? "2px dashed #000" : "none",
          padding: "8px",
          margin: "4px",
          backgroundColor: "#f0f0f0",
          cursor: "move",
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withDragAndDrop;
