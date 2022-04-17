import React from 'react';
import {Link} from 'react-router-dom';

function App(){
    return(
        <div className = 'container'>
            <h1>hello</h1>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <Link to='/search'>Search</Link>
        </div>
    );
}

export default App;