import { sendRequestToServer } from './SendRequestToServer';
var baseURL = "https://talhahabid.pythonanywhere.com/";
const addTaskToToDo = async (task) => {
    
    const url = baseURL+"/add-to-todo";
    await sendRequestToServer(url, "POST", task, "todo");
};

const addTaskToCompleted = async (task) => {
    const url = baseURL+"/add-to-completed";
    await sendRequestToServer(url, "POST", task, "completed");
};

const addTaskToDeleted = async (task) => {
    const url = baseURL+"/add-to-deleted";
    await sendRequestToServer(url, "POST", task, "deleted");
};

{/*-----------------------------------------------------------------------------------------------*/}

const deleteTaskFromToDo = async (id) => {
    const url = baseURL+"/delete-from-todo";
    await sendRequestToServer(url, "DELETE", id, "todo");
};

const deleteTaskFromCompleted = async (id) => {
    const url = baseURL+"/delete-from-completed";
    await sendRequestToServer(url, "DELETE", id, "completed");
};

const deleteTaskFromDeleted = async (id) => {
    const url = baseURL+"/delete-from-deleted";
    await sendRequestToServer(url, "DELETE", id, "deleted");
};

{/*-----------------------------------------------------------------------------------------------*/}

const getTasksFromToDo = async () => {
    const url = baseURL+"/get-from-todo";
    return await sendRequestToServer(url, "GET", null, "todo");
};

const getTasksFromDeleted = async () => {
    const url = baseURL+"/get-from-deleted";
    return await sendRequestToServer(url, "GET", null, 'deleted');
};

const getTasksFromCompleted = async () => {
    const url = baseURL+"/get-from-completed";
    return await sendRequestToServer(url, "GET", null, "completed");
};

{/*-----------------------------------------------------------------------------------------------*/}

const updateTaskInToDo = async (task) => {
    const url = baseURL+"/update-task-from-todo";
    await sendRequestToServer(url, "PUT", task, "todo")
}

{/*-----------------------------------------------------------------------------------------------*/}

export{ addTaskToToDo, addTaskToCompleted, addTaskToDeleted, deleteTaskFromToDo, deleteTaskFromCompleted, deleteTaskFromDeleted, getTasksFromToDo, getTasksFromDeleted, getTasksFromCompleted, updateTaskInToDo }
