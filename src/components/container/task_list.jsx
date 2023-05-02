import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TaskComponent from "../pure/task"
import {Task} from "../../models/task.class";
import { LEVELS } from "../models/levels.enum";

const TaskListComponent = () => {
		const defaultTask = new Task("Example", "Default description", false, LEVELS.NORMAL);

		const changeState = (id) => {
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