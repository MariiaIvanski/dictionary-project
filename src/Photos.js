import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4">
                {" "}
                <img
                  src={photo.src.tiny}
                  key={index}
                  className="img-fluid"
                  alt="illustaration"
                />{" "}
              </div>
            );
          })}
        </div>{" "}
      </section>
    );
  } else {
    return null;
  }
}
