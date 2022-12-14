import React, { Component } from "react";
import { useState } from "react";
import Botao from "./Botao";
import "./painel.css";

function Painel() {
  let [contador, setContador] = useState(0);

  function inserir(tecla) {
    if (contador === 0) {
      setContador((contador = tecla));
      setContador(parseInt(contador));
    } else {
      setContador(contador + tecla);
    }
  }

  function relizarOperacao(tecla) {
    if (tecla === "=") {
      setContador((contador = eval(contador)));
    }

    if (tecla === "C") setContador((contador = 0));

    if (tecla === "%") setContador(eval(contador) / 100);

    if (tecla === "+/-") {
      let regex = new RegExp("(.*\\D)(.*)");
      let array = contador.toString().match(regex);
      if (array != null) {
        if (array.length <= 1) {
          setContador((contador = contador * -1));
        } else {
          if (array[2] !== null) {
            if (array[1].slice(-1) === "-") {
              array[1] = array[1].replace(/.$/, "+");
            } else if (array[1].slice(-1) === "+") {
              array[1] = array[1].replace(/.$/, "-");
            } else {
              array[2] = array[2] * -1;
            }
          }
        }
        setContador(array.slice(1).join(""));
      } else {
        setContador((contador = contador * -1));
      }
    }

    if (tecla === "<=") {
      setContador((contador = contador.toString()));
      setContador(contador.slice(0, -1));
      if (contador.length === 1) setContador((contador = 0));
    }
  }
  return (
    <div>
      <section className="painel">
        <h1 className="expressao">{contador}</h1>
        <div className="filaBotao">
          <Botao className="botaoNumeros" nome="C" onClick={relizarOperacao} />
          <Botao className="botaoNumeros" nome="%" onClick={relizarOperacao} />
          <Botao className="botaoNumeros" nome="/" onClick={inserir} />
          <Botao
            className="botaoOperadores"
            nome="<="
            onClick={relizarOperacao}
          />
        </div>
        <br></br>
        <div className="filaBotao">
          <Botao className="botaoNumeros" nome="7" onClick={inserir} />
          <Botao className="botaoNumeros" nome="8" onClick={inserir} />
          <Botao className="botaoNumeros" nome="9" onClick={inserir} />
          <Botao className="botaoOperadores" nome="*" onClick={inserir} />
        </div>
        <br></br>
        <div className="filaBotao">
          <Botao className="botaoNumeros" nome="4" onClick={inserir} />
          <Botao className="botaoNumeros" nome="5" onClick={inserir} />
          <Botao className="botaoNumeros" nome="6" onClick={inserir} />
          <Botao className="botaoOperadores" nome="-" onClick={inserir} />
        </div>
        <br></br>
        <div className="filaBotao">
          <Botao className="botaoNumeros" nome="1" onClick={inserir} />
          <Botao className="botaoNumeros" nome="2" onClick={inserir} />
          <Botao className="botaoNumeros" nome="3" onClick={inserir} />
          <Botao className="botaoOperadores" nome="+" onClick={inserir} />
        </div>
        <br></br>
        <div className="filaBotao">
          <Botao
            className="botaoNumeros"
            nome="+/-"
            onClick={relizarOperacao}
          />
          <Botao className="botaoNumeros" nome="0" onClick={inserir} />
          <Botao className="botaoNumeros" nome="." onClick={inserir} />
          <Botao className="botaoNumeros" nome="=" onClick={relizarOperacao} />
        </div>
      </section>
    </div>
  );
}

export default Painel;
