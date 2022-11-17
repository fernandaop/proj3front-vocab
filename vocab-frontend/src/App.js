import Vocab from "./components/Vocab";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [vocabs, setVocabs] = useState([]); // Remova o array de notes que existia na versão anterior

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/notes/")
      .then((res) => setVocabs(res.data));
  }, []);
  

  return (
    <div className="App">
      <div className="appbar">
        <button className="appbar-button">Uno</button>
      </div>
      <h1>
        <span className="titlev">VOCAB</span>
      </h1>
      <Vocab title={vocabs.title}>{vocabs.content}</Vocab>
    </div>
  );
}

export default App;
