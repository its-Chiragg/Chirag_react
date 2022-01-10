import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ModeEditIcon from "@material-ui/icons/Edit";

function Note(props) {
  return (
    <div className="container">
      <div className="card-body">
        <div className="note">
          <h3 className="task">{props.title}</h3>

          <button
            className="btn dltBtn"
            type="submit"
            title="Delete"
            onClick={() => {
              props.deleteNote(props.id);
            }}
          >
            <DeleteOutlineIcon />
          </button>

          <button className="btn dltBtn" type="submit" title="Edit">
            <ModeEditIcon />
          </button>

          <p className="task mt-4">{props.content}</p>
          <p className="task">{props.time}</p>
        </div>
      </div>
    </div>
  );
}

export default Note;
