import "./index.css";
import { Outlet, Link } from "react-router-dom";

export default function Appbar(props) {
  return (
    <div className="App">
        <div className="appbar">
            <Link to="/uno" className="Appbar-button">Uno</Link>
            <Link to="/dueto" className="Appbar-button">Dueto</Link>
            <Link to="/quarteto" className="Appbar-button">Quarteto</Link>
            <Outlet />
        </div>
        <h1> <span className="titlev">TERMO</span> </h1>
    </div>
  );
}