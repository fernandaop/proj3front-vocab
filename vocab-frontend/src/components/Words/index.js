import React from "react";
import "./index.css";

export default function Words(props) {
  const [tentativa, setTentativa] = React.useState("");
  const [tentativa1, setTentativa1] = React.useState("");
  const [tentativa2, setTentativa2] = React.useState("");
  const [tentativa3, setTentativa3] = React.useState("");
  const [tentativa4, setTentativa4] = React.useState("");
  const [tentativa5, setTentativa5] = React.useState("");
  const [tentativa6, setTentativa6] = React.useState("");

  // function compareWords(palavrausuario){
  //   for (let i = 0; i < palavra.length; i++) {
  //     if (palavra[i] === palavrausuario[i]) {
  //       comp = 1;
  //     } else {
  //       comp= -1;}
  //     return comp;
  //   }
  // }

  const entradaChang = (e) => {
    setTentativa(e.target.value);
  };

  const comparaEntrada  = (e) => {
    e.preventDefault();
    if (tentativa.length < 5) {
      alert("Digite uma palavra de 5 letras")
    } else {
    if (tentativa === props.palavra) {
      alert("Acertou!");
    } else {
      if (tentativa1 === "") {
        setTentativa1(tentativa);
      } else if (tentativa2 === "") {
        setTentativa2(tentativa);
      } else if (tentativa3 === "") {
        setTentativa3(tentativa);
      } else if (tentativa4 === "") {
        setTentativa4(tentativa);
      } else if (tentativa5 === "") {
        setTentativa5(tentativa);
      } else if (tentativa6 === "") {
        setTentativa6(tentativa);
      } else {
        alert("Você perdeu!");
      }
    }
  }
  };

  return (
  <div className="card">
  <h3 className="card-title">{props.palavra}</h3>
  <div className="tentativa">
    <div>{tentativa1[0]}</div>
    <div>{tentativa1[1]}</div>
    <div>{tentativa1[2]}</div>
    <div>{tentativa1[3]}</div>
    <div>{tentativa1[4]}</div>
  </div>
  <div className="tentativa">
    <div>{tentativa2[0]}</div>
    <div>{tentativa2[1]}</div>
    <div>{tentativa2[2]}</div>
    <div>{tentativa2[3]}</div>
    <div>{tentativa2[4]}</div>
  </div>
  <div className="tentativa">
    <div>{tentativa3[0]}</div>
    <div>{tentativa3[1]}</div>
    <div>{tentativa3[2]}</div>
    <div>{tentativa3[3]}</div>
    <div>{tentativa3[4]}</div>
  </div>
  <div className="tentativa">
    <div>{tentativa4[0]}</div>
    <div>{tentativa4[1]}</div>
    <div>{tentativa4[2]}</div>
    <div>{tentativa4[3]}</div>
    <div>{tentativa4[4]}</div>
  </div>
  <div className="tentativa">
    <div>{tentativa5[0]}</div>
    <div>{tentativa5[1]}</div>
    <div>{tentativa5[2]}</div>
    <div>{tentativa5[3]}</div>
    <div>{tentativa5[4]}</div>
  </div>
  <div className="tentativa">
    <div>{tentativa6[0]}</div>
    <div>{tentativa6[1]}</div>
    <div>{tentativa6[2]}</div>
    <div>{tentativa6[3]}</div>
    <div>{tentativa6[4]}</div>
  </div>
  <input type="text" id="name" name="name" required
       minlength="5" maxlength="5" size="10" onChange={entradaChang}></input>
  <input type={"submit"} value={"Submit"} onClick={comparaEntrada}></input>
  </div>);
}