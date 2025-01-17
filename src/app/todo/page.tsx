"use client";

import '../styles/todo.css';
import React, { useState, useEffect, useRef } from "react";

interface Task {
  text: string;
  priority: string;
  dueDate: string;
  notes: string;
}

const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");
  const [filter, setFilter] = useState("all");
  const [modalTask, setModalTask] = useState<Task | null>(null);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState<Task | null>(null);

  const calendarModalRef = useRef<HTMLDivElement>(null);

// Load tasks from localStorage when the component mounts
useEffect(() => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  setTasks(savedTasks);
}, []);

// Save tasks to localStorage whenever tasks state changes
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const newTask: Task = {
      text: taskInput,
      priority,
      dueDate,
      notes: "",
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
    setDueDate("");
  };

  const deleteTask = (taskIndex: number) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  const handleCalendarViewClick = () => {
    setShowCalendarModal(true);
    setTimeout(() => {
      calendarModalRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const filterTasks = () => {
    if (filter === "all") return tasks;
    return tasks.filter((task) => task.priority === filter);
  };

  const openTaskModal = (task: Task) => {
    setModalTask(task);
  };

  const closeTaskModal = () => {
    setModalTask(null);
    setIsEditing(false);
  };

  const renderCalendar = () => {
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
      <div>
        <div className="calendar-days">
          {daysOfWeek.map((day, index) => (
            <div key={`day-name-${index}`} className="calendar-day-name">
              {day}
            </div>
          ))}
        </div>
        <div className="calendar-grid">
          {Array(firstDayOfMonth.getDay())
            .fill(null)
            .map((_, i) => (
              <div className="calendar-day empty" key={`empty-${i}`}></div>
            ))}
          {Array.from({ length: daysInMonth }, (_, day) => {
            const taskDate = new Date(today.getFullYear(), today.getMonth(), day + 1)
              .toISOString()
              .split("T")[0];
            const tasksForDay = tasks.filter((task) => task.dueDate === taskDate);

            return (
              <div
                className={`calendar-day ${tasksForDay.length ? "highlight" : ""}`}
                key={day + 1}
                onClick={() => {
                  if (tasksForDay.length > 0) {
                    openTaskModal(tasksForDay[0]);
                  }
                }}
              >
                <strong>{day + 1}</strong>
                {tasksForDay.length > 0 && <div className="task-indicator"></div>}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const markTaskAsComplete = (taskIndex: number) => {
    const updatedTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  
  interface Task {
    text: string;
    priority: string;
    dueDate: string;
    notes: string;
    completed?: boolean;
  }
  

  return (
    <div className="todoApp">
      <h1>To-Do List ✏️</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
      >
        <input
          type="text"
          placeholder="Task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          required
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("high")}>High</button>
        <button onClick={() => setFilter("medium")}>Medium</button>
        <button onClick={() => setFilter("low")}>Low</button>
      </div>

      <ul className="taskList">
  {filterTasks().map((task, index) => (
    <li key={index} className={`taskCard ${task.priority}`} onClick={() => openTaskModal(task)}>
      {task.text} - {task.dueDate}
      <div className="taskActions">
        <input
          type="checkbox"
          className="taskCompleteCheckbox"
          checked={task.completed || false} // Ensure the checkbox reflects the task's completion status
          onChange={(e) => {
            e.stopPropagation(); // Prevent triggering modal when clicking the checkbox
            markTaskAsComplete(index);
          }}
          aria-label="Mark Task as Complete"
        />
        <button
          className="deleteButton"
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(index);
          }}
          aria-label="Delete Task"
        >
          🗑️
        </button>
      </div>
    </li>
  ))}
</ul>


      <div className="calendarButton">
        <button onClick={handleCalendarViewClick}>Calendar View 📅</button>
      </div>

      {showCalendarModal && (
        <div className="calendarModal">
          <div className="calendarModalContent">
            <h2>Calendar</h2>
            <div className="calendarGrid">{renderCalendar()}</div>
            <button onClick={() => setShowCalendarModal(false)}>Close</button>
          </div>
        </div>
      )}

      {modalTask && (
        <div className="modal">
          <div className="modalContent">
            {isEditing ? (
              <>
                <h2>Edit Task</h2>
                <input
                  type="text"
                  value={editedTask?.text || modalTask.text}
                  onChange={(e) =>
                    setEditedTask({ ...modalTask, text: e.target.value })
                  }
                  placeholder="Task Name"
                />
                <input
                  type="date"
                  value={editedTask?.dueDate || modalTask.dueDate}
                  onChange={(e) =>
                    setEditedTask({ ...modalTask, dueDate: e.target.value })
                  }
                />
                <select
                  value={editedTask?.priority || modalTask.priority}
                  onChange={(e) =>
                    setEditedTask({ ...modalTask, priority: e.target.value })
                  }
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <textarea
                  value={editedTask?.notes || modalTask.notes}
                  onChange={(e) =>
                    setEditedTask({ ...modalTask, notes: e.target.value })
                  }
                  placeholder="Add notes here"
                ></textarea>
                <div className="modalActions">
                  <button
                    className="saveButton"
                    onClick={() => {
                      const updatedTasks = tasks.map((task) =>
                        task.text === modalTask.text
                          ? { ...modalTask, ...editedTask }
                          : task
                      );
                      setTasks(updatedTasks);
                      setIsEditing(false);
                    }}
                  >
                    Save
                  </button>
                  <button className="cancelButton" onClick={closeTaskModal}>
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2>{modalTask.text}</h2>
                <p>Due: {modalTask.dueDate}</p>
                <p>Priority: {modalTask.priority}</p>
                <p>Notes: {modalTask.notes}</p>
                <div className="modalActions">
                  <button className="editButton" onClick={() => setIsEditing(true)}>
                    Edit ✏️
                  </button>
                  <button className="closeButton" onClick={closeTaskModal}>
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoApp;
