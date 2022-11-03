import React from 'react';
import WaterWave from 'react-water-wave';
import solerImg from './../Images/soler.jpg'
import sajibImg from './../Images/sajib.png'


const TopBanner = () => {
    return (
        <WaterWave imageUrl={solerImg} dropRadius={25} >
        {methods => ( <div className='h-screen text-white w-full overflow-x-hidden ' >


            <div className=' flex flex-col text-right justify-end pr-20 absolute bottom-20 right-0  w-2/4' >
                <h1>Contact</h1>
                <p>+880 1788 587821</p>
                <p>or +880 1400 882121</p>
                <p>sajib.201h@gmail.com</p>
            </div>

        </div> )}
    </WaterWave>
    );
};

export default TopBanner;