import { ADD_POSTS, FETCHING_FAILED, FETCHING_POSTS } from "./postTypes"

const initialState = {
    loading : false,
    data : [],
    error : ''
}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POSTS : return {
            ...state,
            loading : false,
            data : action.payload,
            error : ''
        }
        case FETCHING_POSTS : return {
            ...state,
            loading : true
        }
        case FETCHING_FAILED : return {
            ...state,
            loading : false,
            data : [],
            error : action.payload
        }
        default : return state
    } 
}

export default postReducer