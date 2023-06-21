import { useState } from "react";

const ValidationSample = () => {
  const [state, setState] = useState({
    password: "",
    clicked: false,
    validated: false,
  });

  const handleChange = (e) => {
    setState({
      ...state,
      password: e.target.value,
    });
  };

  const handleButtonClick = () => {
    setState({
      ...state,
      clicked: true,
      validated: state.password === "0000",
    });
  };

  return (
    <div>
      <input
        type="password"
        value={state.password}
        onChange={handleChange}
        className={
          state.clicked ? (state.validated ? "success" : "failure") : ""
        }
      />
      <button onClick={handleButtonClick}>검증하기</button>
    </div>
  );
};

export default ValidationSample;
