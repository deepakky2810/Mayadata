import React from 'react';
// import { pxToVhCustom, pxToVwCustom } from '../utils/unitCoverters';
import SideBar from '../components/sideBar/SideBar';
import Meetings from '../components/meetings/Meetings';



const HomePage = (props) => {

    return (
        <>
        <SideBar isOpen={true}/>
        <Meetings />
        </>
    );
};

export default HomePage;
