import React from 'react';
import '../../css/components/table.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRows, addRows } from '../../actions/rowsArrayActions';

import DeleteIcon from '../../assets/icons/delete_white_24dp.svg';



const Table = (props) => {

    const {rowsArray} = props;
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteRows(id));
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
                                        <p>{row.date}</p>
                                    </td>
                                    <td className="col">
                                        <p>{row.startTime}</p>
                                    </td>
                                    <td className="col">
                                        <p>{row.endTime}</p>
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