const TaskLayout = ({ children, task }) => {
    const { name, date, description } = task;

    return (
        <div className="card mb-4 shadow-sm border-0">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title text-secondary font-weight-bold mb-0">{name}</h5>
                    <h5 className="textcard-title text-secondary font-weight-bold mb-0">Due Date: {new Date(date).toLocaleDateString()}</h5>
                </div>
                
                <p className="card-text text-muted">{description}</p>
                
                <div className="d-flex justify-content-end">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default TaskLayout;
