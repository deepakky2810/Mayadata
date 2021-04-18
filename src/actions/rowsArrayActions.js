
// const SORT_AMT = 'SORT_AMT';
// const SORT_DUE_DATE = 'SORT_DUE_DATE';
// const UPDATE_ROW = 'UPDATE_ROW';
const DELETE_ROWS = 'DELETE_ROWS';
const ADD_ROWS = 'ADD_ROWS';

// export const sort = (order = 'asc', column) => {
//     if (column === 'amt')
//         return ({
//             type: SORT_AMT,
//             payload: order,
//         });
//     else if (column === 'dueDate')
//         return ({
//             type: SORT_DUE_DATE,
//             payload: order,
//         });
// };

// export const updateRow = (newRow) => {
//     return ({
//         type: UPDATE_ROW,
//         payload: newRow,
//     });
// };

export const deleteRows = (id) => {
    return ({
        type: DELETE_ROWS,
        payload: id,
    });
};

export const addRows = (rowsArray) => {
    return ({
        type: ADD_ROWS,
        payload: rowsArray,
    });
};

// const SELECT_ALL = 'SELECT_ALL';
// const UPDATE_SELECTED = 'UPDATE_SELECTED';


// export const selectAll = (checked) => {
//     return ({
//         type: SELECT_ALL,
//         payload: checked,
//     })
// }

// export const updateSelected = (id) => {
//     return ({
//         type: UPDATE_SELECTED,
//         payload: id,
//     })
// }

