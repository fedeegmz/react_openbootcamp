import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Task} from "../../models/task.class";

const TaskComponent = ({ task }) => {

	useEffect(() => {
		console.log("Tarea Completada");
		return () => {
			console.log(`Desmontaje del componente: ${task.name}`);
		};
	}, []);

	return (
		<div>
			<h2>
				Name: { task.name }
			</h2>
			<h3>
				Description: { task.description }
			</h3>
			<h4>
				Level: { task.level }
			</h4>
			<h5>
				This task is: { task.completed ? "COMPLETADA":"PENDIENTE" }
			</h5>
		</div>
	);
};

TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task),
};

export default TaskComponent;