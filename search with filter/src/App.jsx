import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const data = [
    { name: "Rakesh", value: "Rakesh" },
    { name: "Mahesh", value: "Mahesh" },
    { name: "srujan", value: "srujan" },
    { name: "danel", value: "danel" },
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    const filteredOptions = data.filter((option) =>
      option.name.toLowerCase().includes(value.toLowerCase())
    );
    setOptions(filteredOptions);
  };

  const handleCheckboxChange = (e, option) => {
    const { checked } = e.target;

    if (checked) {
      if (selectedOptions.includes(option)) {
        // If the selected option is already selected, remove it
        setSelectedOptions((prevOptions) =>
          prevOptions.filter(
            (selectedOption) => selectedOption.name !== option.name
          )
        );
      } else {
        // If the selected option is not selected, add it
        setSelectedOptions((prevOptions) => [...prevOptions, option]);
      }
    } else {
      // If the checkbox is unchecked, remove the selected option
      setSelectedOptions((prevOptions) =>
        prevOptions.filter(
          (selectedOption) => selectedOption.name !== option.name
        )
      );
    }
  };

  const sortOptions = (options, selectedOptions) => {
    const sortedOptions = options.sort((a, b) => {
      if (selectedOptions.includes(a)) {
        return -1;
      } else if (selectedOptions.includes(b)) {
        return 1;
      } else {
        return 0;
      }
    });
    return sortedOptions;
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
        {options.length > 0 && (
          <ul>
            {sortOptions(options, selectedOptions).map((option) => (
              <li key={option.value}>
                <input
                  type={selectedOptions.includes(option) ? "checkbox" : "radio"}
                  id={option.value}
                  name={option.name}
                  onChange={(e) => {
                    handleCheckboxChange(e, option);
                  }}
                  checked={selectedOptions.includes(option)}
                />
                <label htmlFor={option.value}>{option.name}</label>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
