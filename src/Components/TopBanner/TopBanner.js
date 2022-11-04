import React from 'react';
import WaterWave from 'react-water-wave';
import bg_img from './../Images/lily2.jpg'
import fb from './../Images/icons/facebook.png'
import linkedin from './../Images/icons/linkedin.png'
import gitHub from './../Images/icons/github.png'
// import {Link} from 


const TopBanner = () => {
    const [clickedCounter, setClickCounter] = React.useState(2);



    return (
        <WaterWave imageUrl={bg_img} dropRadius={25} >
        {methods => ( <div className='h-screen text-white w-full overflow-x-hidden ' >

            <div className='relative h-full flex justify-center items-center max-w-[1250px] mx-auto ' >

                <div className=' text-left absolute top-32 left-0 px-10 ' >

                    <h2 className='text-4xl ' >Hi, There !!</h2>
                    <div className='text-5xl mt-5 flex ' >This is  
                        <div className='flex ml-3 cursor-pointer text-lime-200' >
                            <p className='hover:scale-150 duration-500 transition-all ease-in-out ml-1 ' >S</p>
                            <p className='hover:scale-150 duration-500 transition-all ease-in-out ml-1' >A</p>
                            <p className='hover:scale-150 duration-500 transition-all ease-in-out ml-1' >J</p>
                            <p className='hover:scale-150 duration-500 transition-all ease-in-out ml-1' >I</p>
                            <p className='hover:scale-150 duration-500 transition-all ease-in-out ml-1' >B</p>
                            <p className='hover:scale-150 duration-500 transition-all ease-in-out ml-4' >H</p>
                            <p className='hover:scale-150 duration-500 transition-all ease-in-out ml-1' >O</p>
                            <p className='hover:scale-150 duration-500 transition-all ease-in-out ml-1' >S</p>
                            <p className='hover:scale-150 duration-500 transition-all ease-in-out ml-1' >E</p>
                            <p className='hover:scale-150 duration-500 transition-all ease-in-out ml-1' >N</p>
                          
                        </div>
                    </div>
                    <h3 className='mt-5 ' >I'm a Full Stack Web Developer</h3>
                    <div className='mt-6 flex justify-start items-center ' >
                        <div >
                            <a href='https://www.facebook.com/sajib.hosen.142' target="_blank" >
                                <img className='hover:scale-150 transition-all duration-300 ease-in-out ' width={30} src={fb} alt='Facebook' ></img>
                            </a>
                        </div>
                        <div className='ml-10' >
                            <a href='https://www.linkedin.com/in/tanzina-afrin-9a9580227/' target="_blank" >
                                <img className='hover:scale-150 transition-all duration-300 ease-in-out ' width={35} src={linkedin} alt='Linked In' ></img>
                            </a>
                        </div>
                        <div className='ml-10' >
                            <a href='https://github.com/sajib-hosen' target="_blank" >
                                <img className='hover:scale-150 transition-all duration-300 ease-in-out ' width={45} src={gitHub} alt='GitHub' ></img>
                            </a>
                        </div>
                    </div>

                    <div className='mt-10' >
                        <button className='border px-3 py-2 rounded-md transition-all duration-300 ease-in-out hover:border-lime-300 hover:text-lime-300 hover:shadow-[5px_5px_30px_4px_rgba(0,0,0,0.56)] hover:shadow-lime-300 ' >Get Resume</button>
                    </div>

                </div>

                <div className='flex flex-col text-white text-right justify-end absolute bottom-20 right-0 px-10 w-2/4' >
                    <h1>Contact</h1>
                    <p>+880 1788 587821</p>
                    <p>sajib.201h@gmail.com</p>
                </div>
            </div>

            <div style={{writingMode: "vertical-rl"}} className='rounded-lg overflow-hidden fixed z-70 top-[25%] left-6 flex flex-row bg-black bg-opacity-70 opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer ' >
                <p to='#home' onClick={e=>{ setClickCounter(1)}} className={` ${ clickedCounter === 1 ? "opacity-100 text-lime-300" : "opacity-25" } p-3 font-bold border-b rounded-t-lg  hover:opacity-100 transition-all duration-700 ease-in-out `}>Home</p>
                <p to='#aboutme' onClick={e=>{ setClickCounter(2)}} className={` ${ clickedCounter === 2 ? "opacity-100 text-lime-300" : "opacity-25" } p-3 font-bold border-b rounded-t-lg  hover:opacity-100 transition-all duration-700 ease-in-out `}>About Me</p>
                <p to='#myskills' onClick={e=>{ setClickCounter(3)}} className={` ${ clickedCounter === 3 ? "opacity-100 text-lime-300" : "opacity-25" } p-3 font-bold border-b rounded-t-lg  hover:opacity-100 transition-all duration-700 ease-in-out `}>My Skills</p>
                <p to='#myprojects' onClick={e=>{ setClickCounter(4)}} className={` ${ clickedCounter === 4 ? "opacity-100 text-lime-300" : "opacity-25" } p-3 font-bold rounded-t-lg  hover:opacity-100 transition-all duration-700 ease-in-out `}>My Projects</p>
            </div>

        </div> )}
    </WaterWave>
    );
};

export default TopBanner;