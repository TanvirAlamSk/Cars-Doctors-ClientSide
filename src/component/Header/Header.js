import React, { useContext, useState } from 'react';
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import { FaDashcube } from 'react-icons/fa';
import { BiSolidDashboard } from 'react-icons/bi';

const Header = () => {

    const { user, logout } = useContext(AuthContext)

    let arr = [true, false, false, false, false, false, false]
    const [style, setStyle] = useState(arr);
    const [dropDown, setDropDown] = useState(true);
    const [text, setText] = useState("");



    const selected = (props) => {
        let newArr = [...arr];
        for (let i = 0; i < newArr.length; i++) {
            newArr[i] = false;
        }
        newArr[props] = true;
        setStyle(newArr);
    }

    const handelLogout = () => {
        logout()
    }

    const setSelectedText = (txt) => {
        setText(txt);
        setDropDown(true);
    }
    return (
        <div className="2xl:container 2xl:mx-auto ">
            <div className="bg-white rounded shadow-lg py-5 px-7">
                <nav className="flex  justify-between items-center mx-8">
                    <div className="flex items-center space-x-3 lg:pr-16 pr-6">
                        <img className="cursor-point" alt='' width={68} height={68} fill="none" src={logo}>

                        </img>


                    </div>
                    {/* For medium and plus sized devices */}
                    <div>
                        <ul className="hidden md:flex flex-auto space-x-2">
                            <Link to="/">
                                <li onClick={() => selected(1)} className={`${style[1] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Home</li>
                            </Link>
                            <Link to="/about">
                                <li onClick={() => selected(2)} className={`${style[2] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>About</li>
                            </Link>
                            <Link to="/service">
                                <li onClick={() => selected(3)} className={`${style[3] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Services</li>
                            </Link>
                            <Link to="/blog">
                                <li onClick={() => selected(4)} className={`${style[4] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Blog</li>
                            </Link>
                            <Link to="/product">
                                <li onClick={() => selected(5)} className={`${style[5] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Product</li>
                            </Link>
                            <Link to="/contract">
                                <li onClick={() => selected(6)} className={`${style[6] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Contact</li>
                            </Link>
                        </ul>
                    </div>
                    <div className=" flex space-x-5 justify-center items-center pl-2">
                        <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                            <Link to="/dashboard"><BiSolidDashboard className='h-6 w-6 text-blue-600' title='dashboaed'></BiSolidDashboard></Link>

                        </div>
                        {
                            user ?
                                <button onClick={handelLogout} className='btn btn-sm btn-warning'>LogOut</button>

                                :
                                <Link to="/login"><button className='btn btn-sm btn-warning'>Login</button></Link>

                        }
                    </div>
                </nav>


                {/* for smaller devcies */}


                <div className="block md:hidden w-full mt-5 ">
                    <div onClick={() => setDropDown(!dropDown)} className="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full">
                        <div className="flex space-x-2">
                            <span id="s1" className={`${text.length != 0 ? '' : 'hidden'} font-semibold text-sm leading-3`}>Selected: </span><p id="textClicked" className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer ">{text ? text : "Collections"}</p>
                        </div>
                        <svg id="ArrowSVG" className={`${dropDown ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className=" relative z-[1]">
                        <ul id="list" className={`${dropDown ? 'hidden' : 'block'} font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md`}>
                            <Link to="/">
                                <li onClick={() => setSelectedText("Home")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Home</li>
                            </Link>
                            <Link to="/about">
                                <li onClick={() => setSelectedText("About")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">About</li>
                            </Link>
                            <Link to="/service">
                                <li onClick={() => setSelectedText("Service")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Services</li>
                            </Link>
                            <Link to="/blog">
                                <li onClick={() => setSelectedText("Blog")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Blog</li>
                            </Link>
                            <Link to="/product">
                                <li onClick={() => setSelectedText("Dashboard")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Product</li>
                            </Link>
                            <Link to={"/contract"}>
                                <li onClick={() => setSelectedText("Contact")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;