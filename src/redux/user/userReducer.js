import { ADD_USER, ADD_USERS, FETCHING_FAILED, FETCHING_USERS, REMOVE_USERS } from "./userTypes"

const initialState = {
    loading : false,
    users : [],
    error : ''
}
const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_USERS : return {
            ...state,
            loading : true,
        }
        case ADD_USER : return {
            ...state,
            loading : false,
            users : [...state.users, action.payload],
            error : ''
        }
        case ADD_USERS : return {
            ...state,
            // users : [...state.users, ...action.payload]
            loading : false,
            users : action.payload,
            error : ''
        }
        case REMOVE_USERS : return {
            ...state,
            users : [],
        }
        case FETCHING_FAILED : return {
            ...state,
            loading : false,
            users : [],
            error : action.payload
        }
        default : return state
    }
}

export default userReducer