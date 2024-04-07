import React, { useState } from "react";
import "./NotesSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";

// TODO:
// 1. drop to different component (every - <li></li>)

const NotesSection = () => {
  const initialTasks = [
    { id: 1, isCompleted: false },
    { id: 2, isCompleted: false },
    { id: 3, isCompleted: false },
    { id: 4, isCompleted: false },
    { id: 5, isCompleted: false },
    { id: 6, isCompleted: false },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const changeTaskPosition = (taskIndex: number): void => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskIndex ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="notes-section-main-box">
      <ul className="notes-board">
        <li>
          <button onClick={() => changeTaskPosition(1)}>
            <FontAwesomeIcon icon={faThumbtack} className="task-pin" />
          </button>
          <textarea
            maxLength={80}
            style={{
              textDecoration: tasks[0].isCompleted ? "line-through" : "none",
            }}
          ></textarea>
        </li>
        <li>
          <button onClick={() => changeTaskPosition(2)}>
            <FontAwesomeIcon icon={faThumbtack} className="task-pin" />
          </button>
          <textarea
            maxLength={80}
            style={{
              textDecoration: tasks[1].isCompleted ? "line-through" : "none",
            }}
          ></textarea>
        </li>
        <li>
          <button onClick={() => changeTaskPosition(3)}>
            <FontAwesomeIcon icon={faThumbtack} className="task-pin" />
          </button>
          <textarea
            maxLength={80}
            style={{
              textDecoration: tasks[2].isCompleted ? "line-through" : "none",
            }}
          ></textarea>
        </li>
        <li>
          <button onClick={() => changeTaskPosition(4)}>
            <FontAwesomeIcon icon={faThumbtack} className="task-pin" />
          </button>
          <textarea
            maxLength={80}
            style={{
              textDecoration: tasks[3].isCompleted ? "line-through" : "none",
            }}
          ></textarea>
        </li>
        <li>
          <button onClick={() => changeTaskPosition(5)}>
            <FontAwesomeIcon icon={faThumbtack} className="task-pin" />
          </button>
          <textarea
            maxLength={80}
            style={{
              textDecoration: tasks[4].isCompleted ? "line-through" : "none",
            }}
          ></textarea>
        </li>
        <li>
          <button onClick={() => changeTaskPosition(6)}>
            <FontAwesomeIcon icon={faThumbtack} className="task-pin" />
          </button>
          <textarea
            maxLength={80}
            style={{
              textDecoration: tasks[5].isCompleted ? "line-through" : "none",
            }}
          ></textarea>
        </li>
      </ul>
    </div>
  );
};

export default NotesSection;
