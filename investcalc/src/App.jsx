import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

const initialIinputs = {
  initialInvestment: 750000,
  annualInvestment: 300000,
  expectedReturn: 5,
  duration: 5,
};
function App() {
  const [userInput, setUserInput] = useState({ ...initialIinputs });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue,
    }));
  }
  return (
    <>
      <Header />

      <UserInput handleChange={handleChange} userInput={userInput} />
      {inputIsValid ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than zero</p>
      )}
    </>
  );
}

export default App;
