import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import TaskComponent from "../pure/task"
import {Task} from "../../models/task.class";
import { LEVELS } from "../models/levels.enum";
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = () => {

	const defaultTask1 = new Task("Example1", "Default description1", true, LEVELS.NORMAL);
	const defaultTask2 = new Task("Example2", "Default description2", false, LEVELS.URGENT);
	const defaultTask3 = new Task("Example3", "Default description3", false, LEVELS.BLOCKING);

	const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log("Modificación de tareas");
		setLoading(false);
		
		return () => {
			console.log("Desmontaje del componente");
		};
	}, [tasks]);

	function completeTask(task) {
		console.log(`Complete this task: ${task}`);
		const index = tasks.indexOf(task);
		const tempTasks = [...tasks];
		tempTasks[index].completed = !tempTasks[index].completed;

		setTasks(tempTasks)
	}

	function removeTask(task) {
		console.log(`Remove this task: ${task}`);
		const index = tasks.indexOf(task);
		const tempTasks = [...tasks];
		tempTasks.splice(index, 1);

		setTasks(tempTasks);
	}

	function addTask(task) {
		console.log(`Add this task: ${task}`);
		const index = tasks.indexOf(task);
		const tempTasks = [...tasks];
		tempTasks.push(task);

		setTasks(tempTasks);
	}

	return (
		<div>
			<div className='col-12'>
				<div className='card'>
					<div className='card-header p-3'>
						<h5>Your Tasks:</h5>
					</div>

					<div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
						<table>
							<thead>
								<tr>
									<th scope='col'>Title</th>
									<th scope='col'>Description</th>
									<th scope='col'>Priority</th>
									<th scope='col'>Actions</th>
								</tr>
							</thead>
							<tbody>
								{ tasks.map((task, index) => {
									return (
										<TaskComponent
											key={index}
											task={task}
											complete={completeTask}
											remove={removeTask}
										></TaskComponent>
									)
								}) }
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<TaskForm add={addTask}></TaskForm>
		</div>
	);
};

TaskListComponent.propTypes = {
		
};

export default TaskListComponent;