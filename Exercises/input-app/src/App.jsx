import Input from "./components/Input";
import React from "react";

export const userData = {
  name: "",
  email: "",
};

export default function App() {
  const nameRef = React.useRef();
  const emailRef = React.useRef();

  function handleSaveData() {
    userData.name = nameRef.current.value;
    userData.email = emailRef.current.value;

    console.log(userData);
  }

  return (
    <div id="app">
      <Input
        type="text"
        label={userData.name === "" ? "Your Name" : userData.name}
        ref={nameRef}
      />
      <Input
        type="email"
        label={userData.name === "" ? "Your Email" : userData.email}
        ref={emailRef}
      />
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
}
