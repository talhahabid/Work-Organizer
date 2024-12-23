import { sendRequestToServer } from './SendRequestToServer';

const addTaskToToDo = async (task) => {
    const url = "http://localhost:5000/add-to-todo";
    await sendRequestToServer(url, "POST", task, "todo");
};

const addTaskToCompleted = async (task) => {
    const url = "http://localhost:5000/add-to-completed";
    await sendRequestToServer(url, "POST", task, "completed");
};

const addTaskToDeleted = async (task) => {
    const url = "http://localhost:5000/add-to-deleted";
    await sendRequestToServer(url, "POST", task, "deleted");
};

{/*-----------------------------------------------------------------------------------------------*/}

const deleteTaskFromToDo = async (id) => {
    const url = "http://localhost:5000/delete-from-todo";
    await sendRequestToServer(url, "DELETE", id, "todo");
};

const deleteTaskFromCompleted = async (id) => {
    const url = "http://localhost:5000/delete-from-completed";
    await sendRequestToServer(url, "DELETE", id, "completed");
};

const deleteTaskFromDeleted = async (id) => {
    const url = "http://localhost:5000/delete-from-deleted";
    await sendRequestToServer(url, "DELETE", id, "deleted");
};

{/*-----------------------------------------------------------------------------------------------*/}

const getTasksFromToDo = async () => {
    const url = "http://localhost:5000/get-from-todo";
    return await sendRequestToServer(url, "GET", null, "todo");
};

const getTasksFromDeleted = async () => {
    const url = "http://localhost:5000/get-from-deleted";
    return await sendRequestToServer(url, "GET", null, 'deleted');
};

const getTasksFromCompleted = async () => {
    const url = "http://localhost:5000/get-from-completed";
    return await sendRequestToServer(url, "GET", null, "completed");
};

{/*-----------------------------------------------------------------------------------------------*/}

const updateTaskInToDo = async (task) => {
    const url = "http://localhost:5000/update-task-from-todo";
    await sendRequestToServer(url, "PUT", task, "todo")
}

{/*-----------------------------------------------------------------------------------------------*/}

export{ addTaskToToDo, addTaskToCompleted, addTaskToDeleted, deleteTaskFromToDo, deleteTaskFromCompleted, deleteTaskFromDeleted, getTasksFromToDo, getTasksFromDeleted, getTasksFromCompleted, updateTaskInToDo }