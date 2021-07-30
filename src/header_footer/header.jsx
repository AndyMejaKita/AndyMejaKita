import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom';
import Logo from '../assets/images/logo_blue_white.png';

class Header extends Component {
    render(){
        return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-light p-6">
            <div className="flex items-center flex-no-shrink text-white mr-6">
                <img src={Logo} className="h-6 mr-0 flex"/>
            </div>
            <div className="justify-items-center">
                {/* <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
                </div> */}
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <a href="#" className="text-white-default font-heading">MejaKerja Team</a>
                </div>
            </div>
          </nav>
        );
    }
}

export default Header