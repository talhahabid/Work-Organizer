import { useState } from 'react';
import TaskLayout from "./TaskLayout";
import './Task.css'; 

const Task = ({ task, deleteTaskFunc, completeTaskFunc, updateTaskFunc }) => {
    const { id, name, description, date } = task;
    const [isEditing, setIsEditing] = useState(false);
    const toggleEditing = () => setIsEditing(prevState => !prevState);

    const handleModifyClick = () => {
        toggleEditing();
    };

    return (
        <TaskLayout task={task}>
            <button onClick={() => completeTaskFunc(id)} className="btn btn-success col-2 mb-3 ml-3">Complete</button>
            <button onClick={handleModifyClick} className='btn btn-warning col-2 mb-3 ml-2'>Modify</button>
            <button onClick={() => deleteTaskFunc(id)} className="btn btn-danger col-2 mb-3 ml-2">Delete</button>

            {isEditing && (
                <div className="edit-modal-overlay">
                    <div className="edit-modal">
                        <h3>Edit Task</h3>
                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();
                                const updatedTask = {
                                    id: id,
                                    name: e.target.name.value,
                                    description: e.target.description.value,
                                    date: e.target.date.value
                                };
                          
                                await updateTaskFunc(updatedTask.id, updatedTask);
                                console.log("Task updated successfully");
                                toggleEditing();
                              
                                    
                                
                            }}
                        >
                            <input type="text" name="name" defaultValue={name} placeholder="Task Name" required />
                            <input type="text" name="description" defaultValue={description} placeholder="Task Description" required />
                            <input type="date" name="date" defaultValue={date} required />
                            <button type="submit" className="btn btn-success">Save</button>
                            <button type="button" onClick={toggleEditing} className="btn btn-secondary">Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </TaskLayout>
    );
};

export default Task;
