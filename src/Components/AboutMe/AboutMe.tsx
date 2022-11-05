import React from 'react';

const AboutMe = () => {
    return (
        <div id='#aboutme' className='h-screen flex justify-center items-center bg-slate-100 ' >
            <div className=' max-w-[1250px] font-poppins ' >
                <h1 className='text-2xl sm:mb-10 font-bold hover:scale-150 transition-all duration-500 ease-in-out' >ABOUT ME</h1>
                
                <div className='p-5 sm:p-10 mt-4 my-auto flex justify-between items-center flex-col-reverse sm:flex-row  ' >

                    <div className='sm:w-1/2 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out ' >
                        <div className=' mt-5 w-[260px] sm:w-[330px] rounded-lg overflow-hidden hover:scale-110 transition-all duration-500 ease-in-out ' >
                            <img width="350px" src="https://stupefied-wing-b334b1.netlify.app/static/media/profile_image-removebg-previewR.b7d2fe97.png" alt="Sajib Hosen" />
                        </div>

                        <div className='mt-10  text-lg sm:hidden block' >
                            <div className='flex' >
                                <button className='hover:scale-110 border-4 border-blue-300 px-3 py-2 hover:border-black transition-all duration-300 ease-in-out' >Hire Me</button>
                                <a target="_blank"  href="https://drive.google.com/file/d/1qqRGytijTwU5AoZf2jT1bKtSDr6rrGJe/view?usp=share_link" ><button className='hover:scale-110 ml-5 border-4 border-blue-300 px-3 py-2 hover:border-black transition-all duration-300 ease-in-out' >Get Resume</button></a>
                                
                            </div>
                        </div>

                    </div>

                    <div className='sm:w-1/2 ' >

                        <h3 className=' mb-6 flex  justify-center sm:justify-start ' >
                            <p className='hover:scale-110 transition-all duration-300 ease-in-out text-2xl' >Hi, I'm <span className='text-indigo-600' >Sajib</span> Hosen</p>
                        </h3>

                        <p className='text-lg text-left ' >I'm a Bangladesh based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent web application that improves the lives of those around me. <span className='text-blue-400 underline cursor-pointer' >...read more</span> </p>

                        <div className='mt-10  text-lg hidden sm:block' >
                            <div className='flex' >
                                <button className='hover:scale-110 border-4 border-blue-300 px-3 py-2 hover:border-black transition-all duration-300 ease-in-out' >Hire Me</button>
                                <a  target="_blank"  href="https://drive.google.com/file/d/1qqRGytijTwU5AoZf2jT1bKtSDr6rrGJe/view?usp=share_link" ><button className='hover:scale-110 ml-5 border-4 border-blue-300 px-3 py-2 hover:border-black transition-all duration-300 ease-in-out' >Get Resume</button></a>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AboutMe;