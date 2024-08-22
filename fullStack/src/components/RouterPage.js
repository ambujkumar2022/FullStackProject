import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '/Login';
import Registration from '/Registration';
import Dashboard from '/users/Dashboard';
import Orders from '/users/Orders';
import Cart from '/users/Cart';
import Profile from '/users/Profile';
import AdminOrders from '/admin/AdminOrders';
import AdminDashboard from '/admin/AdminDashboard';

export default function RouterPage() {
    return(
        <Router>
            <Routes>
                <Route path='/' element ={<Login/>}/>
                <Route path='/registration' element ={<Registration/>}/>
                <Route path='/dashboard' element ={<Dashboard/>}/>
                <Route path='/myorders' element ={<Orders/>}/>
                <Route path='/profile' element ={<Profile/>}/>
                <Route path='/cart' element ={<Cart/>}/>
                <Route path='/products' element ={<MedicineDisplay/>}/>
                <Route path='/admindashboard' element ={<AdminDashboard/>}/>
                
                <Route path='/adminorders' element ={<AdminOrders/>}/>
                <Route path='/customers' element ={<CustomerList/>}/>
                <Route path='/medicines' element ={<Medicine/>}/>
            </Routes>
        </Router>
    )
}