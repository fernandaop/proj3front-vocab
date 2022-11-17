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

  function dicio_letras() {
    let arr = [];
    for (let chave in props.palavra) {
        let char = props.palavra[chave].toLowerCase();
        if (arr[char] !== undefined) { arr[char]++; }
        else { arr[char] = 1; }
    }
    return arr;
}
  console.log(dicio_letras());

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
    {(tentativa1.length > 0 && props.palavra[0] === tentativa1[0]) ? <div className="mudaCor">{tentativa1[0]}</div> : (tentativa1.length > 0 && props.palavra.includes(tentativa1[0])) ? <div className="mudaCor2">{tentativa1[0]}</div> : <div>{tentativa1[0]}</div>}
    {(tentativa1.length > 0 && props.palavra[1] === tentativa1[1]) ? <div className="mudaCor">{tentativa1[1]}</div> : (tentativa1.length > 0 && props.palavra.includes(tentativa1[1])) ? <div className="mudaCor2">{tentativa1[1]}</div> : <div>{tentativa1[1]}</div>}
    {(tentativa1.length > 0 && props.palavra[2] === tentativa1[2]) ? <div className="mudaCor">{tentativa1[2]}</div> : (tentativa1.length > 0 && props.palavra.includes(tentativa1[2])) ? <div className="mudaCor2">{tentativa1[2]}</div> : <div>{tentativa1[2]}</div>}
    {(tentativa1.length > 0 && props.palavra[3] === tentativa1[3]) ? <div className="mudaCor">{tentativa1[3]}</div> : (tentativa1.length > 0 && props.palavra.includes(tentativa1[3])) ? <div className="mudaCor2">{tentativa1[3]}</div> : <div>{tentativa1[3]}</div>}
    {(tentativa1.length > 0 && props.palavra[4] === tentativa1[4]) ? <div className="mudaCor">{tentativa1[4]}</div> : (tentativa1.length > 0 && props.palavra.includes(tentativa1[4])) ? <div className="mudaCor2">{tentativa1[4]}</div> : <div>{tentativa1[4]}</div>}
  </div>
  <div className="tentativa">
    {(tentativa2.length > 0 && props.palavra[0] === tentativa2[0]) ? <div className="mudaCor">{tentativa2[0]}</div> : (tentativa2.length > 0 && props.palavra.includes(tentativa2[0])) ? <div className="mudaCor2">{tentativa2[0]}</div> : <div>{tentativa2[0]}</div>}
    {(tentativa2.length > 0 && props.palavra[1] === tentativa2[1]) ? <div className="mudaCor">{tentativa2[1]}</div> : (tentativa2.length > 0 && props.palavra.includes(tentativa2[1])) ? <div className="mudaCor2">{tentativa2[1]}</div> : <div>{tentativa2[1]}</div>}
    {(tentativa2.length > 0 && props.palavra[2] === tentativa2[2]) ? <div className="mudaCor">{tentativa2[2]}</div> : (tentativa2.length > 0 && props.palavra.includes(tentativa2[2])) ? <div className="mudaCor2">{tentativa2[2]}</div> : <div>{tentativa2[2]}</div>}
    {(tentativa2.length > 0 && props.palavra[3] === tentativa2[3]) ? <div className="mudaCor">{tentativa2[3]}</div> : (tentativa2.length > 0 && props.palavra.includes(tentativa2[3])) ? <div className="mudaCor2">{tentativa2[3]}</div> : <div>{tentativa2[3]}</div>}
    {(tentativa2.length > 0 && props.palavra[4] === tentativa2[4]) ? <div className="mudaCor">{tentativa2[4]}</div> : (tentativa2.length > 0 && props.palavra.includes(tentativa2[4])) ? <div className="mudaCor2">{tentativa2[4]}</div> : <div>{tentativa2[4]}</div>}
  </div>
  <div className="tentativa">
    {(tentativa3.length > 0 && props.palavra[0] === tentativa3[0]) ? <div className="mudaCor">{tentativa3[0]}</div> : (tentativa3.length > 0 && props.palavra.includes(tentativa3[0])) ? <div className="mudaCor2">{tentativa3[0]}</div> : <div>{tentativa3[0]}</div>}
    {(tentativa3.length > 0 && props.palavra[1] === tentativa3[1]) ? <div className="mudaCor">{tentativa3[1]}</div> : (tentativa3.length > 0 && props.palavra.includes(tentativa3[1])) ? <div className="mudaCor2">{tentativa3[1]}</div> : <div>{tentativa3[1]}</div>}
    {(tentativa3.length > 0 && props.palavra[2] === tentativa3[2]) ? <div className="mudaCor">{tentativa3[2]}</div> : (tentativa3.length > 0 && props.palavra.includes(tentativa3[2])) ? <div className="mudaCor2">{tentativa3[2]}</div> : <div>{tentativa3[2]}</div>}
    {(tentativa3.length > 0 && props.palavra[3] === tentativa3[3]) ? <div className="mudaCor">{tentativa3[3]}</div> : (tentativa3.length > 0 && props.palavra.includes(tentativa3[3])) ? <div className="mudaCor2">{tentativa3[3]}</div> : <div>{tentativa3[3]}</div>}
    {(tentativa3.length > 0 && props.palavra[4] === tentativa3[4]) ? <div className="mudaCor">{tentativa3[4]}</div> : (tentativa3.length > 0 && props.palavra.includes(tentativa3[4])) ? <div className="mudaCor2">{tentativa3[4]}</div> : <div>{tentativa3[4]}</div>}
  </div>
  <div className="tentativa">
    {(tentativa4.length > 0 && props.palavra[0] === tentativa4[0]) ? <div className="mudaCor">{tentativa4[0]}</div> : (tentativa4.length > 0 && props.palavra.includes(tentativa4[0])) ? <div className="mudaCor2">{tentativa4[0]}</div> : <div>{tentativa4[0]}</div>}
    {(tentativa4.length > 0 && props.palavra[1] === tentativa4[1]) ? <div className="mudaCor">{tentativa4[1]}</div> : (tentativa4.length > 0 && props.palavra.includes(tentativa4[1])) ? <div className="mudaCor2">{tentativa4[1]}</div> : <div>{tentativa4[1]}</div>}
    {(tentativa4.length > 0 && props.palavra[2] === tentativa4[2]) ? <div className="mudaCor">{tentativa4[2]}</div> : (tentativa4.length > 0 && props.palavra.includes(tentativa4[2])) ? <div className="mudaCor2">{tentativa4[2]}</div> : <div>{tentativa4[2]}</div>}
    {(tentativa4.length > 0 && props.palavra[3] === tentativa4[3]) ? <div className="mudaCor">{tentativa4[3]}</div> : (tentativa4.length > 0 && props.palavra.includes(tentativa4[3])) ? <div className="mudaCor2">{tentativa4[3]}</div> : <div>{tentativa4[3]}</div>}
    {(tentativa4.length > 0 && props.palavra[4] === tentativa4[4]) ? <div className="mudaCor">{tentativa4[4]}</div> : (tentativa4.length > 0 && props.palavra.includes(tentativa4[4])) ? <div className="mudaCor2">{tentativa4[4]}</div> : <div>{tentativa4[4]}</div>}
  </div>
  <div className="tentativa">
    {(tentativa5.length > 0 && props.palavra[0] === tentativa5[0]) ? <div className="mudaCor">{tentativa5[0]}</div> : (tentativa5.length > 0 && props.palavra.includes(tentativa5[0])) ? <div className="mudaCor2">{tentativa5[0]}</div> : <div>{tentativa5[0]}</div>}
    {(tentativa5.length > 0 && props.palavra[1] === tentativa5[1]) ? <div className="mudaCor">{tentativa5[1]}</div> : (tentativa5.length > 0 && props.palavra.includes(tentativa5[1])) ? <div className="mudaCor2">{tentativa5[1]}</div> : <div>{tentativa5[1]}</div>}
    {(tentativa5.length > 0 && props.palavra[2] === tentativa5[2]) ? <div className="mudaCor">{tentativa5[2]}</div> : (tentativa5.length > 0 && props.palavra.includes(tentativa5[2])) ? <div className="mudaCor2">{tentativa5[2]}</div> : <div>{tentativa5[2]}</div>}
    {(tentativa5.length > 0 && props.palavra[3] === tentativa5[3]) ? <div className="mudaCor">{tentativa5[3]}</div> : (tentativa5.length > 0 && props.palavra.includes(tentativa5[3])) ? <div className="mudaCor2">{tentativa5[3]}</div> : <div>{tentativa5[3]}</div>}
    {(tentativa5.length > 0 && props.palavra[4] === tentativa5[4]) ? <div className="mudaCor">{tentativa5[4]}</div> : (tentativa5.length > 0 && props.palavra.includes(tentativa5[4])) ? <div className="mudaCor2">{tentativa5[4]}</div> : <div>{tentativa5[4]}</div>}
  </div>
  <div className="tentativa">
    {(tentativa6.length > 0 && props.palavra[0] === tentativa6[0]) ? <div className="mudaCor">{tentativa6[0]}</div> : (tentativa6.length > 0 && props.palavra.includes(tentativa6[0])) ? <div className="mudaCor2">{tentativa6[0]}</div> : <div>{tentativa6[0]}</div>}
    {(tentativa6.length > 0 && props.palavra[1] === tentativa6[1]) ? <div className="mudaCor">{tentativa6[1]}</div> : (tentativa6.length > 0 && props.palavra.includes(tentativa6[1])) ? <div className="mudaCor2">{tentativa6[1]}</div> : <div>{tentativa6[1]}</div>}
    {(tentativa6.length > 0 && props.palavra[2] === tentativa6[2]) ? <div className="mudaCor">{tentativa6[2]}</div> : (tentativa6.length > 0 && props.palavra.includes(tentativa6[2])) ? <div className="mudaCor2">{tentativa6[2]}</div> : <div>{tentativa6[2]}</div>}
    {(tentativa6.length > 0 && props.palavra[3] === tentativa6[3]) ? <div className="mudaCor">{tentativa6[3]}</div> : (tentativa6.length > 0 && props.palavra.includes(tentativa6[3])) ? <div className="mudaCor2">{tentativa6[3]}</div> : <div>{tentativa6[3]}</div>}
    {(tentativa6.length > 0 && props.palavra[4] === tentativa6[4]) ? <div className="mudaCor">{tentativa6[4]}</div> : (tentativa6.length > 0 && props.palavra.includes(tentativa6[4])) ? <div className="mudaCor2">{tentativa6[4]}</div> : <div>{tentativa6[4]}</div>}
  </div>
  <input type="text" id="name" name="name" required
       minLength="5" maxLength="5" size="10" onChange={entradaChang}></input>
  <input type={"submit"} value={"Submit"} onClick={comparaEntrada}></input>
  </div>);
}