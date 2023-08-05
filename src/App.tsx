import "./App.css";
import InputField from "./Components/InputField/InputField";
import React, { useState } from "react";
import { Task } from "./model";
import TaskList from "./Components/TaskList/TaskList";

const App: React.FC = ({}) => {
	const [task, setTask] = useState<string>("");

	const [allTasks, setAllTasks] = useState<Task[]>([]);

	const handleAddTask = (e: React.FormEvent) => {
		e.preventDefault();
		if (task) {
			setAllTasks([...allTasks, { id: Date.now(), info: task, isDone: false }]);
			setTask("");
		}
	};
	return (
		<div className="App">
			<h1 className="heading">Organizer</h1>
			<InputField task={task} setTask={setTask} handleAddTask={handleAddTask} />

			<TaskList allTasks={allTasks} setAllTasks={setAllTasks} />
		</div>
	);
};

export default App;
