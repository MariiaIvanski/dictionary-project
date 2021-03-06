import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        <i className="fas fa-volume-up"></i>
      </a>{" "}
      <span className="transcription">/{props.phonetics.text}/</span>
    </div>
  );
}
