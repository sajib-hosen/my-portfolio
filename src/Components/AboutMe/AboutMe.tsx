import React from 'react';

const AboutMe = () => {
    return (
        <div className='h-screen flex justify-center items-center bg-slate-100 ' >
            <div className=' max-w-[1250px] ' >
                <h1 className='text-2xl mb-10 font-bold hover:scale-150 transition-all duration-500 ease-in-out' >ABOUT ME</h1>
                
                <div className=' p-10 mt-4 my-auto flex justify-between items-center' >

                    <div className='w-1/2 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out ' >
                        <div className='w-[330px] rounded-lg overflow-hidden hover:scale-105 transition-all duration-500 ease-in-out ' >
                            <img width="350px" src="https://stupefied-wing-b334b1.netlify.app/static/media/profile_image-removebg-previewR.b7d2fe97.png" alt="Sajib Hosen" />
                        </div>
                    </div>

                    <div className='w-1/2 ' >
                        <h3 className=' mb-6 text-2xl flex justify-start ' >
                            <p className='hover:scale-110 transition-all duration-300 ease-in-out' >Hi, I'm <span className='text-indigo-600' >Sajib</span> Hosen</p>
                        </h3>
                        <p className='text-lg text-left ' >I'm a Bangladesh based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me. <span className='text-blue-400 underline cursor-pointer' >...read more</span> </p>

                        <div className='mt-10 flex text-lg' >
                            <button className='hover:scale-110 border-4 border-blue-300 px-3 py-2 hover:border-black transition-all duration-300 ease-in-out' >Hire Me</button>
                            <button className='hover:scale-110 ml-5 border-4 border-blue-300 px-3 py-2 hover:border-black transition-all duration-300 ease-in-out' >Get Resume</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AboutMe;