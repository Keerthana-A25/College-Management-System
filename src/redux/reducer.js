import {APP_TYPE} from "./type";
import {checkRegisterUser, updateProfile} from "../helper/helper";


const INITIAL_STATE = {
    isLoggedUserData : null
};


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case APP_TYPE.GET_LOGGED_USER:
            return {
                ...state,
                isLoggedUserData: checkRegisterUser(action.userData)
            };
        case APP_TYPE.UPDATE_PROFILE_ACTION:
            return {
                ...state,
                isLoggedUserData: updateProfile(state.isLoggedUserData, action.data)
            };


        default:
            return state;
    }
};
