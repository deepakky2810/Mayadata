import React, {useState, useRef} from 'react';
import '../../css/components/meetings.css';
import Table from '../table/Table';
import SearchIcon from '../../assets/icons/search_black_24dp.svg';
import CalendarIcon from '../../assets/icons/calendar_today_black_24dp.svg';

import {useDispatch, useSelector } from 'react-redux';

import {addRows} from '../../actions/rowsArrayActions';

const Meetings = () => {

    const flags = useSelector(state => state.flags);
    const meetingsClass = flags.sidebarOpen ? "meetings" : "sidebar-close";
    const rowsArray = useSelector(state => state.rowsArray);

    const initialInputTexts = {
        meetingName: '',
        noOfPeopleAttending: '',
        date: '',
        startTime: '',
        endTime: '',
    };
    const [inputTexts, setInputTexts] = useState(initialInputTexts);

    const dispatch = useDispatch();
    const handleAdd = () => {
        const rowsToAdd = [inputTexts];
        dispatch(addRows(rowsToAdd));
        setInputTexts(initialInputTexts);
    };

    const initialSearchParams = {
        name: '',
        from: '',
        to: '',
    };
    const [searchParams, setSearchParams] = useState(initialSearchParams);
    const [searchActive, setSearchActive] = useState(false);

    const [searchResults, setSearchResults] = useState([]);

    const dateComparision = (date1, date2) => {
        return new Date(date1) - new Date(date2);
    };
    const conditionSatisfied = (row, name, from, to) => {
        
        if (row.meetingName.toLowerCase().startsWith(name.toLowerCase()) && dateComparision(row.date, from) >= 0 && dateComparision(row.date, to) <= 0) {
            return true;
        }
        else {
            return false;
        }
    };

    const timer = useRef(null);
    const searchHandler = (name) => {
        if (timer.current !== null) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout((name) => {
            console.log(name);
            setSearchResults([]);
            const array = [];
            let from = "2000-01-01";
            let to = "2099-12-31";
            if (searchParams.from !== "") from = searchParams.from;
            if (searchParams.to !== "") to = searchParams.to;
            if (name !== '') {
                setSearchActive(true);
                
                for (const row of rowsArray) {
                    if (conditionSatisfied(row, name, from , to)) {
                        array.push(row);
                    }
                }
            }
            else {
                setSearchActive(false);
            }
            setSearchResults([...array]);
        }, 2000);
    };

    return (
        <div className={meetingsClass}>
            <h1>My Meetings</h1>

                

            <div className="search" >
                    <span className="param-name">
                        <img src={SearchIcon} alt="SearchIcon"/>
                        <input 
                            className="in search-1" 
                            type="text"
                            name="searchBox"
                            id="searchBox"
                            placeholder="Search" 
                            value={searchParams["name"]}
                            onChange={(e) => {
                                const obj = { ...searchParams };
                                obj["name"] = e.target.value;
                                setSearchParams(obj);
                                searchHandler(e.target.value);
                            }}

                        />
                    </span>
                    <label className="search-2" htmlFor="from">From:</label>
                    <span className="param-from">
                        <input 
                            className="in" 
                            type="date" 
                            name="from" 
                            id="from" 
                            value={searchParams["from"]}
                            onChange={(e) => {
                                const obj = { ...searchParams };
                                obj["from"] = e.target.value;
                                setSearchParams(obj);
                            }}
                        />
                    <img src={CalendarIcon} alt="CalendarIcon" className="calendarIcon"/>
                    </span>

                    <label className="search-2" htmlFor="to">To:</label>
                    <span className="param-from">
                    <input 
                        className="in" 
                        type="date" 
                        name="to" 
                        id="to" 
                        value={searchParams["to"]}
                        onChange={(e) => {
                            const obj = { ...searchParams };
                            obj["to"] = e.target.value;
                            setSearchParams(obj);
                            searchHandler(searchParams.name);
                        }}
                    />
                    <img src={CalendarIcon} alt="CalendarIcon" className="calendarIcon" />
                    </span>
            </div>

            <div className="meeting-roaster">
                <Table rowsArray={searchActive ? searchResults : rowsArray} />

                <div className="add-row">
                    <input 
                        type="text"
                        className="in in-1" 
                        value={inputTexts["meetingName"]}
                        onChange={(e) => {
                            const obj = {...inputTexts};
                            obj["meetingName"] = e.target.value;
                            setInputTexts(obj);
                        }}
                    />
                    <input
                        type="text"
                        className="in in-2"
                        value={inputTexts["noOfPeopleAttending"]}
                        onChange={(e) => {
                            const obj = {...inputTexts};
                            obj["noOfPeopleAttending"] = e.target.value;
                            setInputTexts(obj);
                        }}
                    />
                    <input
                        type="date"
                        className="in in-3"
                        value={inputTexts["date"]}
                        onChange={(e) => {
                            const obj = {...inputTexts};
                            obj["date"] = e.target.value;
                            setInputTexts(obj);
                        }}
                    />
                    <input
                        type="time"
                        className="in in-4"
                        value={inputTexts["startTime"]}
                        onChange={(e) => {
                            const obj = {...inputTexts};
                            obj["startTime"] = e.target.value;
                            setInputTexts(obj);
                        }}
                    />
                    <input
                        type="time"
                        className="in in-5"
                        value={inputTexts["endTime"]}
                        onChange={(e) => {
                            const obj = {...inputTexts};
                            obj["endTime"] = e.target.value;
                            setInputTexts(obj);
                        }}
                    />
                    <button className="btn" onClick={handleAdd}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default Meetings;