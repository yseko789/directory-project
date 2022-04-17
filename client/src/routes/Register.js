import React, {useState} from 'react';

function Register(){
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const {name, email, password} = userData;

    const changeHandler = (e)=>{
        setUserData({...userData, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e)=>{
        e.preventDefault();
        const response = await fetch('/api/v1/auth/register',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        console.log(data);
    }

    return(
        <div>
            <form onSubmit = {submitHandler}>
                <label>Enter name:
                    <input type = 'text' placeholder = 'name' name = 'name' value = {name} onChange = {changeHandler}/>
                </label>
                <label>Enter email:
                    <input type = 'text' placeholder= 'email' name = 'email' value = {email} onChange = {changeHandler}/>
                </label>
                <label>Enter password:
                    <input type = 'password' placeholder = 'password' name = 'password' value = {password} onChange = {changeHandler}/>
                </label>
                <button type = 'submit'>Submit</button>
            </form>
        </div>

    )
}

export default Register;