import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Nav from './Nav'
import {Link} from 'react-router-dom';
import './stylesheets/login.css'

function Register(){

    const navigate = useNavigate();

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

        //store jwt to local storage
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.user.name);
        //redirect to search page
        navigate('/works');
    }

    return(
        <div className='screen'>
            <Nav location={"register"}/>
            <div className='container'>
                <div className = 'row text-center'>
                    <h1>Register</h1>
                </div>
            </div>
            <div className='container'>
                <form onSubmit = {submitHandler}>
                    <div className='row form-group d-flex justify-content-center mb-2'>
                        <div className = 'col-8'>
                            <input className='form-control' type = 'text' placeholder = 'name' name = 'name' value = {name} onChange = {changeHandler}/>
                        </div>
                    </div>
                    <div className='row form-group d-flex justify-content-center mb-2'>
                        <div className = 'col-8'>
                            <input className='form-control' type = 'email' placeholder = 'email' name = 'email' value = {email} onChange = {changeHandler}/>
                        </div>
                    </div>
                    <div className='row form-group d-flex justify-content-center mb-2'>
                        <div className = 'col-8'>
                            <input className='form-control' type = 'password' placeholder = 'password' name = 'password' value = {password} onChange = {changeHandler}/>
                        </div>
                    </div>
                    <div className = 'row form-group d-flex justify-content-center'>
                            <button className = 'btn btn-block col-4 btn-custom' type = 'submit'>Submit</button>
                    </div>
                    <div className = 'row form-group d-flex justify-content-center mt-3'>
                            <Link className = 'btn btn-block col-4 btn-link'to='/auth/login'>Already have an account?</Link>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Register;