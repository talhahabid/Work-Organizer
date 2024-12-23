import TaskLayout from "./TaskLayout";

const GeneralTask = ({ task, deleteGeneralTask, undoTaskFunc,  listType }) => {
  const { id } = task;
  return ( 
    <TaskLayout task={ task }>
        <button onClick={() => deleteGeneralTask(id, listType)} className="btn btn-danger col-3 mb-3 ml-2">Done</button>
        <button onClick={() => undoTaskFunc(id)} className='btn btn-warning col-3 mb-3 ml-2'>Undo</button>
    </TaskLayout>
   );
}
 
export default GeneralTask;
