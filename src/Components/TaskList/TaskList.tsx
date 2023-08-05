import Box from "@mui/material/Box";
import { Task } from "../../model";
import TaskComponent from "../TaskComponent/TaskComponent";
import "./TaskList.css";

interface Props {
	allTasks: Task[];
	setAllTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({ allTasks, setAllTasks }) => {
	return (
		<Box display="flex" justifyContent="space-between" className="taskList" flexWrap="wrap">
			{allTasks &&
				allTasks.map((row) => {
					return <TaskComponent task={row} allTasks={allTasks} setAllTasks={setAllTasks} key={row.id} />;
				})}
		</Box>
	);
};

export default TaskList;
