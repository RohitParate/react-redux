import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'

function CakeContainer() {
    // const reduxStoreValue = useSelector(state => state); //allows us to extract data from redux store for using in this component
    const noOfCakes = useSelector(state => state.cake.noOfCakes);
    const dispatch = useDispatch();

    const [number, setNumber] = useState(1);

    const cakeSubmit = () => {
        // if(number <= noOfCakes){
        //     dispatch(buyCake(number));
        // }
        number ?
            (number <= noOfCakes) ? dispatch(buyCake(number)) : alert('not sufficient cakes') :
            alert('please enter valid number')
    }
    return (
        <>
            <h2>No of cakes - {noOfCakes}</h2>
            <input
                type='number'
                value={number}
                onChange={(e) => {
                    // setNumber(e.target.value)
                    if (e.target.value < 0) {

                        setNumber(1)
                    } else {
                        setNumber(e.target.value)
                    }
                }}
                min={1}
            />
            <button onClick={cakeSubmit}>Buy {number} Cakes</button>
        </>
    )
}

export default CakeContainer