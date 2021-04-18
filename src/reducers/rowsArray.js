
function createData(id, meetingName, noOfPeopleAttending, date, startTime, endTime) {
    let obj = { id, meetingName, noOfPeopleAttending, date, startTime, endTime};
    return obj;
}


const initialRowsArray = [
    createData(0, "john's meeting", 5, '2021-08-20', '09:00 AM', '11:00 AM'),
    createData(1, "john's meeting", 6, '2021-03-20', '09:00 AM', '11:00 AM'),
    createData(2, "donn's meeting", 7, '2021-04-20', '09:00 AM', '11:00 AM'),
    createData(3, "abraham's meeting", 8, '2021-04-20', '09:00 AM', '11:00 AM'),
    createData(4, "john's meeting", 9, '2021-05-20', '09:00 AM', '11:00 AM'),
    createData(5, "john's meeting", 10, '2021-06-20', '09:00 AM', '11:00 AM'),
    createData(6, "abhishek's meeting", 11, '2021-07-20', '09:00 AM', '11:00 AM'),
    createData(7, "nitin's meeting", 12, '2021-08-20', '09:00 AM', '11:00 AM'),
    createData(8, "john's meeting", 13, '2021-08-20', '09:00 AM', '11:00 AM'),
    createData(9, "niyati's meeting", 14, '2021-09-20', '09:00 AM', '11:00 AM'),
    createData(10, "aakash's meeting", 15, '2021-09-20', '09:00 AM', '11:00 AM'),
    createData(11, "john's meeting", 16, '2021-10-20', '09:00 AM', '11:00 AM'),
    createData(12, "john's meeting", 17, '2021-10-20', '09:00 AM', '11:00 AM'),
    createData(13, "john's meeting", 5232, '2021-11-20', '09:00 AM', '11:00 AM'),
    createData(14, "john's meeting", 56543, '2021-11-20', '09:00 AM', '11:00 AM'),
    createData(15, "john's meeting", 124, '2021-11-20', '09:00 AM', '11:00 AM'),
    createData(16, "john's meeting", 342, '2022-12-20', '09:00 AM', '11:00 AM'),
    createData(17, "john's meeting", 53, '2023-01-20', '09:00 AM', '11:00 AM'),
];


const rowsArray = (state = initialRowsArray, action) => {
    let id = 18;
    switch (action.type) {
        
        case 'DELETE_ROWS': {
            const rowIdToDelete = action.payload;
            const newState = [...state];
            const index = newState.findIndex(ele => ele.id === rowIdToDelete);
            if (index !== -1) newState.splice(index, 1);
            return newState;
        }
        case 'ADD_ROWS': {
            const rowsToAdd = action.payload;
            const newState = [...state];
            const rowsToAddConv = rowsToAdd.map(row => {
                return createData(id++, row.meetingName, row.noOfPeopleAttending, row.date, row.startTime, row.endTime)
            });
            newState.push(...rowsToAddConv);
            return newState;
        }

        default: return state;
    }
}

export default rowsArray;



// case 'SORT_AMT': {
        //     let newSelected = [...state];
        //     const order = action.payload;
        //     if (order === 'asc') {
        //         newSelected.sort((a, b) => {
        //             return a.invoiceAmt - b.invoiceAmt;
        //         });
        //     }
        //     else if (order === 'desc') {
        //         newSelected.sort((a, b) => {
        //             return -1 * (a.invoiceAmt - b.invoiceAmt);

        //         });
        //     }
        //     return newSelected;
        // }
        // case 'SORT_DUE_DATE': {
        //     let newSelected = [...state];
        //     const order = action.payload;
        //     if (order === 'asc') {
        //         newSelected.sort((a, b) => {
        //             return new Date(a.dueDate) - new Date(b.dueDate);
        //         });
        //     }
        //     else if (order === 'desc') {
        //         newSelected.sort((a, b) => {
        //             return -1 * (new Date(a.dueDate) - new Date(b.dueDate));

        //         });
        //     }
        //     return newSelected;
        // }
        // case 'UPDATE_ROW': {
        //     const newRow = action.payload;
        //     const index = state.findIndex(ele => ele.id === newRow.id);
        //     const newState = [...state];
        //     if (index !== -1) newState[index] = newRow;
        //     return newState;
        // }