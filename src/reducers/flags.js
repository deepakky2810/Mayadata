const initialFlags = {
    sidebarOpen: true,
    homeActive: true,
    aboutActive: false,
};

const flags = (state = initialFlags, action) => {
    switch (action.type) {
        case 'SET_FALSE': {
            const flag = action.payload;
            const newState = { ...state };
            newState[flag] = false;
            return newState;
        }
        case 'SET_TRUE': {
            const flag = action.payload;
            const newState = { ...state };
            newState[flag] = true;
            return newState;
        }
        default: return state;
    }
};

export default flags;