export const ADDUSER=Symbol('add-user');
export const DELUSER=Symbol('del-user');
export const UPDATEUSER=Symbol('update-user');

export const createAddUserAction = (user) => ({
    type: ADDUSER,
    payload:user
})
export const deleteUserAction = (id) => ({
    type: DELUSER,
    payload:id
})
export const UpdateUserAction = (id,newUserData) => ({
    type: UPDATEUSER,
    payload:{
        ...newUserData,
        id
    }
})

