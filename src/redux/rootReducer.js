import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import { iceCreamReducer } from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";
import postReducer from "./posts/postReducer";

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    users : userReducer,
    posts : postReducer
})

export default rootReducer