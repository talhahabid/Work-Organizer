import { useEffect, useState } from "react"
import ToDo from './Components/ToDo'
import Completed from './Components/Completed'
import Deleted from './Components/Deleted'
import AddingTask from './Components/AddingTask'
import Navbar from "./Components/Navbar"
import {addTaskToToDo, addTaskToCompleted, addTaskToDeleted, deleteTaskFromToDo, deleteTaskFromCompleted, deleteTaskFromDeleted, getTasksFromToDo, getTasksFromDeleted, getTasksFromCompleted, updateTaskInToDo} from './Utils/Crud'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App (){

  const [deleted, setDeleted] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const todoData = await getTasksFromToDo();
      const completedData = await getTasksFromCompleted();
      const deletedData = await getTasksFromDeleted();
  
      setTasks(todoData);
      setCompleted(completedData);
      setDeleted(deletedData);
    };
    fetchAll();
  }, []);

  async function deleteTask(id){
    
    const task = tasks.find((task) => (task.id === id));
    await deleteTaskFromToDo(id); 
    setTasks(tasks.filter((task) => (task.id !== id)));
    await addTaskToDeleted(task); 
    setDeleted([...deleted, task]);
  }

  async function completeTask(id) {

    const task = tasks.find((task) => (task.id === id))
    await deleteTaskFromToDo(id); 
    setTasks(tasks.filter((task) => (task.id !== id)));
    await addTaskToCompleted(task);
    setCompleted([...completed, task]);
  }

  async function deleteGeneralTask(id, listType){

    if(listType === "completed"){
      await deleteTaskFromCompleted(id);
      setCompleted(completed.filter((task)=>(id !== task.id)));
    }else {
      await deleteTaskFromDeleted(id);
      setDeleted(deleted.filter((task)=>(id !== task.id)))
    }
  }

  async function undoTask(id){

    const taskDeleted = deleted.find((task) => (task.id === id));
    const taskCompleted = completed.find((task) => (task.id === id));

    if(taskDeleted || taskCompleted){

      if(taskDeleted){
        await deleteTaskFromDeleted(id);
        setDeleted(deleted.filter((task) => (task.id !== id)));
        await addTaskToToDo(taskDeleted);
        setTasks([...tasks, taskDeleted]);

      }else {
        await deleteTaskFromCompleted(id);
        setCompleted(completed.filter((task) => (task.id !== id)));
        await addTaskToToDo(taskCompleted);
        setTasks([...tasks, taskCompleted]);
      }
    }
  }

  async function editTask(id, task) {
    await updateTaskInToDo(task);
    setTasks((prevTasks) => {
      return prevTasks.map((t) => t.id === id ? { ...t, name: task.name, description: task.description, date: task.date } : t);
    }); 
  }


  function addTask(task) {
    setTasks([...tasks, task]); 
  }

  return (
    <Router>
      <div className="fluid-container">
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/">
            <ToDo list={tasks} deleteTaskFunc={deleteTask} completeTaskFunc={completeTask} updateTaskFunc={editTask} />
            <AddingTask addTaskFunc={addTask} addTaskToToDo={addTaskToToDo} />
          </Route>

          <Route exact path="/recently-completed">
            <Completed list={completed} deleteGeneralTask={deleteGeneralTask} undoTaskFunc={undoTask} listType={"completed"} />
          </Route>

          <Route exact path="/recently-deleted" >
            <Deleted list={deleted} deleteGeneralTask={deleteGeneralTask} undoTaskFunc={undoTask} listType={"deleted"} />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}
export default App;