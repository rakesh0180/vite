// DraggableItem.js

import React from "react";
import withDragAndDrop from "./withDragAndDrop";

const DraggableItem = ({ data }) => {
  return (
    <div className="item-card">
      <p>
        <strong>Name:</strong> {data.name}
      </p>
      <p>
        <strong>Address:</strong> {data.address}
      </p>
      <p>
        <strong>DOB:</strong> {data.dob}
      </p>
    </div>
  );
};

export default withDragAndDrop(DraggableItem);
