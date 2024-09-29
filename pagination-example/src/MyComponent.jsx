import React from "react";
import Pagination from "./Pagination";

const MyComponent = () => {
  const fetchPostsThunk = (start, limit) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
    )
      .then((response) => {
        const total = response.headers.get("x-total-count") || 100; // Example total count from headers
        return response.json().then((data) => ({ data, total }));
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
        return { data: [], total: 0 }; // Return empty data and total on error
      });
  };

  const renderItems = (items) => (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li> // Custom rendering logic for each item (posts from JSONPlaceholder)
      ))}
    </ul>
  );

  return (
    <Pagination
      apiThunk={fetchPostsThunk} // Passing the API thunk function
      numberOfButtons={5} // Show 5 page buttons at a time
      renderItems={renderItems} // Function to render each item
      onPageChange={(start) => console.log("Start index changed to:", start)}
      onItemsPerPageChange={(size) =>
        console.log("Items per page changed to:", size)
      }
    />
  );
};

export default MyComponent;
