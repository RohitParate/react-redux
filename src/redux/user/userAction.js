import { ADD_USERS, REMOVE_USERS } from "./userTypes"

export const addUsers = (users) => {
    return {
        type : ADD_USERS,
        payload : users
    }
}

export const removeUsers = () => {
    return {
        type : REMOVE_USERS
    }
}