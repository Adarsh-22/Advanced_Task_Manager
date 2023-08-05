import React, { useState } from "react";
import { Task } from "../../model";
import "./TaskComponent.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
// icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

interface Props {
	task: Task;
	allTasks: Task[];
	setAllTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskComponent: React.FC<Props> = ({ task, allTasks, setAllTasks }) => {
	const [edit, setEdit] = useState<boolean>(false);
	const [editedText, setEditedText] = useState<string>(task.info);

	const onEditBtnClick = () => {
		if (!edit && !task.isDone) {
			setEdit(!edit);
		}
	};
	const onInputSubmit = (e: React.FormEvent, id: number) => {
		e.preventDefault();
		setAllTasks(allTasks.map((row) => (row.id === id ? { ...row, info: editedText } : row)));
		setEdit(!edit);
	};
	const onDeleteClick = (id: number) => {
		setAllTasks(allTasks.filter((row) => row.id !== id));
	};
	const onCompleteBtnClick = (id: number) => {
		setAllTasks(
			allTasks.map((row) => {
				if (id === row.id) return { ...row, isDone: !row.isDone };
				else return row;
			})
		);
	};

	return (
		<Box
			component="form"
			onSubmit={(e) => onInputSubmit(e, task.id)}
			justifyContent="space-between"
			className={task.isDone ? "taskComponent taskComponentCompleted" : "taskComponent"}>
			{task.isDone || !edit ? (
				<Typography
					variant="body1"
					sx={{ color: task.isDone ? "white" : "black", width: { sm: "100%", md: "60%" } }}
					flexGrow={1}>
					{task.info}
				</Typography>
			) : (
				<TextField
					value={editedText}
					sx={{ width: { xs: "100%", sm: "100%", md: "60%" } }}
					onChange={(e) => setEditedText(e.target.value)}
					helperText="Press Enter To Save"
				/>
			)}

			<Stack direction="row">
				<IconButton size="large" sx={{ justifySelf: "flex-end" }} onClick={onEditBtnClick}>
					{!task.isDone && !edit && (
						<EditIcon fontSize="inherit" className={task.isDone ? "completedIcon" : "icon"} />
					)}
				</IconButton>
				<IconButton size="large" sx={{ justifySelf: "flex-end" }} onClick={() => onDeleteClick(task.id)}>
					<DeleteIcon fontSize="inherit" className={task.isDone ? "completedIcon" : "icon"} />
				</IconButton>
				<IconButton size="large" sx={{ justifySelf: "flex-end" }} onClick={() => onCompleteBtnClick(task.id)}>
					{task.isDone ? (
						<ClearRoundedIcon fontSize="inherit" className={task.isDone ? "completedIcon" : "icon"} />
					) : (
						!edit && (
							<CheckRoundedIcon fontSize="inherit" className={task.isDone ? "completedIcon" : "icon"} />
						)
					)}
				</IconButton>
			</Stack>
		</Box>
	);
};

export default TaskComponent;
