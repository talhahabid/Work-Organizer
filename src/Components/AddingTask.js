import { useState } from "react";

    const AddingTask = ({ addTaskFunc, addTaskToToDo }) => {

        const [newTask, setNewTask] = useState('');
        const [textArea, setTextArea] = useState('');
        const [date, setDate] = useState('');

        const handleInputChange = (event) => {
            setNewTask(event.target.value);
        };

        const handleTextAreaChange = (event) => {
            setTextArea(event.target.value);
        };

        const handleSetDate = (event) => {
            setDate(event.target.value);
        };

        const handleAddClick = async (event) => {
            event.preventDefault();
            if (newTask.trim() && textArea.trim() && date) {
                const task = { id: Date.now().toString(), name: newTask, date: date, description: textArea };
                await addTaskToToDo(task);
                addTaskFunc(task);
            }
            setNewTask('');
            setTextArea('');
            setDate('');
        }

        return (
            <div className="bg-warning pb-5">
                <h1 className="display-4 text-center font-weight-bold pt-5 pb-3">Add Task</h1>
    
                <div className="d-flex justify-content-center">
                    <div className="w-50">
                        <form onSubmit={handleAddClick}>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="input">Task Title</label>
                                <input type="text" className="form-control" placeholder="Enter task title" value={newTask} onChange={handleInputChange} required/>
                            </div>
    
                            <div className="mb-3">
                                <label className="form-label" htmlFor="textarea">Description</label>
                                <textarea className="form-control" placeholder="Enter task description" value={textArea} onChange={handleTextAreaChange} required style={{ resize: "none", height: "120px" }}/>
                            </div>
    
                            <div className="mb-3">
                                <label className="form-label" htmlFor="date">Date Due</label>
                                <input type="date" className="form-control" value={date} onChange={handleSetDate} required/>
                            </div>
    
                            <button type="submit" className="btn btn-success mt-3 col-3 left-justified">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

export default AddingTask;
