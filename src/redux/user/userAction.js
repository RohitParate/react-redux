import { ADD_USERS, ADD_USER, REMOVE_USERS, FETCHING_USERS, FETCHING_FAILED } from "./userTypes"

export const addUsers = (users) => {
    return {
        type : ADD_USERS,
        payload : users
    }
}

export const addUser = (user) => {
    return {
        type : ADD_USER,
        payload : user
    }
}

export const removeUsers = () => {
    return {
        type : REMOVE_USERS
    }
}

export const fetchingUsers = () => {
    return {
        type : FETCHING_USERS
    }
}

export const fetchingUsersFailed = (error) => {
    return {
        type : FETCHING_FAILED,
        payload : error
    }
}