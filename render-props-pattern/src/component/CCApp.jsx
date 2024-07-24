import PropTypes from "prop-types";
import { useState } from "react";

const CCApp = ({ render }) => {
  const [amount, setAmount] = useState(null);

  return (
    <div>
      <h1>Price Converter</h1>
      <label htmlFor="currency"> INR </label>
      <input
        type="text"
        name="currency"
        id="currency"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      {render(amount)}
    </div>
  );
};

CCApp.propTypes = {
  render: PropTypes.func,
};

CCApp.defaultProps = {};

export default CCApp;
