import React from 'react';
import WaterWave from 'react-water-wave';
import solerImg from './../Images/soler.jpg'
import fb from './../Images/icons/facebook.png'
import linkedin from './../Images/icons/linkedin.png'
import gitHub from './../Images/icons/github.png'


const TopBanner = () => {
    return (
        <WaterWave imageUrl={solerImg} dropRadius={25} >
        {methods => ( <div className='h-screen text-white w-full overflow-x-hidden ' >

            <div className='relative h-full flex justify-center items-center max-w-[1250px] mx-auto   ' >

                <div className=' text-left absolute top-32 left-0 ' >

                    <h2 className='text-4xl ' >Hi, There</h2>
                    <h1 className='text-5xl mt-3 ' >This is <span className='text-yellow-300 ' >Sajib</span> Hosen</h1>
                    <h3 className='mt-3 ' >I'm a Full Stack Web Developer</h3>
                    <div className='mt-6 flex justify-start items-center ' >
                        <div >
                            <a href='https://www.facebook.com/sajib.hosen.142' target="_blank" >
                                <img className='hover:scale-125 transition-all duration-300 ease-in-out ' width={30} src={fb} alt='Facebook' ></img>
                            </a>
                        </div>
                        <div className='ml-10' >
                            <a href='https://www.linkedin.com/in/tanzina-afrin-9a9580227/' target="_blank" >
                                <img className='hover:scale-125 transition-all duration-300 ease-in-out ' width={35} src={linkedin} alt='Linked In' ></img>
                            </a>
                        </div>
                        <div className='ml-10' >
                            <a href='https://github.com/sajib-hosen' target="_blank" >
                                <img className='hover:scale-125 transition-all duration-300 ease-in-out ' width={45} src={gitHub} alt='GitHub' ></img>
                            </a>
                        </div>
                    </div>

                    <div className='mt-5' >
                        <button className='border px-3 py-2 rounded-md transition-all duration-300 ease-in-out hover:border-lime-300 hover:text-lime-300 hover:shadow-[5px_5px_30px_4px_rgba(0,0,0,0.56)] hover:shadow-lime-300 ' >Get Resume</button>
                    </div>

                </div>

                <div className='flex flex-col text-right justify-end absolute bottom-20 right-0  w-2/4' >
                    <h1>Contact</h1>
                    <p>+880 1788 587821</p>
                    <p>or +880 1400 882121</p>
                    <p>sajib.201h@gmail.com</p>
                </div>

            </div>

        </div> )}
    </WaterWave>
    );
};

export default TopBanner;