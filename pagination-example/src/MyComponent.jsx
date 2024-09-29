import React from "react";
import Pagination from "./Pagination";

const MyComponent = () => {
  const renderItems = (items) =>
    items.map((item) => (
      <div key={item.id}>{item.name}</div> // Custom item rendering
    ));

  return (
    <Pagination
      renderItems={renderItems}
      numberOfButtons={5} // Example: Show 5 page buttons
      onPageChange={(start) => console.log("Start index changed to:", start)}
      onItemsPerPageChange={(size) =>
        console.log("Items per page changed to:", size)
      }
    />
  );
};

export default MyComponent;
