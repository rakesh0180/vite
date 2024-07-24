import PropTypes from "prop-types";

const USD = ({ amount }) => {
  return <div>USD {amount && amount * 0.012}</div>;
};

USD.propTypes = {
  amount: PropTypes.number,
};

USD.defaultProps = {
  amount: "",
};
export default USD;
