import React from 'react';
import Hero from '../components/home_components/Hero';
import Services from '../pages/Services';
import WinterCareTips from '../components/home_components/WinterCareTips';
import ExpertVets from '../components/home_components/ExpertVets';



const Home = () => {
    return (
        <div>
            <div><Hero /></div>
            <div><Services/></div>
            <div><WinterCareTips/></div>
            <div><ExpertVets/></div>
        </div>
    );
};

export default Home;