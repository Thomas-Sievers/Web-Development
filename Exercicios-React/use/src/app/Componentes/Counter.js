import { useState } from "react";

function Counter(){
    const [counter, setCounter] = useState(0);

    return(
        <div>
            <p>Valor: {counter}</p>
            <button onClick={() => setCounter(prev => prev + 1)}>+1</button>
        </div>
    );
}

export default Counter;