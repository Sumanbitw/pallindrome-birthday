import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [year, setYear] = useState("");
  function changeHandler(event) {
    var user = event.target.value;
    for (var i = 0; i < user.length; i++) {
      if (user[i] !== user[user.length - i - 1]) {
        setYear("Not Palindrome");
      } else {
        setYear("Pallindrome");
      }
    }
  }
  return (
    <div className="App">
      <h1>Pallindrome</h1>
      <h2>Guess if the number is Pallindrome or not!</h2>
      <input onChange={changeHandler} placeholder="Enter a year" />
      <div>Number : {year}</div>
    </div>
  );
}
