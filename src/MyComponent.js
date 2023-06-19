import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      Hello, {name}.<br /> children is {children} <br /> my favorite number{" "}
      {favoriteNumber}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "React",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
