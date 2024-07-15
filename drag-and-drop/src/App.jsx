import React, { useState, useCallback } from "react";
// import DraggableItem from "./DraggableItem";
import "./App.css";
import DraggableItem from "./DraggableItem";
const App = () => {
  const initialData = [
    { name: "John Doe", address: "123 Main St", dob: "1990-01-01" },
    { name: "Jane Smith", address: "456 Oak Ave", dob: "1985-05-15" },
    { name: "Alice Johnson", address: "789 Pine Ln", dob: "1992-07-22" },
    { name: "Bob Brown", address: "321 Elm St", dob: "1988-03-30" },
    {
      name: "Charlie Black",
      address:
        "654 Birch Rd Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, expedita.",
      dob: "1995-10-11",
    },
    { name: "David Green", address: "987 Cedar Blvd", dob: "1993-06-25" },
    { name: "Eva White", address: "123 Spruce Dr", dob: "1980-09-12" },
    { name: "Fiona Red", address: "456 Maple St", dob: "1975-11-23" },
    { name: "George Blue", address: "789 Ash Ln", dob: "2000-04-19" },
    { name: "Hannah Yellow", address: "321 Pine Pl", dob: "1998-12-30" },
  ];

  const [items, setItems] = useState(initialData);
  console.log("🚀 ~ App ~ items:", items);

  const moveItem = useCallback(
    (fromIndex, toIndex) => {
      const updatedItems = [...items];
      const [movedItem] = updatedItems.splice(fromIndex, 1);
      updatedItems.splice(toIndex, 0, movedItem);
      setItems(updatedItems);
    },
    [items]
  );

  return (
    <div className="main-container">
      {items.map((item, index) => (
        <DraggableItem
          key={index}
          index={index}
          data={item}
          moveItem={moveItem}
        />
      ))}
    </div>
  );
};

export default App;
