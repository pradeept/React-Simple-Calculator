import React from 'react';

function DisplayArea(props){
    console.log(props.input);
    return(
        <div className='display'>
            <input name="" value={props.input} readOnly placeholder='Use Number Pad.'/>
        </div>
    )
}

export default DisplayArea;