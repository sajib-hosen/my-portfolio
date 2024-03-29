import React from 'react';
import reactImg from './../Images/icons/react.png'
import typescriptImg from './../Images/icons/typescript.png'
import reduxImg from './../Images/icons/redux.png'
import mongodbImg from './../Images/icons/mongodb.png'
import firebaseImg from './../Images/icons/firebase.png'
import nodejsImg from './../Images/icons/node-js.png'
import jestImg from './../Images/icons/jest.png'
import expressImg from './../Images/icons/express.png'
import routerImg from './../Images/icons/react-router.png'
import socketImg from './../Images/icons/socket-io.png'
import tailwindImg from './../Images/icons/Tailwind_CSS.png'
import muiImg from './../Images/icons/mui.png'
import nextjsImg from './../Images/icons/nextjs.png'
import nestjsImg from './../Images/icons/nestjs.png'
import mysqlImg from './../Images/icons/mysql.png'





const MyTechnology = () => {



    return (
        <div id='#myskills' className='h-screen font-poppins text-white p-10 bg-gradient-to-br from-[#15001a] via-[#3e034a] to-[#401181] flex justify-center items-center ' >
            <div className=' w-full sm:px-10 ' >
                <h1 className='text-2xl mb-10 font-bold hover:scale-150 transition-all duration-500 ease-in-out ' >MY SKILLS</h1>
                <div className=' p-2 mt-4 sm:mx-20 grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4 my-auto' >

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-125 transition-all duration-300 ease-linear ' >
                        <div className='rounded-full bg-white ' >
                            <img width={55} src={nextjsImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >Next JS</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-125 transition-all duration-300 ease-linear ' >
                        <div >
                            <img width={55} src={nestjsImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >Nest JS</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-125 transition-all duration-300 ease-linear ' >
                        <div >
                            <img width={90} src={reactImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >React JS</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-125 transition-all duration-300 ease-linear ' >
                        <div >
                            <img width={60} src={typescriptImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >TypeScript</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-125 transition-all duration-300 ease-linear ' >
                        <div >
                            <img width={50} src={reduxImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >Redux JS</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-125 transition-all duration-300 ease-linear ' >
                        <div >
                            <img width={70} src={nodejsImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >Node JS</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-125 transition-all duration-300 ease-linear ' >
                        <div >
                            <img width={50} src={expressImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >Express</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-125 transition-all duration-300 ease-linear ' >
                        <div >
                            <img width={50} src={mongodbImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >MongoDB</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-125 transition-all duration-300 ease-linear ' >
                        <div >
                            <img width={90} src={mysqlImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >MySql</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-125 transition-all duration-300 ease-linear ' >
                        <div >
                            <img width={50} src={jestImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >JEST</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-125 transition-all duration-300 ease-linear ' >
                        <div >
                            <img width={50} src={routerImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >React Router</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-125 transition-all duration-300 ease-linear ' >
                        <div >
                            <img width={50} src={firebaseImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >Firebase</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-125 transition-all duration-300 ease-linear ' >
                        <div >
                            <img width={50} src={socketImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >Socket-io</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-125 transition-all duration-300 ease-linear ' >
                        <div >
                            <img width={50} src={tailwindImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >Tailwind CSS</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-125 transition-all duration-300 ease-linear ' >
                        <div >
                            <img width={50} src={muiImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >MUI</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default MyTechnology;