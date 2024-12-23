import PgLayout from './PgLayout';
import Task from './Task';

const ToDo = ({ list, deleteTaskFunc, completeTaskFunc, updateTaskFunc }) => {
    
    return ( 
        <PgLayout title={"To Do"} divClass={"bg-info col-12"} >
            
                {list.map((element) => (
                    <div key={element.id}>
                        <Task task={element} deleteTaskFunc={deleteTaskFunc} completeTaskFunc={completeTaskFunc} updateTaskFunc={updateTaskFunc} />
                    </div>
                ))}
            
        </PgLayout>
    );
}   
 
export default ToDo;