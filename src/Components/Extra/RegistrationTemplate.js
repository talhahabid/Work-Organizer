import { useState } from "react";
import { Link } from "react-router-dom";
import validator from 'validator';

const RegistrationTemplate = ({title, allowTerms = null}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [terms, setTerms] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleTermsAndConditions = (event) => {
        setTerms(terms ? false : true)
    }

    const handleClick = (event) => {
        
        event.preventDefault();
        if (email && password) {
            if(validator.isEmail(email)){
                const user = {
                    email:email,
                    password:password
                }
                console.log(user)
            }else{
                alert("Invalid Info")
            }
        }
    
    }

    return ( 
        <form className="d-flex flex-column align-items-center p-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h1 className="mb-4">{title}</h1>

            <div className="form-group mb-3 w-100">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" onChange={handleEmailChange} required/>
            </div>

            <div className="form-group mb-3 w-100">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handlePasswordChange} required/>
            </div>
            {allowTerms && 
                <div className="form-group form-check mb-3 w-100">
                    <input type="checkbox" className="form-check-input" id="termsCheck" required onChange={handleTermsAndConditions}/>
                    <label className="form-check-label" htmlFor="termsCheck">I agree to the <a href="/terms" className="text-primary">Terms and Conditions</a> and <a href="/privacy" className="text-primary">Privacy Policy</a>.</label>
                </div>
            }   

            <button type="submit" className="btn btn-primary w-100" onClick={handleClick}>{title}</button>
            <small className="form-text text-muted">
                {allowTerms ? 
                (<>Already have an account? <Link to="/log-in">Login</Link></>) : 
                (<>Don’t have an account? <Link to="/sign-up">Create one</Link></>)
                }
            </small>


        </form>
     );
}
 
export default RegistrationTemplate;