import React from 'react';
import bcs_login from  './../Images/Projects/bcs_joy_jatra/bcs_login.png'
import bcs_home from  './../Images/Projects/bcs_joy_jatra/bcs_home.png'
import bcs_book from  './../Images/Projects/bcs_joy_jatra/bcs_books.png'
import wp_login from  './../Images/Projects/wholsale_point/login.png'
import sales_rec from  './../Images/Projects/wholsale_point/sales_rec.png'
import report from  './../Images/Projects/wholsale_point/report.png'
import nav_bar from  './../Images/Projects/wholsale_point/nav_bar.png'
import ad_home from  './../Images/Projects/adverlo/home.png'
import section2 from  './../Images/Projects/adverlo/section2.png'
import section3 from  './../Images/Projects/adverlo/section3.png'
import section1 from  './../Images/Projects/adverlo/section1.png'




const MyProjects = () => {
    return (
        <div className='sm:mt-10 font-poppins ' id='#myprojects' >
        
            <h1 className='text-2xl sm:mb-10 mt-6 font-bold hover:scale-150 transition-all duration-500 ease-in-out ' >MY PROJECTS</h1>

            {/* Projects - BCS Joyjatra ------------------- */}
           <div className='bg-gray-200 mt-6 ' >
                <div className='relative flex flex-col sm:flex-row w-full sm:justify-around items-center h-screen max-w-[1250px] mx-auto  ' >
                    <div className=' sm:w-1/2 sm:px-10 ' >
                        <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute bottom-28 sm:left-72 left-52 z-20 w-[150px] sm:w-[200px] ' src={bcs_login} alt="loginPage" />
                        <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute sm:bottom-10 bottom-14 left-12 sm:left-20  w-[140px] sm:w-[180px] ' src={bcs_home} alt="login" />
                        <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute sm:top-56 sm:bottom-auto bottom-52 sm:left-56 left-40 z-10 sm:w-[350px] w-[200px]' src={bcs_book} alt="books" />

                        <div className='mt-10 text-lg block sm:hidden absolute bottom-10 right-2' >
                            <a href='https://illustrious-semolina-241bb3.netlify.app/' target="_black" className='hover:scale-110 border-4 border-blue-300 px-3 py-2 hover:border-black transition-all duration-300 ease-in-out' >Visite</a>
                        </div>
                    </div>

                    <div className=' sm:w-1/2 text-left sm:ml-6 px-10 ' >
                        <h1 style={{textShadow: "0 0 3px #F2F515, 0 0 5px #F2F515"}} className='text-3xl font-bold mb-6 text-indigo-400 sm:text-left text-center sm:mt-0 mt-3 '>BCS Joyjatra</h1>
                        <p className='text-lg' >The BCS Joyjatra which is online learning platform. That makes student prepared for their BCS, Primary Teachers, Bank job exam. This is the first real time project for me. This web site is serving the organization for almost One year without any trouble.</p>
                        <p className='text-lg mt-6' >I worked on the front-end site for the application. I have used React as JS framework and Tailwindcss as CSS framewor.</p>

                        <div className='mt-10 text-lg sm:block hidden' >
                            <a href='https://illustrious-semolina-241bb3.netlify.app/' target="_black" className='hover:scale-110 border-4 border-blue-300 px-3 py-2 hover:border-black transition-all duration-300 ease-in-out' >Visite</a>
                        </div>

                    </div>
                </div>
           </div>


            {/* Projects - Wholsale-point ------------------- */}
            <div className='' >
                <div className='relative flex flex-col sm:flex-row w-full sm:justify-around sm:items-center h-screen max-w-[1250px] mx-auto  ' >
                    <div className='sm:w-1/2 text-left sm:mr-6 px-10 ' >
                        <h1 style={{textShadow: "0 0 3px #F2F515, 0 0 5px #8E44AD"}} className='text-3xl font-bold mb-6 text-indigo-400 sm:text-left text-center mt-5 '>Wholesale Point</h1>
                        <p className='text-lg ' >This website is for managing store for an organization. This web site is responsible for recording purchas and sales of goods, Indexing individual items, calculating cost and profit, as well as the website will provide you overall report for your store.</p>
                        <p className='text-lg mt-6' >I worked on both front-end and back-end site for this application. I have used React as JS framework, MUI and Tailwindcss as CSS framework, Redux for state management. And for the back-end I have used Express (Node JS) and MongoDB atlas as Database.</p>

                        <div className='mt-10 text-lg sm:block hidden ' >
                            <a href='https://coruscating-faun-e0a53f.netlify.app/' target="_black" className='hover:scale-110 border-4 border-blue-200 px-3 py-2 hover:border-black transition-all duration-300 ease-in-out' >Visite</a>
                        </div>
                        
                    </div>

                    <div className=' sm:w-1/2 w-full px-10 sm:static   ' >
                        <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute sm:top-20 sm:right-20 sm:bottom-auto bottom-40 right-6 sm:w-[430px] w-[250px]' src={nav_bar} alt="login" />
                        <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute sm:top-60 sm:right-10 z-10 sm:bottom-auto sm:w-[350px] right-3 bottom-28 w-[200px]'src={report} alt="books" />
                        <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute sm:bottom-30 sm:right-80 bottom-36 right-52 z-30 sm:w-[250px] w-[150px]' src={sales_rec} alt="books" />
                        <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute sm:bottom-20 sm:right-24 bottom-16 right-44 z-40 sm:w-[200px] w-[120px]' src={wp_login} alt="loginPage" />

                        <div className='mt-10 text-lg block sm:hidden absolute bottom-10 right-5      ' >
                            <a href='https://coruscating-faun-e0a53f.netlify.app/' target="_black" className='hover:scale-110 border-4 border-blue-200 px-3 py-2 hover:border-black transition-all duration-300 ease-in-out' >Visite</a>
                        </div> 

                    </div>
                </div>
            </div>



           {/* Projects - Adverlo ------------------- */}
           <div className='bg-gray-100 ' >
           <div className='relative flex sm:flex-row flex-col w-full sm:justify-around sm:items-center h-screen max-w-[1250px] mx-auto ' >
                
                <div className=' sm:w-1/2 px-10 ' >
                    <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute sm:bottom-20 bottom-32 left-10 z-30 sm:w-[200px] w-[160px] ' src={section3} alt="loginPage" />
                    <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute sm:bottom-10 bottom-28 sm:right-auto right-10 sm:left-28 z-10 sm:w-[170px] w-[130px] ' src={ad_home} alt="login" />
                    <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute sm:top-48 sm:left-72 sm:bottom-auto bottom-52 left-16 z-20 w-[200px] sm:w-[300px]' src={section2} alt="books" />
                    <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute sm:bottom-40 sm:left-60 bottom-80 left-32 z-20 sm:w-[260px] w-[140px]' src={section1} alt="books" />

                    <div className='mt-10 text-lg block sm:hidden absolute bottom-10 right-5' >
                        <a href='https://neon-tanuki-376c60.netlify.app/' target="_black" className='hover:scale-110 border-4 border-blue-200 px-3 py-2 hover:border-black transition-all duration-300 ease-in-out' >Visite</a>
                    </div>

                </div>

                <div className=' sm:w-1/2 text-left sm:ml-6 px-10 ' >
                    <h1 style={{textShadow: "0 0 3px #F2F515, 0 0 5px #F2F515"}} className='text-3xl font-bold mb-6 text-indigo-400 text-center sm:text-left mt-10 '>Adverlo</h1>
                    <p className='text-lg' >This is a demo business website. I have created this site for animation practice.</p>
                    <p className='text-lg mt-6' >I have used vanila CSS as well as I have use gsap (animation package) which is supper exciting animation packaging for building modern websit.</p>

                    <div className='mt-10 text-lg sm:block hidden' >
                        <a href='https://neon-tanuki-376c60.netlify.app/' target="_black" className='hover:scale-110 border-4 border-blue-200 px-3 py-2 hover:border-black transition-all duration-300 ease-in-out' >Visite</a>
                    </div>

                </div>

            </div>
            </div>


           


            {/* <p>this is my projects</p> */}
        </div>
    );
};

export default MyProjects;