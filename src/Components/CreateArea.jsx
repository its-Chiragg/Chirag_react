import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";

//to get the data from local storage

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log(list);

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

function CreateArea(props) {
  const [Note, setNote] = useState({
    title: "",
    content: "",
    time: "",
  },getLocalItems());

  function handleSubmit(event) {
    props.addNote(Note);
    setNote({
      title: "",
      content: "",
      time: "",
    });

    event.preventDefault();
  }

  function handleChange(event) {
    let { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  //add data to local storage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(Note));
  }, [Note]);

  return (
    <div className="container">
      <div className="card-body">
        <form>
          <input
            onChange={handleChange}
            value={Note.title}
            name="title"
            placeholder="Day"
          />
          <input
            className="time"
            onChange={handleChange}
            value={Note.time}
            name="time"
            placeholder="Time"
          />
          <textarea
            className="takenote"
            onChange={handleChange}
            value={Note.content}
            name="content"
            placeholder="Take a note..."
            rows="3"
          />
          <button className="addIcon" type="submit" title="Add Note" onClick={handleSubmit}>
            <AddIcon />
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateArea;
