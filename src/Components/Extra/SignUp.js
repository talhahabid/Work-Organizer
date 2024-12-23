import { useState } from "react";
import { Link } from "react-router-dom";
import RegistrationTemplate from "./RegistrationTemplate";
const SignUp = () => {
    return (
        <RegistrationTemplate title={"Sign Up"} allowTerms={true}></RegistrationTemplate>
    );
}

export default SignUp;
