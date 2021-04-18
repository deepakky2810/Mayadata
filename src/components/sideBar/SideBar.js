import React, { useState } from 'react';
import '../../css/components/sidebar.css';
import MenuIcon from '../../assets/icons/menu_white_24dp.svg';
import HomeIcon from '../../assets/icons/home_white_24dp.svg';
import FaceIcon from '../../assets/icons/face_white_24dp.svg';

import { useDispatch, useSelector } from 'react-redux';
import { setFlags } from '../../actions/flagsActions';

import history from '../../utils/history';


const SideBar = (props) => {
    
    const flags = useSelector(state => state.flags);
    const dispatch = useDispatch();

    const sidebarClass = flags.sidebarOpen ? "sidebar open" : "sidebar";
    const toggleSidebar = () => {
        dispatch(setFlags('sidebarOpen', !flags.sidebarOpen));
    }

    return (
        <div className={sidebarClass}>
            <div className="header">
                <img src={MenuIcon} alt="MenuIcon" onClick={toggleSidebar} style={{cursor:'pointer'}} />
                <p className={flags.sidebarOpen ? "para" : "para hidden"}>1805483</p>
            </div>

            <div 
                className={flags.homeActive ? "home focused" : "home"}
                onClick={() => {
                    history.push('/');
                    dispatch(setFlags('homeActive', true));
                    dispatch(setFlags('aboutActive', false));
                }} 
            >
                <img src={HomeIcon} alt="HomeIcon" className="img-margin"/>
                <p className={flags.sidebarOpen ? "p-margin" : "p-margin hidden"}>Home</p>
            </div>

            <div 
                className={flags.aboutActive ? "about focused" : "about"}
                onClick={() => {
                    history.push('/about');
                    dispatch(setFlags('homeActive', false));
                    dispatch(setFlags('aboutActive', true));
                }} 
            >
                <img src={FaceIcon} alt="FaceIcon" className="img-margin"/>
                <p className={flags.sidebarOpen ? "p-margin" : "p-margin hidden"}>About me</p>
            </div>
        </div>
    );
};

export default SideBar;