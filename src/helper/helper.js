import {registerUser} from "../constant/constant";

export const checkRegisterUser = (data) => {


    // Find a matching user
    const matchedUser = registerUser?.find(
        (user) => user.emp_reg_id === data?.emp_reg_id && user.password === data?.password
    );


    if (matchedUser) {
        return matchedUser;
    } else {
        return "Invalid User";
    }
};


export const updateProfile = (currentUser, newData) => {
    return { ...currentUser, ...newData };
    // Update only the matched user
 //   return currentData?.id === newData.id ? { ...currentData, ...newData } : currentData;
};

// export const updateProfile = (newData) => {
//     return registerUser?.map(user =>
//         user.id === newData.id ? { ...user, ...newData } : user
//     );
// };


export const isValidElement = (data) => {
    return data !== null && data !== undefined && data !== "Invalid User";
};
