import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Nav from './Nav'
import {Link} from 'react-router-dom';
import './stylesheets/login.css'

function Login(){
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });
    const {email, password} = userData;

    const navigate = useNavigate();

    const changeHandler = (e)=>{
        setUserData({...userData, [e.target.name]: e.target.value});
    }

    const submitHandler = async(e)=>{
        e.preventDefault();
        try{
            const response = await fetch('/api/v1/auth/login', {
                method: 'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            console.log(data);

            //store the token in local storage
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.user.name);
            //redirect to search page
            navigate('/');
        }catch(error)
        {
            console.log(error);
        }
    }
    
    return (
        <div className = 'screen'>
            <Nav location={"login"}/>
            <div className = 'container'>
                <div className = 'row text-center'>
                    <h1>Login</h1>
                </div>
            </div>
            <div className = 'container'>
                <form onSubmit = {submitHandler}>
                    <div className = 'row form-group d-flex justify-content-center mb-2'>
                        <div className= 'col-8'>
                            <input className = 'form-control' type = 'text' placeholder= 'email' name = 'email' value = {email} onChange = {changeHandler}/>
                        </div>
                    </div>
                    <div className = 'row form-group d-flex justify-content-center mb-2'>
                        <div className = 'col-8'>
                            <input className = 'form-control' type = 'password' placeholder = 'password' name = 'password' value = {password} onChange = {changeHandler}/>
                        </div>
                    </div>
                    <div className = 'row form-group d-flex justify-content-center'>
                        
                        <button className = 'btn btn-block col-4 btn-custom' type = 'submit'>Submit</button>
                    </div>
                    <div className = 'row form-group d-flex justify-content-center mt-3'>
                        <Link className = 'btn btn-block col-4 btn-link 'to='/auth/register'>Create a new account</Link>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Login;