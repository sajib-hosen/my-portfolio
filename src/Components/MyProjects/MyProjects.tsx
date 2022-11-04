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
        <div className='' id='#myprojects' >
        
            <h1 className='text-2xl mb-10 font-bold hover:scale-150 transition-all duration-500 ease-in-out mt-10' >MY PROJECTS</h1>



            {/* Projects - BCS Joyjatra ------------------- */}
           <div className='bg-gray-200 mt-10' >
                <div className='relative flex w-full justify-around items-center h-screen max-w-[1250px] mx-auto  ' >
                    <div className=' w-1/2 px-10' >
                        <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute bottom-28 left-72 z-20 ' width="200px" src={bcs_login} alt="loginPage" />
                        <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute bottom-10 left-20   ' width="200px" src={bcs_home} alt="login" />
                        <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute top-56 left-56 z-10 ' width="350px" src={bcs_book} alt="books" />
                    </div>

                    <div className=' w-1/2 text-left ml-6 px-10' >
                        <h1 style={{textShadow: "0 0 3px #F2F515, 0 0 5px #F2F515"}} className='text-3xl font-bold mb-6 text-indigo-400 '>BCS Joyjatra</h1>
                        <p className='text-lg' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel inventore fugiat nisi, a accusamus quia iusto, soluta obcaecati aut nihil deleniti sint rerum aperiam quibusdam, sequi deserunt at error.</p>
                        <p className='text-lg mt-6' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel inventore fugiat nisi, a accusamus quia iusto, soluta obcaecati aut nihil deleniti sint rerum aperiam quibusdam, sequi deserunt at error.</p>

                        <div className='mt-10 flex text-lg' >
                            <a href='https://illustrious-semolina-241bb3.netlify.app/' target="_black" className='hover:scale-110 border-4 border-blue-300 px-3 py-2 hover:border-black transition-all duration-300 ease-in-out' >Visite</a>
                            {/* <button className='hover:scale-110 ml-5 border-4 border-blue-200 px-3 py-2 hover:border-black transition-all duration-300 ease-in-out' >Get Resume</button> */}
                        </div>
                    </div>
                </div>
           </div>


            {/* Projects - Wholsale-point ------------------- */}
            <div className='' >
            <div className='relative flex w-full justify-around items-center h-screen max-w-[1250px] mx-auto  ' >
                <div className=' w-1/2 text-left mr-6 px-10' >
                    <h1 style={{textShadow: "0 0 3px #F2F515, 0 0 5px #8E44AD"}} className='text-3xl font-bold mb-6 text-indigo-400 '>Wholesale Point</h1>
                    <p className='text-lg' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel inventore fugiat nisi, a accusamus quia iusto, soluta obcaecati aut nihil deleniti sint rerum aperiam quibusdam, sequi deserunt at error.</p>
                    <p className='text-lg mt-6' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel inventore fugiat nisi, a accusamus quia iusto, soluta obcaecati aut nihil deleniti sint rerum aperiam quibusdam, sequi deserunt at error.</p>

                    <div className='mt-10 flex text-lg ' >
                        <a href='https://illustrious-semolina-241bb3.netlify.app/' target="_black" className='hover:scale-110 border-4 border-blue-200 px-3 py-2 hover:border-black transition-all duration-300 ease-in-out' >Visite</a>
                        {/* <button className='hover:scale-110 ml-5 border-4 border-blue-200 px-3 py-2 hover:border-black transition-all duration-300 ease-in-out' >Get Resume</button> */}
                    </div>
                </div>

                <div className=' w-1/2 px-10' >
                    <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute top-20 right-20   ' width="450px" src={nav_bar} alt="login" />
                    <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute top-60 right-10 z-10 ' width="350px" src={report} alt="books" />
                    <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute bottom-30 right-80 z-30 ' width="250px" src={sales_rec} alt="books" />
                    <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute bottom-20 right-24 z-20 ' width="200px" src={wp_login} alt="loginPage" />
                </div>
            </div>
            </div>



           {/* Projects - Adverlo ------------------- */}
           <div className='bg-gray-100 ' >
           <div className='relative flex w-full justify-around items-center h-screen max-w-[1250px] mx-auto  ' >
                <div className=' w-1/2 px-10' >
                    <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute bottom-20 left-10 z-30 ' width="200px" src={section3} alt="loginPage" />
                    <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute bottom-10 left-40  z-10 ' width="200px" src={ad_home} alt="login" />
                    <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute top-48 left-72 z-20 ' width="350px" src={section2} alt="books" />
                    <img className='rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-indigo-700 transition-all duration-500 ease-in-out shadow-xl shadow-indigo-300 absolute bottom-40 left-60 z-20 ' width="280px" src={section1} alt="books" />
                </div>

                <div className=' w-1/2 text-left ml-6 px-10 ' >
                    <h1 style={{textShadow: "0 0 3px #F2F515, 0 0 5px #F2F515"}} className='text-3xl font-bold mb-6 text-indigo-400 '>Adverlo</h1>
                    <p className='text-lg' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel inventore fugiat nisi, a accusamus quia iusto, soluta obcaecati aut nihil deleniti sint rerum aperiam quibusdam, sequi deserunt at error.</p>
                    <p className='text-lg mt-6' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel inventore fugiat nisi, a accusamus quia iusto, soluta obcaecati aut nihil deleniti sint rerum aperiam quibusdam, sequi deserunt at error.</p>

                    <div className='mt-10 flex text-lg' >
                        <a href='https://neon-tanuki-376c60.netlify.app/' target="_black" className='hover:scale-110 border-4 border-blue-200 px-3 py-2 hover:border-black transition-all duration-300 ease-in-out' >Visite</a>
                        {/* <button className='hover:scale-110 ml-5 border-4 border-blue-200 px-3 py-2 hover:border-black transition-all duration-300 ease-in-out' >Get Resume</button> */}
                    </div>
                </div>
            </div>
            </div>


           


            {/* <p>this is my projects</p> */}
        </div>
    );
};

export default MyProjects;