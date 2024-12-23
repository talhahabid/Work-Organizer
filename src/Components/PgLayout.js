const PgLayout = ({ children, title, divClass }) => {
    return (  
        <div className={divClass + " pb-4"}>
            <h1 className="display-4 text-center font-weight-bold pt-5 pb-3" >{title}</h1>
            {children}      
        </div>
    );
}
 
export default PgLayout;