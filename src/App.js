import "./App.css";
import React, { useState } from "react";

function App() {
  const [enableResp, setEnableResp] = useState(false);
  const [decValue, setDecValue] = useState(0);
  const [inputValue, setInputValue] = useState(""); //binary value inputed by user

  function checkValues(value) {
    for (var i = 0; i < value.length; i++) {
      if ((value.charAt(i) !== "0") & (value.charAt(i) !== "1"))
        return alert("please, type just 0 or 1 in text input");
    }
    converter(value);
  }

  //here the idea is using the decimal formula, so multiplying by 2^index of text, starting on rightmost position,
  //because of that its necessary to invert the value, using the counter to specify the index of the value.
  function converter(checkedValue) {
    let result = 0; //result accumulated in for section
    for (var count = 0; count < checkedValue.length + 1; count++) {
      result +=
        Number(checkedValue.charAt(checkedValue.length - 1 - count)) *
        2 ** count;
    }
    setDecValue(result);
    setEnableResp(true);
  }

  return (
    <div className="App">
      <div className="content">
        <h1 className="title">Binary to Decimal Converter</h1>
        <label for="input" className="label">
          Type the binary value:
        </label>
        <textarea
          type="number"
          id="input"
          className="input"
          wrap="hard"
          onChange={(text) => {
            setInputValue(text.target.value);
          }}
        />
        <button
          className="button"
          onClick={() => {
            checkValues(inputValue);
          }}
        >
          Convert
        </button>
        {enableResp === true ? (
          <>
            <h2 className="respose-label">Decimal value:</h2>
            <div className="response">{decValue}</div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
