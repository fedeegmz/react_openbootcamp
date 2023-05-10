import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Task} from "../../models/task.class";
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({ task, complete, remove }) => {

	useEffect(() => {
		console.log("Tarea Completada");
		return () => {
			console.log(`Desmontaje del componente: ${task.name}`);
		};
	}, []);


	/**
	 * Function that returns a Badge
	 * depending on the level of the task
	 */
	function taskLevelBadge() {
		switch (task.level) {
			case LEVELS.NORMAL:
				return(
					<h6 className='mb-0'>
						<span className='badge bd-primary'>
							{ task.level }
						</span>
					</h6>
				)
			case LEVELS.URGENT:
				return(
					<h6 className='mb-0'>
						<span className='badge bd-warning'>
							{ task.level }
						</span>
					</h6>
				)
			case LEVELS.BLOCKING:
				return(
					<h6 className='mb-0'>
						<span className='badge bd-danger'>
							{ task.level }
						</span>
					</h6>
				)
			default:
				break;
			
		}
	}

	/**
	 * Function that returns icon depending on completion of the task
	 */
	function taskCompletedIcon() {
		if(task.completed) {
			return(
				<i
					className='bi-toggle-on task-action'
					style={{color: 'green'}}
					onClick={() => complete(task)}
				></i>
			)
		} else {
			return(
				<i
					className='bi-toggle-of task-action'
					style={{color: 'grey'}}
					onClick={() => complete(task)}
				></i>
			)
		}
	}

	
	return (
		<tr className='fw-normal'>
			<th>
				<span className='ms-2'>{ task.name }</span>
			</th>
			<td className='align-middle'>
				<span>{ task.description }</span>
			</td>
			<td className='align-middle'>
				<span>{ taskLevelBadge() }</span>
			</td>
			<td className='align-middle'>
				{ taskCompletedIcon() }
				<i
					className='bi-trash task-action'
					style={{color: 'tomato'}}
					onClick={() => remove(task)}
				></i>
			</td>
		</tr>
	);
};

TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task).isRequired,
	complete: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired,
};

export default TaskComponent;