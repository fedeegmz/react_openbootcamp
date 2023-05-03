import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TaskComponent from "../pure/task"
import {Task} from "../../models/task.class";
import { LEVELS } from "../models/levels.enum";

const TaskListComponent = () => {

	const defaultTask = new Task("Example", "Default description", false, LEVELS.NORMAL);

	const [tasks, setTasks] = useState(defaultTask);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log("Modificación de tareas");
		setLoading(false);
		
		return () => {
			console.log("Desmontaje del componente");
		};
	}, [tasks]);

	const changeCompleted = (id) => {
			console.log("TODO: cambiar estado de una tarea");
	}

	return (
		<div>
			<div>
				<h1>
					Your Tasks:
				</h1>
			</div>
			<TaskComponent task={defaultTask}></TaskComponent>
		</div>
	);
};

TaskListComponent.propTypes = {
		
};

export default TaskListComponent;