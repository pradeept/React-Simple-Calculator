import React from 'react';

function NumberPad({handleClick}){
   
    return(
        <div className='number-pad'>
            <button onClick={(event)=>handleClick(event)}>+</button>
            <button onClick={(event)=>handleClick(event)}>-</button>
            <button onClick={(event)=>handleClick(event)}>*</button>
            <button onClick={(event)=>handleClick(event)}>/</button>
            <button onClick={(event)=>handleClick(event)}>7</button>
            <button onClick={(event)=>handleClick(event)}>8</button>
            <button onClick={(event)=>handleClick(event)}>9</button>
            <button onClick={(event)=>handleClick(event)}>C</button>
            <button onClick={(event)=>handleClick(event)}>4</button>
            <button onClick={(event)=>handleClick(event)}>5</button>
            <button onClick={(event)=>handleClick(event)}>6</button>
            <button onClick={(event)=>handleClick(event)}>=</button>
            <button onClick={(event)=>handleClick(event)}>3</button>
            <button onClick={(event)=>handleClick(event)}>2</button>
            <button onClick={(event)=>handleClick(event)}>1</button>
            <button onClick={(event)=>handleClick(event)}>0</button>

        </div>
    )
}

export default NumberPad;