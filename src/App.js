import "./App.css";
import Button from "./component/Button";
import Display from "./component/Display";
import ButtonClear from "./component/ButtonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addInput = (value) => {
    setInput(input + value);
  };

  const equal = (value) => {
    //Verifica la validez de la operacion
    try {
      if (input) setInput(evaluate(input));
      //Si ocurre un error se maneja con el catch
    } catch (e) {
      //Muestra el mensaje de error en pantalla
      setInput("Error");
      //Luego de 2 segundos limpia la pantalla
      setTimeout(() => setInput(""), 1000);
    }
  };
  return (
    <div className="App">
      <h1 className="title">REACT CALCULATOR</h1>
      <div className="container">
        <Display input={input} />
        <div className="row">
          <Button clickHandler={addInput}>1</Button>
          <Button clickHandler={addInput}>2</Button>
          <Button clickHandler={addInput}>3</Button>
          <Button clickHandler={addInput}>+</Button>
        </div>
        <div className="row">
          <Button clickHandler={addInput}>4</Button>
          <Button clickHandler={addInput}>5</Button>
          <Button clickHandler={addInput}>6</Button>
          <Button clickHandler={addInput}>-</Button>
        </div>
        <div className="row">
          <Button clickHandler={addInput}>7</Button>
          <Button clickHandler={addInput}>8</Button>
          <Button clickHandler={addInput}>9</Button>
          <Button clickHandler={addInput}>*</Button>
        </div>
        <div className="row">
          <Button clickHandler={equal}>=</Button>
          <Button clickHandler={addInput}>0</Button>
          <Button clickHandler={addInput}>.</Button>
          <Button clickHandler={addInput}>/</Button>
        </div>
        <div className="row">
          <ButtonClear clickHandler={() => setInput("")}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
