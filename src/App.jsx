import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./App.css"

const App = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)


    console.log(cash);
    const addCash = () => {
        dispatch({ type: "ADD_CASH", payload: 1000 })
    }
    const getCash = () => {
        dispatch({ type: "GET_CASH", payload: 1000 })
    }
    return (
        <div className='main'>
            <div className='cash'>{cash} Руб.</div>
            <div className="buttons">
                <button onClick={() => addCash()}>Increment</button>
                <button onClick={() => getCash()}>Decrement</button>
            </div >
        </div >
    );
};

export default App;