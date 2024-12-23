import PgLayout from './PgLayout';
import GeneralTask from './GeneralTask';

const Completed = ({ list, deleteGeneralTask, undoTaskFunc, listType }) => {

  return ( 
    <PgLayout title={"Completed Tasks"} divClass={"bg-success col-12"}>
        {list.map((element) => (
          <div key={element.id}>
            <GeneralTask task={element} deleteGeneralTask={deleteGeneralTask} undoTaskFunc={undoTaskFunc} listType={listType}/>
          </div>
        ))}
    </PgLayout>
  );
}

export default Completed;
