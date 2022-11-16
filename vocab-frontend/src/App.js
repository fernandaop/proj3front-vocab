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
      {vocabs.map((vocab) => (
        <Vocab title={vocab.title}>{vocab.content}</Vocab>
      ))}
    </div>
  );
}

export default App;
