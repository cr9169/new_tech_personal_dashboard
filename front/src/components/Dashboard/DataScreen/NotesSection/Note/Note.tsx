import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { Task } from "../../../../../interfaces/Task";
import "./Note.scss";

const Note = ({
  tasks,
  setTasks,
  taskPosition,
}: {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  taskPosition: number;
}) => {
  const changeTaskPosition = (taskIndex: number): void => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskIndex ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <li>
      <button onClick={() => changeTaskPosition(taskPosition)}>
        <FontAwesomeIcon icon={faThumbtack} className="task-pin" />
      </button>
      <textarea
        maxLength={80}
        readOnly={tasks[taskPosition - 1].isCompleted}
        style={{
          textDecoration: tasks[taskPosition - 1].isCompleted
            ? "line-through"
            : "none",
        }}
      ></textarea>
    </li>
  );
};

export default Note;
