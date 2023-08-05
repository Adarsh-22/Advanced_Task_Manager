import "./InputField.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Task } from "../../model";
import { useRef } from "react";

interface Props {
	task: string;
	setTask: React.Dispatch<React.SetStateAction<string>>;
	handleAddTask: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ task, setTask, handleAddTask }) => {
	const inputField = useRef<HTMLInputElement>(null);
	return (
		<form
			className="inputField"
			onSubmit={(e) => {
				handleAddTask(e);
				inputField.current?.blur();
			}}>
			<input
				ref={inputField}
				className="input"
				value={task}
				type="text"
				placeholder="Enter task here"
				onChange={(e) => setTask(e.target.value)}
				required
			/>
			<button className="addBtn" type="submit">
				Add
			</button>
		</form>
	);
};

export default InputField;
