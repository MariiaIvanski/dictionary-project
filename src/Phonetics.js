import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <ReactAudioPlayer src={props.phonetics.audio} controls />
      <br />/{props.phonetics.text}/
    </div>
  );
}
