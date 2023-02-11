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

                        <h3 className=' mb-6 flex justify-start flex-col text-left  ' >
                            <p className='transition-all font-bold duration-300 ease-in-out text-3xl' >Hi, I'm <span className='text-indigo-600' >Sajib</span> Hosen</p>
                            <p className='transition-all text-[#970CC8] mt-2 font-bold duration-300 ease-in-out text-xl' >WEB DEVELOPER</p>
                        </h3>

                        <p className='text-lg text-justify ' >Hard-Working Web Developer With A Flair For Creating Elegant Solutions In The Least Amount Of Time. With A Proven Ability To Adapt To Both Self-Starting And Collaborative Environments While Staying Focused On Achieving High-Quality Results Under Strict Deadlines. Eager To Obtain A Challenging Position At A Prestigious Company That Will Expand My Learning And Builds Upon My Developer Skills.</p>

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