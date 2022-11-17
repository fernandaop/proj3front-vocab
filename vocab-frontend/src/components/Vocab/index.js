import React from "react";

export default function Vocab(props) {
  return (
  <div className="card">
  <h3 className="card-title">{props.title}</h3>
  <div className="card-content">{props.children}</div>
  </div>);
}