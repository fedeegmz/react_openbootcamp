import React from 'react';
import PropTypes from 'prop-types';

import {Task} from "../../models/task.class";
import TaskComponent from "./task";


const TaskTable = ({ tasks, complete, remove }) => {
    return (
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
                            complete={complete}
                            remove={remove}
                        ></TaskComponent>
                    )
                }) }
            </tbody>
        </table>
    );
};


TaskTable.propTypes = {
    tasks: PropTypes.arrayOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};


export default TaskTable;