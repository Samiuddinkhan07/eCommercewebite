import React from 'react';
import { ArrowDropDownSharp } from '@mui/icons-material';


function Navbar() {
  return (
    <div className='container-xl border-b-2  border-gray-200'>
        <div className="flex px-6 py-3 w-full items-center">
            <div className="w-2/12 pl-4 font-medium text-2xl">
                Shopcart
            </div>
            <div className="w-5/12 mx-auto">
                <ul className="flex justify-between">
                    <li className="cursor-pointer">Categories<ArrowDropDownSharp/></li>
                    <li className="cursor-pointer">Deals</li>
                    <li className="cursor-pointer">What's New</li>
                    <li className="cursor-pointer">Delivery</li>
                </ul>
            </div>
            <div className="flex ml-3 mr-5 items-center w-4/12 gap-4 justify-between">
                <div className="">
                    <input type="text" id="SearchBox"  placeholder='Search Product' className="outline-none border border-2 border-gray-200 px-2 py-1 rounded-xl bg-gray-100"/>
                </div>
                <div className="">
                    UserProfile
                </div>
                <div className="">Cart</div>
            </div>
        </div>
    </div>
);
}

export default Navbar
