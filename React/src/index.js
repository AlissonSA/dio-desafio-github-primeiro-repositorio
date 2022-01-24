import React from "react";
import reactDom from "react-dom";
import "./styles.css"

function primeiroJSX() {
  return (
    <div className="teste">
      Alisson Albuquerque - Introdução ao ReactJS
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      {primeiroJSX()}
    </div>
  )
}

const rootElement = document.getElementById("root")
reactDom.render(<App />, rootElement)
