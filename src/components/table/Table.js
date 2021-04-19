import React from 'react';
import '../../css/components/table.css';
import { useDispatch } from 'react-redux';
import { deleteRows } from '../../actions/rowsArrayActions';

import DeleteIcon from '../../assets/icons/delete_white_24dp.svg';



const Table = (props) => {

    const {rowsArray} = props;
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteRows(id));
    };

    const parseDate = (dateString) => {
        const dateVar = new Date(dateString);

        const date = dateVar.getDate() >= 10 ? dateVar.getDate() : "0" + dateVar.getDate();
        const month = dateVar.getMonth() + 1 >= 10 ? (dateVar.getMonth() + 1) : "0" + (dateVar.getMonth() + 1);
        const dateConv = date + "/" + month + "/" + dateVar.getFullYear();
        return dateConv;
    };

    const parseTime = (time) => {
        if(time[time.length - 1] === 'M')   return time;
        let hr = parseInt(time.slice(0,2));
        time += hr < 12 ? ' AM' : ' PM';
        hr = hr % 12 || 12;
        let newTime = "";
        newTime += hr < 10 ? '0' : hr.toString()[0];
        newTime += hr < 10 ? hr.toString()[0] : hr.toString()[1];
        newTime += time.slice(2);
        return newTime;
    };

    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th><p>Sl No.</p></th>
                        <th><p>Meeting Name</p></th>
                        <th><p>No. of people Attending</p></th>
                        <th><p>Date</p></th>
                        <th><p>Start Time</p></th>
                        <th><p>End Time</p></th>
                        <th><p>Actions</p></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rowsArray.map((row, index) => {
                            return (
                                <tr className="row" key={row.id}>
                                    <td className="col">
                                        <p>{index + 1}</p>
                                    </td>
                                    <td className="col">
                                        <p>{row.meetingName}</p>
                                    </td>
                                    <td className="col">
                                        <p>{row.noOfPeopleAttending}</p>
                                    </td>
                                    <td className="col">
                                        <p>{parseDate(row.date)}</p>
                                    </td>
                                    <td className="col">
                                        <p>{parseTime(row.startTime)}</p>
                                    </td>
                                    <td className="col">
                                        <p>{parseTime(row.endTime)}</p>
                                    </td>
                                    <td className="col">
                                        <img src={DeleteIcon} alt="DeleteIcon" className="deleteIcon" onClick={handleDelete.bind(this, row.id)} />
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;