import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import {Task} from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskTable from '../pure/taskTable';
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = () => {

	const defaultTask1 = new Task("Example1", "Default description1", true, LEVELS.NORMAL);
	const defaultTask2 = new Task("Example2", "Default description2", false, LEVELS.URGENT);
	const defaultTask3 = new Task("Example3", "Default description3", false, LEVELS.BLOCKING);

	const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log("Modificación de tareas");

		setTimeout(() => setLoading(false), 2000);
		
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

					<div
						className='card-body'
						data-mdb-perfect-scrollbar='true'
						style={ {position: 'relative', height: '400px'} }
					>
						{/* Render tasks */}
						{ loading ?
							(
								/* TODO: Add Loading Spinner */
								<p style={{color: 'gray', fontSize: '30px', fontWeight: 'bold'}}>
									Loading tasks...
								</p>
							)
							:
							tasks.length === 0 ?
								(
									<div>
										<h3>There are no tasks to show</h3>
										<h4>Please, create one</h4>
									</div>
								)
								:
								(
									<TaskTable
										tasks={tasks}
										complete={completeTask}
										remove={removeTask}
									></TaskTable>
								)
						}
					</div>
				</div>
			</div>

			<TaskForm
			nTasks={tasks.length}
				add={addTask}
			></TaskForm>
		</div>
	);
};

// TaskListComponent.propTypes = {
		
// };

export default TaskListComponent;