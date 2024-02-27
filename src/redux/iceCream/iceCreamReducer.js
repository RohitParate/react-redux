import { BUY_ICE_CREAM } from "./iceCreamType"

const initialIceCreamState = {
    noOfIceCream : 20
}

export const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICE_CREAM : return {
            ...state,
            noOfIceCream : state.noOfIceCream - 1
        }
        default : return state
    }
}