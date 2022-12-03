import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Autenticacao from "./components/Autenticacao";
import Termo from "./components/Termo";
import Termo2 from "./components/Termo2";
// import Quarteto from "./components/Quarteto";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Autenticacao/>}></Route>
        <Route path="uno" element={<Termo/>}></Route>
        <Route path="dueto" element={<Termo2/>}></Route>
        {/* <Route path="quarteto" element={<Quarteto/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
