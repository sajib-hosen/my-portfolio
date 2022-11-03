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





const MyTechnology = () => {
    return (
        <div className='h-screen text-white p-10 bg-gradient-to-br from-[#15001a] via-[#3e034a] to-[#401181] flex justify-center items-center ' >
            <div className=' w-full px-10 ' >
                <h1 className='text-2xl' >My Technology</h1>
                <div className=' p-2 mt-4 mx-20 grid grid-cols-5 gap-4 my-auto' >

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-110 transition-all duration-200 ease-linear ' >
                        <div >
                            <img width={90} src={reactImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >React JS</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-110 transition-all duration-200 ease-linear ' >
                        <div >
                            <img width={60} src={typescriptImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >TypeScript</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-110 transition-all duration-200 ease-linear ' >
                        <div >
                            <img width={50} src={reduxImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >Redux JS</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-110 transition-all duration-200 ease-linear ' >
                        <div >
                            <img width={70} src={nodejsImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >Node JS</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-110 transition-all duration-200 ease-linear ' >
                        <div >
                            <img width={50} src={expressImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >Express</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-110 transition-all duration-200 ease-linear ' >
                        <div >
                            <img width={50} src={mongodbImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >MongoDB</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-110 transition-all duration-200 ease-linear ' >
                        <div >
                            <img width={50} src={jestImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >JEST</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-110 transition-all duration-200 ease-linear ' >
                        <div >
                            <img width={50} src={routerImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >React Router</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-110 transition-all duration-200 ease-linear ' >
                        <div >
                            <img width={50} src={firebaseImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >Firebase</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-110 transition-all duration-200 ease-linear ' >
                        <div >
                            <img width={50} src={socketImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >Socket-io</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-110 transition-all duration-200 ease-linear ' >
                        <div >
                            <img width={50} src={tailwindImg} alt="React JS" />
                        </div>
                        <p className=' mt-2' >Tailwind CSS</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-4 hover:scale-110 transition-all duration-200 ease-linear ' >
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