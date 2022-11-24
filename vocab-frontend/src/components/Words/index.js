import React, { useEffect, useRef } from "react";
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
  const [letra1, setLetra1] = React.useState("");
  const [letra2, setLetra2] = React.useState("");
  const [letra3, setLetra3] = React.useState("");
  const [letra4, setLetra4] = React.useState("");
  const [letra5, setLetra5] = React.useState("");
  const letra1Flag = useRef(null);
  const letra2Flag = useRef(null);
  const letra3Flag = useRef(null);
  const letra4Flag = useRef(null);
  const letra5Flag = useRef(null);
  const submitFlag = useRef(null);

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
      if (color6 !== ["green", "green", "green", "green", "green"]){
        alert("Você perdeu!");
      }
    }
    if (tentativa === props.palavra) {
      alert("Acertou!");
    }
  }

  const letra1Change = (e) => {
    setLetra1(e.target.value);
    if (e.target.value.length === 1) {
      letra2Flag.current.focus();
    } else {
      letra1Flag.current.focus();
    }
  };
  const letra2Change = (e) => {
    setLetra2(e.target.value);
    if (e.target.value.length === 1) {
      letra3Flag.current.focus();
    } else {
      letra1Flag.current.focus();
    }
  };
  const letra3Change = (e) => {
    setLetra3(e.target.value);
    if (e.target.value.length === 1) {
      letra4Flag.current.focus();
    } else {
      letra2Flag.current.focus();
    }
  };
  const letra4Change = (e) => {
    setLetra4(e.target.value);
    if (e.target.value.length === 1) {
      letra5Flag.current.focus();
    } else {
      letra3Flag.current.focus();
    }
  };
  const letra5Change = (e) => {
    setLetra5(e.target.value);
    if (e.target.value.length === 1) {
      setTentativa(letra1 + letra2 + letra3 + letra4 + e.target.value);
      submitFlag.current.focus();
    } else {
      letra4Flag.current.focus();
    }
  };

  // function removerAcentos(palavra) {
  //   for(var i = 0; i < palavra.length; i++) {
  //     palavra = palavra.replace(new RegExp('[áàâã]','gi'), 'a');
  //     palavra = palavra.replace(new RegExp('[éèê]','gi'), 'e');
  //     palavra = palavra.replace(new RegExp('[íìî]','gi'), 'i');
  //     palavra = palavra.replace(new RegExp('[óòôõ]','gi'), 'o');
  //     palavra = palavra.replace(new RegExp('[úùû]','gi'), 'u');
  //     palavra = palavra.replace(new RegExp('[ç]','gi'), 'c');
  //   }
  //   return palavra;
  // };

  function comparaEntrada (e) {
    e.preventDefault();
    console.log("tentativa: " + tentativa);
    if (e.keyCode === 13) {
      setLetra1("");
      setLetra2("");
      setLetra3("");
      setLetra4("");
      setLetra5("");
      letra1Flag.current.focus();
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
        }
      setTentativa("");
    }
  } else if(e.keyCode === 8){
    letra5Flag.current.focus();
  } else {
    //pass
  }
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
    letra1Flag.current.focus();
    setLetra1("");
    setLetra2("");
    setLetra3("");
    setLetra4("");
    setLetra5("");
  };

  function inputOrTentativa1() {
    if(tentativa1 === ""){
      return ( <div className="espaco">
      <input className="entrada" type="text" id="letra1" ref={letra1Flag} name="letra1" required
          minLength="1" maxLength="1" size="3" value={letra1} onChange={letra1Change} autoFocus></input>
      <input className="entrada" type="text" id="letra2" ref={letra2Flag} name="letra2" required
          minLength="1" maxLength="1" size="3" value={letra2} onChange={letra2Change}></input>
      <input className="entrada" type="text" id="letra3" ref={letra3Flag} name="letra3" required
            minLength="1" maxLength="1" size="3" value={letra3} onChange={letra3Change}></input>
      <input className="entrada" type="text" id="letra4" ref={letra4Flag} name="letra4" required
            minLength="1" maxLength="1" size="3" value={letra4} onChange={letra4Change}></input>
      <input className="entrada" type="text" id="letra5" ref={letra5Flag} name="letra5" required
            minLength="1" maxLength="1" size="3" value={letra5} onChange={letra5Change}></input>
    </div>);
    }else{
      return (
        <div className="tentativa">
        <div className={`${color1[0]}`}>{tentativa1[0]}</div>
        <div className={`${color1[1]}`}>{tentativa1[1]}</div>
        <div className={`${color1[2]}`}>{tentativa1[2]}</div>
        <div className={`${color1[3]}`}>{tentativa1[3]}</div>
        <div className={`${color1[4]}`}>{tentativa1[4]}</div>
      </div>
      );
    }
  }
  function inputOrTentativa2() {
    if(tentativa1 !=="" && tentativa2 === ""){
      return ( <div className="espaco">
      <input className="entrada" type="text" id="letra1" ref={letra1Flag} name="letra1" required
          minLength="1" maxLength="1" size="3" value={letra1} onChange={letra1Change} autoFocus></input>
      <input className="entrada" type="text" id="letra2" ref={letra2Flag} name="letra2" required
          minLength="1" maxLength="1" size="3" value={letra2} onChange={letra2Change}></input>
      <input className="entrada" type="text" id="letra3" ref={letra3Flag} name="letra3" required
            minLength="1" maxLength="1" size="3" value={letra3} onChange={letra3Change}></input>
      <input className="entrada" type="text" id="letra4" ref={letra4Flag} name="letra4" required
            minLength="1" maxLength="1" size="3" value={letra4} onChange={letra4Change}></input>
      <input className="entrada" type="text" id="letra5" ref={letra5Flag} name="letra5" required
            minLength="1" maxLength="1" size="3" value={letra5} onChange={letra5Change}></input>
    </div>);
    }else{
      return (
        <div className="tentativa">
        <div className={`${color2[0]}`}>{tentativa2[0]}</div>
        <div className={`${color2[1]}`}>{tentativa2[1]}</div>
        <div className={`${color2[2]}`}>{tentativa2[2]}</div>
        <div className={`${color2[3]}`}>{tentativa2[3]}</div>
        <div className={`${color2[4]}`}>{tentativa2[4]}</div>
      </div>
      );
    }
  }
  function inputOrTentativa3() {
    if(tentativa1 !=="" && tentativa2 !== "" && tentativa3 === ""){
      return ( <div className="espaco">
      <input className="entrada" type="text" id="letra1" ref={letra1Flag} name="letra1" required
          minLength="1" maxLength="1" size="3" value={letra1} onChange={letra1Change} autoFocus></input>
      <input className="entrada" type="text" id="letra2" ref={letra2Flag} name="letra2" required
          minLength="1" maxLength="1" size="3" value={letra2} onChange={letra2Change}></input>
      <input className="entrada" type="text" id="letra3" ref={letra3Flag} name="letra3" required
            minLength="1" maxLength="1" size="3" value={letra3} onChange={letra3Change}></input>
      <input className="entrada" type="text" id="letra4" ref={letra4Flag} name="letra4" required
            minLength="1" maxLength="1" size="3" value={letra4} onChange={letra4Change}></input>
      <input className="entrada" type="text" id="letra5" ref={letra5Flag} name="letra5" required
            minLength="1" maxLength="1" size="3" value={letra5} onChange={letra5Change}></input>
    </div>);
    }else{
      return (
        <div className="tentativa">
        <div className={`${color3[0]}`}>{tentativa3[0]}</div>
        <div className={`${color3[1]}`}>{tentativa3[1]}</div>
        <div className={`${color3[2]}`}>{tentativa3[2]}</div>
        <div className={`${color3[3]}`}>{tentativa3[3]}</div>
        <div className={`${color3[4]}`}>{tentativa3[4]}</div>
      </div>
      );
    }
  }
  function inputOrTentativa4() {
    if(tentativa1 !=="" && tentativa2 !== "" && tentativa3 !== "" && tentativa4 === ""){
      return ( <div className="espaco">
      <input className="entrada" type="text" id="letra1" ref={letra1Flag} name="letra1" required
          minLength="1" maxLength="1" size="3" value={letra1} onChange={letra1Change} autoFocus></input>
      <input className="entrada" type="text" id="letra2" ref={letra2Flag} name="letra2" required
          minLength="1" maxLength="1" size="3" value={letra2} onChange={letra2Change}></input>
      <input className="entrada" type="text" id="letra3" ref={letra3Flag} name="letra3" required
            minLength="1" maxLength="1" size="3" value={letra3} onChange={letra3Change}></input>
      <input className="entrada" type="text" id="letra4" ref={letra4Flag} name="letra4" required
            minLength="1" maxLength="1" size="3" value={letra4} onChange={letra4Change}></input>
      <input className="entrada" type="text" id="letra5" ref={letra5Flag} name="letra5" required
            minLength="1" maxLength="1" size="3" value={letra5} onChange={letra5Change}></input>
    </div>);
    }else{
      return (
        <div className="tentativa">
        <div className={`${color4[0]}`}>{tentativa4[0]}</div>
        <div className={`${color4[1]}`}>{tentativa4[1]}</div>
        <div className={`${color4[2]}`}>{tentativa4[2]}</div>
        <div className={`${color4[3]}`}>{tentativa4[3]}</div>
        <div className={`${color4[4]}`}>{tentativa4[4]}</div>
      </div>
      );
    }
  }
  function inputOrTentativa5() {
    if(tentativa1 !=="" && tentativa2 !== "" && tentativa3 !== "" && tentativa4 !== "" && tentativa5 === ""){
      return ( <div className="espaco">
      <input className="entrada" type="text" id="letra1" ref={letra1Flag} name="letra1" required
          minLength="1" maxLength="1" size="3" value={letra1} onChange={letra1Change} autoFocus></input>
      <input className="entrada" type="text" id="letra2" ref={letra2Flag} name="letra2" required
          minLength="1" maxLength="1" size="3" value={letra2} onChange={letra2Change}></input>
      <input className="entrada" type="text" id="letra3" ref={letra3Flag} name="letra3" required
            minLength="1" maxLength="1" size="3" value={letra3} onChange={letra3Change}></input>
      <input className="entrada" type="text" id="letra4" ref={letra4Flag} name="letra4" required
            minLength="1" maxLength="1" size="3" value={letra4} onChange={letra4Change}></input>
      <input className="entrada" type="text" id="letra5" ref={letra5Flag} name="letra5" required
            minLength="1" maxLength="1" size="3" value={letra5} onChange={letra5Change}></input>
    </div>);
    }else{
      return (
        <div className="tentativa">
        <div className={`${color5[0]}`}>{tentativa5[0]}</div>
        <div className={`${color5[1]}`}>{tentativa5[1]}</div>
        <div className={`${color5[2]}`}>{tentativa5[2]}</div>
        <div className={`${color5[3]}`}>{tentativa5[3]}</div>
        <div className={`${color5[4]}`}>{tentativa5[4]}</div>
      </div>
      );
    }
  }
  function inputOrTentativa6() {
    if(tentativa1 !=="" && tentativa2 !== "" && tentativa3 !== "" && tentativa4 !== "" && tentativa5 !== "" && tentativa6 === ""){
      return ( <div className="espaco">
      <input className="entrada" type="text" id="letra1" ref={letra1Flag} name="letra1" required
          minLength="1" maxLength="1" size="3" value={letra1} onChange={letra1Change} autoFocus></input>
      <input className="entrada" type="text" id="letra2" ref={letra2Flag} name="letra2" required
          minLength="1" maxLength="1" size="3" value={letra2} onChange={letra2Change}></input>
      <input className="entrada" type="text" id="letra3" ref={letra3Flag} name="letra3" required
            minLength="1" maxLength="1" size="3" value={letra3} onChange={letra3Change}></input>
      <input className="entrada" type="text" id="letra4" ref={letra4Flag} name="letra4" required
            minLength="1" maxLength="1" size="3" value={letra4} onChange={letra4Change}></input>
      <input className="entrada" type="text" id="letra5" ref={letra5Flag} name="letra5" required
            minLength="1" maxLength="1" size="3" value={letra5} onChange={letra5Change}></input>
    </div>);
    }else{
      return (
        <div className="tentativa">
        <div className={`${color6[0]}`}>{tentativa6[0]}</div>
        <div className={`${color6[1]}`}>{tentativa6[1]}</div>
        <div className={`${color6[2]}`}>{tentativa6[2]}</div>
        <div className={`${color6[3]}`}>{tentativa6[3]}</div>
        <div className={`${color6[4]}`}>{tentativa6[4]}</div>
      </div>
      );
    }
  }

  return (
  <div className="card">
  <h3 className="card-title">{props.palavra}</h3>
  {inputOrTentativa1()}
  {inputOrTentativa2()}
  {inputOrTentativa3()}
  {inputOrTentativa4()}
  {inputOrTentativa5()}
  {inputOrTentativa6()}
  <input className="btn" type={"submit"} value={"Enviar"} ref={submitFlag} onKeyDown={comparaEntrada} onClick={comparaEntrada}></input>

  <button className="btn" onClick={tentarNovamente}>Jogar Novamente</button>
  </div>);
}