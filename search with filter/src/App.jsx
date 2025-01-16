import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

// Reusable Component for Search Input
const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

// Reusable Component for Option List
const OptionList = ({ options, value, onChange, type }) => {
  return (
    <ul>
      {options.map((option) => (
        <li key={option.value}>
          <input
            type={type}
            id={option.value}
            name={option.name}
            value={option.value}
            checked={value.includes(option.value)}
            onChange={(e) => onChange(e, option)}
          />
          <label htmlFor={option.value}>{option.name}</label>
        </li>
      ))}
    </ul>
  );
};

OptionList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

// Reusable Component for Field
const Field = ({
  id,
  name,
  type,
  select,
  value,
  options,
  search,
  onChange,
  onSearchChange,
}) => {
  const filteredOptions = search
    ? options.filter((option) =>
        option.name.toLowerCase().includes(search.toLowerCase())
      )
    : options;

  const handleOptionChange = (e, option) => {
    if (select === "single") {
      onChange([option.value]);
    } else if (select === "multiple") {
      const newValue = e.target.checked
        ? [...value, option.value]
        : value.filter((val) => val !== option.value);
      onChange(newValue);
    }
  };

  return (
    <div key={id}>
      <h3>{name}</h3>
      <SearchInput
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={`Search in ${name}...`}
      />
      <OptionList
        options={filteredOptions}
        value={value}
        onChange={handleOptionChange}
        type={type}
      />
    </div>
  );
};

Field.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  select: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

function App() {
  const [fields, setFields] = useState([
    {
      id: 1,
      name: "Name",
      type: "checkbox",
      select: "single",
      value: [],
      search: "",
      options: [
        { name: "Rakesh", value: "Rakesh" },
        { name: "Mahesh", value: "Mahesh" },
        { name: "Srujan", value: "Srujan" },
        { name: "Danel", value: "Danel" },
      ],
    },
    {
      id: 2,
      name: "Bu",
      type: "checkbox",
      select: "multiple",
      value: [],
      search: "",
      options: [
        { name: "CMP", value: "CMP" },
        { name: "DDP", value: "DDP" },
        { name: "ALD", value: "ALD" },
        { name: "EPG", value: "EPG" },
      ],
    },
    {
      id: 3,
      name: "City",
      type: "radio",
      select: "single",
      value: [],
      search: "",
      options: [
        { name: "Hyderabad", value: "Hyderabad" },
        { name: "Bangalore", value: "Bangalore" },
        { name: "Chennai", value: "Chennai" },
        { name: "Mumbai", value: "Mumbai" },
      ],
    },
    {
      id: 4,
      name: "State",
      type: "radio",
      select: "multiple",
      value: [],
      search: "",
      options: [
        { name: "Telangana", value: "Telangana" },
        { name: "Karnataka", value: "Karnataka" },
        { name: "Tamil Nadu", value: "Tamil Nadu" },
        { name: "Maharashtra", value: "Maharashtra" },
      ],
    },
  ]);

  const handleSearchChange = (search, id) => {
    console.log("🚀 ~ handleSearchChange ~ search, id:", search, id);
    alert(1);
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, search } : field
      )
    );
  };

  const handleOptionChange = (value, id) => {
    setFields((prevFields) =>
      prevFields.map((field) => (field.id === id ? { ...field, value } : field))
    );
  };

  return (
    <main>
      <section>
        {fields.map((field) => (
          <Field
            key={field.id}
            id={field.id}
            name={field.name}
            type={field.type}
            select={field.select}
            value={field.value}
            options={field.options}
            search={field.search}
            onChange={(value) => handleOptionChange(value, field.id)}
            onSearchChange={(search) => handleSearchChange(search, field.id)}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
