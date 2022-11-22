import React from "react";
import "./index.css";

export default function Words(props) {
  const [tentativa, setTentativa] = React.useState("");
  const [tentativa1, setTentativa1] = React.useState("");
  const [color1, setColor1] = React.useState(["gray", "gray", "gray", "gray", "gray"]);
  const [tentativa2, setTentativa2] = React.useState("");
  const [color2, setColor2] = React.useState(["gray", "gray", "gray", "gray", "gray"]);
  const [tentativa3, setTentativa3] = React.useState("");
  const [color3, setColor3] = React.useState(["gray", "gray", "gray", "gray", "gray"]);
  const [tentativa4, setTentativa4] = React.useState("");
  const [color4, setColor4] = React.useState(["gray", "gray", "gray", "gray", "gray"]);
  const [tentativa5, setTentativa5] = React.useState("");
  const [color5, setColor5] = React.useState(["gray", "gray", "gray", "gray", "gray"]);
  const [tentativa6, setTentativa6] = React.useState("");
  const [color6, setColor6] = React.useState(["gray", "gray", "gray", "gray", "gray"]);

  // function compareWords(palavrausuario){
  //   for (let i = 0; i < palavra.length; i++) {
  //     if (palavra[i] === palavrausuario[i]) {
  //       comp = 1;
  //     } else {
  //       comp= -1;}
  //     return comp;
  //   }
  // }
  function compareWords(palavrausuario, n_tentativa){
    let dicionario = ["", "", "", "", ""];
    let compara = props.palavra;
    for (let i = 0; i < props.palavra.length; i++) {
      if (compara[i] === palavrausuario[i]) {
        dicionario[i] = "green";
        compara = compara.split('');
        compara[i] = '@';
        compara = compara.join('');
      } 
    }    
    for (let i = 0; i < props.palavra.length; i++) {
      if (compara.includes(palavrausuario[i]) && (compara.split(palavrausuario[i]).length - 1) && (dicionario[i] !== "green")) {
        dicionario[i] = "yellow";
        let l_index = compara.indexOf(palavrausuario[i]);
        compara = compara.split('');
        compara[l_index] = '$';
        compara = compara.join('');
      }
      else if(dicionario[i] !== "green"){
        dicionario[i] = "gray";
      }
    }
    console.log(dicionario);
    if (n_tentativa === 1){
      setColor1(dicionario);
    } else if (n_tentativa === 2){
      setColor2(dicionario);
    } else if (n_tentativa === 3){
      setColor3(dicionario);
    } else if (n_tentativa === 4){
      setColor4(dicionario);
    } else if (n_tentativa === 5){
      setColor5(dicionario);
    } else if (n_tentativa === 6){
      setColor6(dicionario);
    }
    if (tentativa === props.palavra) {
      alert("Acertou!");
    }
  }

  const entradaChang = (e) => {
    setTentativa(e.target.value);
  };

  const comparaEntrada  = (e) => {
    e.preventDefault();
    if (tentativa.length < 5) {
      alert("Digite uma palavra de 5 letras")
    } else {
      if (tentativa1 === "") {
        setTentativa1(tentativa);
        compareWords(tentativa, 1);
      } else if (tentativa2 === "") {
        setTentativa2(tentativa);
        compareWords(tentativa, 2);
      } else if (tentativa3 === "") {
        setTentativa3(tentativa);
        compareWords(tentativa, 3);
      } else if (tentativa4 === "") {
        setTentativa4(tentativa);
        compareWords(tentativa, 4);
      } else if (tentativa5 === "") {
        setTentativa5(tentativa);
        compareWords(tentativa, 5);
      } else if (tentativa6 === "") {
        setTentativa6(tentativa);
        compareWords(tentativa, 6);
      } else {
        alert("Você perdeu!");
      }
  }
  setTentativa("");
  };
  const tentarNovamente = (e) => {
    e.preventDefault();
    props.reestart();
    setTentativa("");
    setTentativa1("");
    setTentativa2("");
    setTentativa3("");
    setTentativa4("");
    setTentativa5("");
    setTentativa6("");
    setColor1(["gray", "gray", "gray", "gray", "gray"]);
    setColor2(["gray", "gray", "gray", "gray", "gray"]);
    setColor3(["gray", "gray", "gray", "gray", "gray"]);
    setColor4(["gray", "gray", "gray", "gray", "gray"]);
    setColor5(["gray", "gray", "gray", "gray", "gray"]);
    setColor6(["gray", "gray", "gray", "gray", "gray"]);
  };

  return (
  <div className="card">
  {/* <h3 className="card-title">{props.palavra}</h3> */}
  <div className="tentativa">
    <div className={`${color1[0]}`}>{tentativa1[0]}</div>
    <div className={`${color1[1]}`}>{tentativa1[1]}</div>
    <div className={`${color1[2]}`}>{tentativa1[2]}</div>
    <div className={`${color1[3]}`}>{tentativa1[3]}</div>
    <div className={`${color1[4]}`}>{tentativa1[4]}</div>
  </div>
  <div className="tentativa">
    <div className={`${color2[0]}`}>{tentativa2[0]}</div>
    <div className={`${color2[1]}`}>{tentativa2[1]}</div>
    <div className={`${color2[2]}`}>{tentativa2[2]}</div>
    <div className={`${color2[3]}`}>{tentativa2[3]}</div>
    <div className={`${color2[4]}`}>{tentativa2[4]}</div>
  </div>
  <div className="tentativa">
    <div className={`${color3[0]}`}>{tentativa3[0]}</div>
    <div className={`${color3[1]}`}>{tentativa3[1]}</div>
    <div className={`${color3[2]}`}>{tentativa3[2]}</div>
    <div className={`${color3[3]}`}>{tentativa3[3]}</div>
    <div className={`${color3[4]}`}>{tentativa3[4]}</div>
  </div>
  <div className="tentativa">
    <div className={`${color4[0]}`}>{tentativa4[0]}</div>
    <div className={`${color4[1]}`}>{tentativa4[1]}</div>
    <div className={`${color4[2]}`}>{tentativa4[2]}</div>
    <div className={`${color4[3]}`}>{tentativa4[3]}</div>
    <div className={`${color4[4]}`}>{tentativa4[4]}</div>
  </div>
  <div className="tentativa">
    <div className={`${color5[0]}`}>{tentativa5[0]}</div>
    <div className={`${color5[1]}`}>{tentativa5[1]}</div>
    <div className={`${color5[2]}`}>{tentativa5[2]}</div>
    <div className={`${color5[3]}`}>{tentativa5[3]}</div>
    <div className={`${color5[4]}`}>{tentativa5[4]}</div>
  </div>
  <div className="tentativa">
    <div className={`${color6[0]}`}>{tentativa6[0]}</div>
    <div className={`${color6[1]}`}>{tentativa6[1]}</div>
    <div className={`${color6[2]}`}>{tentativa6[2]}</div>
    <div className={`${color6[3]}`}>{tentativa6[3]}</div>
    <div className={`${color6[4]}`}>{tentativa6[4]}</div>
  </div>
  <input type="text" id="name" name="name" required
       minLength="5" maxLength="5" size="10" value={tentativa} onChange={entradaChang}></input>
  <input type={"submit"} value={"Submit"} onClick={comparaEntrada}></input>

  <button onClick={tentarNovamente}>Jogar Novamente</button>
  </div>);
}