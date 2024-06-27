import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Dashboard from '../Pages/Dashboard';
import Appointment from '../Pages/Appointment';
const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Dashboard/>}></Route>
                    <Route path='/appointment' element={<Appointment/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;