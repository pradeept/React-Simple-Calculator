import React from 'react';
import NumberPad from './NumberPad';
import DisplayArea from './DisplayArea';

function App(){
    const [input,setInput] = React.useState("");

    function handleClick(event){
        const key = event.target.innerText;
        let result = 0;
        if(key === '='){
           /* eslint-disable no-eval */
            result = eval(input);
            setInput(result);
        }else if(key === 'C'){
            setInput("");
        }else{
            setInput((prevState)=>
                prevState+key
            );
        } 
    }


    return(
        <div>
            <h1>CALCULATOR</h1>
            <DisplayArea input={input}/>
            <NumberPad handleClick={handleClick}/>
        </div>
    )
}

export default App;