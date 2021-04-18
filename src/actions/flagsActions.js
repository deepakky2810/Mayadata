const SET_FALSE = 'SET_FALSE';
const SET_TRUE = 'SET_TRUE';

export const setFlags = (flag, action) => {
    if (action === true) {
        return ({
            type: SET_TRUE,
            payload: flag,
        });
    }
    else {
        return ({
            type: SET_FALSE,
            payload: flag,
        });
    }
};
