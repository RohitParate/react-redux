import { ADD_USERS, REMOVE_USERS } from "./userTypes"

const initialState = {
    users : []
}
const userReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_USERS : return {
            // ...state,
            users : action.payload
        }
        case REMOVE_USERS : return {
            users : []
        }
        default : return state
    }
}

export default userReducer