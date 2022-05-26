import React from 'react';
import {Link} from 'react-router-dom';
import Search from './routes/Search';

function App(){
    if(localStorage.getItem('token'))
    {
        return(
            <Search/>
        );
    }
    else
    {
        return(
            <div className = 'container'>
                <h1>hello</h1>
                <Link to='/auth/register'>Register</Link>
                <Link to='/auth/login'>Login</Link>
                {/* <Link to='/works'>Search</Link> */}
            </div>
        );
    }
}

export default App;