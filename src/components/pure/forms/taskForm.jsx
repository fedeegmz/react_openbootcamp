import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ nTasks, add }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    return (
        <form
            onSubmit={addTask}
            className='d-flex justify-content-center align-items-center mb-4'
        >
            <div className='form-outline flex-fill'>
                <input 
                    ref={nameRef}
                    className='form-control form-control-lg'
                    id='inputName'
                    type='text'
                    placeholder='Task name'
                    required
                    autoFocus    
                />
                <input 
                    ref={descriptionRef}
                    className='form-control form-control-lg'
                    id='inputName'
                    type='text'
                    placeholder='Task description'
                    required   
                />
                {/* <label
                    htmlFor='selectLevel'
                    className='sr-only'
                >
                    Priority
                </label> */}
                <select
                    className='form-control form-control-lg'
                    ref={levelRef}
                    id='selectLevel'
                    defaultValue={LEVELS.NORMAL}
                >
                    <option value={LEVELS.NORMAL} style={{color: 'blue', backgroundColor: 'gray', fontWeight: 'bold'}}>
                        Normal
                    </option>
                    <option value={LEVELS.URGENT} style={{color: 'yellow', backgroundColor: 'gray', fontWeight: 'bold'}}>
                        Urgent
                    </option>
                    <option value={LEVELS.BLOCKING} style={{color: 'tomato', backgroundColor: 'gray', fontWeight: 'bold'}}>
                        Blocking
                    </option>
                </select>

                <button
                    type='submit'
                    className='btn btn-success btn-lg ms-2'
                >
                    {nTasks === 0 ? "Create Task" : "Add New Task"}
                </button>
            </div>
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    nTasks: PropTypes.number.isRequired,
}

export default TaskForm;