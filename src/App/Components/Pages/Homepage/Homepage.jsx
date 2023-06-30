import React from 'react';
import Homestyles from './Homepage.module.css'
import Navbar from '../../Navbar/Navbar';
import { Outlet } from 'react-router-dom';



function Homepage(){
   return (
    <div className={Homestyles['page-body-container']}>
    <div className={Homestyles['NavbarContainer']}>
        <Navbar/>
    </div>
    <div className={Homestyles['body-Wrapper']}>
        <div className={Homestyles['page-content']}>
            <Outlet></Outlet>
        </div>
    </div>
</div>
   )
}

export default Homepage


