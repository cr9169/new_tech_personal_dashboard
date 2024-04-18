import React, { useState } from "react";
import "./NotesSection.scss";
import Note from "./Note/Note";

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

  return (
    <div className="notes-section-main-box">
      <ul className="notes-board">
        <Note tasks={tasks} setTasks={setTasks} taskPosition={1} />
        <Note tasks={tasks} setTasks={setTasks} taskPosition={2} />
        <Note tasks={tasks} setTasks={setTasks} taskPosition={3} />
        <Note tasks={tasks} setTasks={setTasks} taskPosition={4} />
        <Note tasks={tasks} setTasks={setTasks} taskPosition={5} />
        <Note tasks={tasks} setTasks={setTasks} taskPosition={6} />
      </ul>
    </div>
  );
};

export default NotesSection;
