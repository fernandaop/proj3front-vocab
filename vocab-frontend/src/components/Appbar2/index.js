import "./index.css";
import { Outlet, Link } from "react-router-dom";

export default function Appbar(props) {
  return (
    <div className="App">
        <div className="appbar">
            <Link to="/dueto" state={props.state} className="Appbar-button-2">Dueto</Link>
            {/* <Link to="/quarteto" className="Appbar-button-2">Quarteto</Link> */}
            <Outlet />
        </div>
        <h1> <span className="titlev">VOCAB</span> </h1>
    </div>
  );
}