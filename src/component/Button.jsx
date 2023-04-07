import React from "react";
import "../styles/Button.css";

function Button(props) {
  const isOperator = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <div
      className={`button ${
        isOperator(props.children) ? "operator" : ""
      }`.trimEnd()}
      // Se debe usar una función ya que si no lo hacemos no se está ejecutando la función, está devolviendo lo que retorna la función llamada.
      onClick={() => props.clickHandler(props.children)}
    >
      {props.children}
    </div>
  );
}
export default Button;
