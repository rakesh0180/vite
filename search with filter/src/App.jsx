import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  console.log("🚀 ~ App ~ selectedOptions:", selectedOptions);

  const data = [
    { name: "Rakesh", value: "Rakesh" },
    { name: "Mahesh", value: "Mahesh" },
    { name: "Srujan", value: "Srujan" },
    { name: "Danel", value: "Danel" },
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value === "") {
      // If search is empty, reset to all options
      setOptions(data);
    } else {
      // Filter options based on search
      const filteredOptions = data.filter((option) =>
        option.name.toLowerCase().includes(value.toLowerCase())
      );
      setOptions(filteredOptions);
    }
  };

  const handleCheckboxChange = (e, option) => {
    const { checked } = e.target;

    if (checked) {
      // Add to selected options if not already selected
      if (!selectedOptions.some((selected) => selected.name === option.name)) {
        setSelectedOptions((prevOptions) => [...prevOptions, option]);
      }
    } else {
      // Remove from selected options
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((selected) => selected.name !== option.name)
      );
    }
  };

  const sortOptions = (options, selectedOptions) => {
    return [...options].sort((a, b) => {
      const aSelected = selectedOptions.some(
        (selected) => selected.name === a.name
      );
      const bSelected = selectedOptions.some(
        (selected) => selected.name === b.name
      );
      if (aSelected && !bSelected) return -1;
      if (!aSelected && bSelected) return 1;
      return 0;
    });
  };

  return (
    <main>
      <section>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={handleChange}
          placeholder="Search..."
        />
        {(options.length > 0 || search === "") && (
          <ul>
            {sortOptions(search === "" ? data : options, selectedOptions).map(
              (option) => (
                <li key={option.value}>
                  <input
                    type="checkbox"
                    id={option.value}
                    name={option.name}
                    onChange={(e) => handleCheckboxChange(e, option)}
                    checked={selectedOptions.some(
                      (selected) => selected.name === option.name
                    )}
                  />
                  <label htmlFor={option.value}>{option.name}</label>
                </li>
              )
            )}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
