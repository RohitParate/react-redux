import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamAction';

function IceCreamContainer() {
    const noOfIceCreams = useSelector(state => state.iceCream.noOfIceCream);
    const dispatch = useDispatch()
    return (
        <>
            <h2>No of IceCream - {noOfIceCreams}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy iceCream</button>
        </>
    )
}

export default IceCreamContainer