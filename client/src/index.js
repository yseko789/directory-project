import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './index.css';
import App from './App';
import Register  from './routes/Register';
import Login from './routes/Login';
import Search from './routes/Search';
import Error from './routes/Error';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path = '/' element = {<App/>}/>
            <Route path ='/auth/register' element = {<Register/>}/>
            <Route path ='/auth/login' element = {<Login/>}/>
            <Route path ='/works' element = {<Search/>}/>
            <Route path = '*' element = {<Error/>}/>
            

        </Routes>
    </BrowserRouter>
);


