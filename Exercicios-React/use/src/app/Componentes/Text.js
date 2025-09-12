import { useState } from "react";

export default  function Text(){
    const [text, setText] = useState("");

    return(
        <div>
            <input value={text} onChange={e => setText(() => (e.target.value))} placeholder="Digite aqui"></input>
            <h1>{text}</h1>
        </div>
    );
}