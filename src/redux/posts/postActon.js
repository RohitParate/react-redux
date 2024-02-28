import { ADD_POSTS, FETCHING_FAILED, FETCHING_POSTS } from "./postTypes"
import axios from "axios";
export const addPosts = (data) => {
    return {
        type: ADD_POSTS,
        payload: data
    }
}

export const fetchingPosts = () => {
    return {
        type: FETCHING_POSTS
    }
}

export const fetchingFailed = (error) => {
    return {
        type: FETCHING_FAILED,
        payload: error
    }
}
//action creator with thunk which will return a function instead of an object
//the returning function also receives dispatch method as argument
export const fetchPosts = () => {
    return async (dispatch) => {
        // dispatch(fetchingPosts())
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then((response) => {
        //         const posts = response.data
        //         dispatch(addPosts(posts))
        //     })
        //     .catch((error) => {
        //         const errorMessage = error.message;
        //         dispatch(fetchingFailed(errorMessage))
        //     })
        dispatch(fetchingPosts())
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const posts = response.data;
            dispatch(addPosts(posts))
        }catch(error){
            const errorMessage = error.message;
            dispatch(fetchingFailed(errorMessage))
        }
    }
}