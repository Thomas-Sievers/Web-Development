import { useState } from "react";

export default function ToDo(){
    const [text, setText] = useState("");
    const [tasks, setTask] = useState([]);

    function add(){
        const t = text.trim();
        if(!t) return;
        setTask(prev => [...prev, t]);
        setText('');
    }

    return(
        <div>
            <input value={text} onChange={e => setText(e.target.value)} placeholder="Digite sua tarefa aqui"></input>
            <button onClick={add}>Adicionar</button>
            <ul>{tasks.map((task, i) => <li key={task + i}>{task}</li>)}</ul>
        </div>
    )
}