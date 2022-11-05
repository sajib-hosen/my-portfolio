import React from 'react';
import lily_footer from './../Images/lily_footer.jpg'
import fb from './../Images/icons/facebook.png'
import lin from './../Images/icons/linkedin.png'
import git from './../Images/icons/github.png'

const Footer = () => {
    return (
        <div id='#end' style={{backgroundImage: `url(${lily_footer})`, backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundPosition: "center" }} className='' >
            <div className='h-96 font-poppins text-white p-10 bg-black bg-opacity-80 flex justify-center items-center ' >
                <div className='w-[900px] mx-auto flex sm:flex-row flex-col justify-around items-center '>
                    <div className=' text-left sm:w-1/2 ' >
                        <p>Contact:</p>
                        <p>Mobile: +880 1788 587821</p>
                        <p>or +880 1400 882121</p>
                        <p>E-mail: sajib.201h@gmail.com</p>

                    </div>
                    <div className='flex justify-around items-center sm:mt-0 mt-5 w-[200px] sm:w-1/2' >
                        <div className='hover:scale-150 transition-all duration-300 ease-in-out ' >
                            <a href='https://www.facebook.com/sajib.hosen.142' target="_blank" >
                                <img width={40} src={fb} alt="facebook" />
                            </a>
                        </div>
                        <div className='hover:scale-150 transition-all duration-300 ease-in-out ' >
                            <a href='https://www.linkedin.com/in/mohammad-sajib-815a29218/' target="_blank" >
                                <img width={50} src={lin} alt="facebook" />
                            </a>
                        </div>
                        <div className='hover:scale-150 transition-all duration-300 ease-in-out ' >
                            <a href='https://github.com/sajib-hosen' target="_blank" >
                                <img width={55} src={git} alt="facebook" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;