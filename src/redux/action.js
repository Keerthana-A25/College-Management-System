import {APP_TYPE} from "./type";


export const getLoggedUser = (userData) => {
    return {
        type: APP_TYPE.GET_LOGGED_USER,
        userData
    };
};

export const updateProfileAction = (data) => {
    return {
        type: APP_TYPE.UPDATE_PROFILE_ACTION,
        data
    };
};

