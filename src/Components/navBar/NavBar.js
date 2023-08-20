import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [clickedCounter, setClickCounter] = React.useState(2);


    return (
        <div className='flex justify-between items-center p-4 bg-gray-400 bg-opacity-80' >
            <div className='font-poppins text-white rounded-lg transition-all duration-300 ease-in-out cursor-pointer ' >
                <Link smooth spy to='#home' onClick={e=>{ setClickCounter(1)}} className={` ${ clickedCounter === 1 ? "opacity-100 text-lime-300" : "opacity-75" } p-2 font-bold rounded-t-lg  hover:opacity-100 transition-all duration-700 ease-in-out `}>Home</Link>
                <Link smooth spy to='#aboutme' onClick={e=>{ setClickCounter(2)}} className={` ${ clickedCounter === 2 ? "opacity-100 text-lime-300" : "opacity-75" } p-2 font-bold rounded-t-lg  hover:opacity-100 transition-all duration-700 ease-in-out `}>About Me</Link>
                <Link smooth spy to='#myskills' onClick={e=>{ setClickCounter(3)}} className={` ${ clickedCounter === 3 ? "opacity-100 text-lime-300" : "opacity-75" } p-2 font-bold rounded-t-lg  hover:opacity-100 transition-all duration-700 ease-in-out `}>My Skills</Link>
                <Link smooth spy to='#myprojects' onClick={e=>{ setClickCounter(4)}} className={` ${ clickedCounter === 4 ? "opacity-100 text-lime-300" : "opacity-75" } p-2 font-bold rounded-t-lg  hover:opacity-100 transition-all duration-700 ease-in-out `}>My Projects</Link>
                <Link smooth spy to='#myprojects' onClick={e=>{ setClickCounter(5)}} className={` ${ clickedCounter === 5 ? "opacity-100 text-lime-300" : "opacity-75" } p-2 font-bold rounded-t-lg  hover:opacity-100 transition-all duration-700 ease-in-out `}>Blocks</Link>
                {/* <Link smooth spy to='#end' onClick={e=>{ setClickCounter(5)}} className={` ${ clickedCounter === 5 ? "opacity-100 text-lime-300" : "opacity-25" } p-2 font-bold rounded-t-lg  hover:opacity-100 transition-all duration-700 ease-in-out `}>End</Link> */}
            </div>

            <div>
             
            </div>
        </div>
    );
};

export default NavBar;