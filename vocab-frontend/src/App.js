import "./App.css";
// import axios from "axios";
// import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Autenticacao from "./components/Autenticacao";
import Termo from "./components/Termo";
// import Dueto from "./components/Dueto";
// import Quarteto from "./components/Quarteto";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Autenticacao/>}></Route>
        <Route path="uno" element={<Termo/>}></Route>
        {/* <Route path="dueto" element={<Dueto/>}></Route>
        <Route path="quarteto" element={<Quarteto/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
