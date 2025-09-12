import { useState, useEffect } from "react";

export default function Timer(){
    const [seconds, setSeconds] = useState(0);
    const [run, setRun] = useState(false);

    useEffect(() => {
        if(!run) return;
        const id = setInterval(() => setSeconds(prev => prev + 1, 10000));
        return () => clearInterval(id);
    }, [run])

    return(
        <div>
            <p>Tempo: {seconds}s</p>
            <button onClick={() => setRun(false)}>Pausar</button>
            <button onClick={() => setRun(true)}>Iniciar</button>
            <button onClick={() => {setRun(false); setSeconds(0)}}>Zerar</button>
        </div>
    )
}