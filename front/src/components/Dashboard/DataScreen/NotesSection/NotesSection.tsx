import React from "react";
import "./NotesSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";

// TODO:
// 1. set max words in a note (in order for the notes not to grow)
// 2. remove background from is editable (ot change to an invisible input (same yellow background color but without border))

const NotesSection = () => {
  const crossTask = () => {};

  return (
    <div className="notes-section-main-box">
      <ul className="notes-board">
        <li>
          <button onClick={crossTask}>
            <FontAwesomeIcon icon={faThumbtack} className="task-pin" />
          </button>
          <p contentEditable></p>
        </li>
        <li>
          <button onClick={crossTask}>
            <FontAwesomeIcon icon={faThumbtack} className="task-pin" />
          </button>
          <p contentEditable></p>
        </li>
        <li>
          <button onClick={crossTask}>
            <FontAwesomeIcon icon={faThumbtack} className="task-pin" />
          </button>
          <p contentEditable></p>
        </li>
        <li>
          <button onClick={crossTask}>
            <FontAwesomeIcon icon={faThumbtack} className="task-pin" />
          </button>
          <p contentEditable></p>
        </li>
        <li>
          <button onClick={crossTask}>
            <FontAwesomeIcon icon={faThumbtack} className="task-pin" />
          </button>
          <p contentEditable></p>
        </li>
        <li>
          <button onClick={crossTask}>
            <FontAwesomeIcon icon={faThumbtack} className="task-pin" />
          </button>
          <p contentEditable></p>
        </li>
        <li>
          <button onClick={crossTask}>
            <FontAwesomeIcon icon={faThumbtack} className="task-pin" />
          </button>
          <p contentEditable></p>
        </li>
        <li>
          <button onClick={crossTask}>
            <FontAwesomeIcon icon={faThumbtack} className="task-pin" />
          </button>
          <p contentEditable></p>
        </li>
      </ul>
    </div>
  );
};

export default NotesSection;
