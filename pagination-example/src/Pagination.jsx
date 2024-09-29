import React, { useEffect, useState } from "react";

const Pagination = ({
  apiThunk, // Thunk function to fetch data
  itemsPerPageOptions = [25, 50, 100, 150, 200],
  defaultPageSize = 25,
  numberOfButtons = 5, // Number of buttons to show in pagination
  renderItems, // Function to render the items
  onPageChange, // Callback for when page changes
  onItemsPerPageChange, // Callback for when items per page changes
}) => {
  const [currentStart, setCurrentStart] = useState(0); // Start index of the current items
  const [itemsPerPage, setItemsPerPage] = useState(defaultPageSize);
  const [totalItems, setTotalItems] = useState(0);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [isLoading, setIsLoading] = useState(false); // Loader state

  useEffect(() => {
    fetchData(currentStart, itemsPerPage);
  }, [currentStart, itemsPerPage]);

  // Function to fetch data using the passed thunk
  const fetchData = async (start, limit) => {
    setIsLoading(true); // Set loading to true when fetching starts
    try {
      const result = await apiThunk(start, limit); // Call the apiThunk with start and limit
      setData(result.data);
      setTotalItems(result.total);
      setIsLoading(false); // Set loading to false after fetching completes

      // Optionally trigger onPageChange callback
      if (onPageChange) {
        onPageChange(start);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setIsLoading(false);
    }
  };

  // If totalItems is 0, show at least 1 page
  const totalPages =
    totalItems === 0 ? 1 : Math.ceil(totalItems / itemsPerPage);

  const handleNext = () => {
    const newStart = currentStart + itemsPerPage;
    if (newStart < totalItems) {
      setCurrentStart(newStart);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    const newStart = currentStart - itemsPerPage;
    if (newStart >= 0) {
      setCurrentStart(newStart);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleChangePage = (page) => {
    const newStart = (page - 1) * itemsPerPage;
    setCurrentStart(newStart);
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = Number(e.target.value);
    setItemsPerPage(newItemsPerPage);
    setCurrentStart(0); // Reset to first set of items with new page size
    setCurrentPage(1); // Reset to the first page

    // Optionally trigger onItemsPerPageChange callback
    if (onItemsPerPageChange) {
      onItemsPerPageChange(newItemsPerPage);
    }
  };

  // Generate the range of page numbers to show based on currentPage
  const startPage = Math.max(currentPage - Math.floor(numberOfButtons / 2), 1);
  const endPage = Math.min(startPage + numberOfButtons - 1, totalPages);

  return (
    <div>
      <div>
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1 || isLoading} // Disable if on first page or loading
          className="pagination-button"
        >
          Previous
        </button>
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i
        ).map((page) => (
          <button
            key={page}
            onClick={() => handleChangePage(page)}
            disabled={page === currentPage || isLoading} // Disable if current page or loading
            className="pagination-button"
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages || isLoading} // Disable if on last page or loading
          className="pagination-button"
        >
          Next
        </button>
      </div>
      <select
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
        disabled={isLoading}
      >
        {itemsPerPageOptions.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>

      {/* Show loader while data is being fetched */}
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div>
          {totalItems === 0 ? <p>No items available</p> : renderItems(data)}{" "}
          {/* Render message if no data */}
        </div>
      )}
    </div>
  );
};

export default Pagination;
