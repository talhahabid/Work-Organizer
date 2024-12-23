import PgLayout from './PgLayout';
import GeneralTask from './GeneralTask';

const Deleted = ({ list, deleteGeneralTask, undoTaskFunc, listType }) => {

  return ( 
    <PgLayout title={"Deleted Tasks"} divClass={"bg-danger col-12"}>

        {list.map((element) => (
          <div key={element.id}>
            <GeneralTask task={element} deleteGeneralTask={deleteGeneralTask} undoTaskFunc={undoTaskFunc} listType={listType}/>
          </div>
        ))}
    </PgLayout>
  );
}
 
export default Deleted;