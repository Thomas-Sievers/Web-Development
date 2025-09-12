import { useState } from "react";

export default function NewAnnotation(){
    //Variables with useState
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [time, setTime] = useState(new Date());
    const [annotations, setannotations] = useState([]);

    //Function to add a annotation to annotations array
    function add(){
        setTime(new Date()); //Time that the function was actived
        setannotations(prev => [...prev, [title, desc, time.toLocaleTimeString()]]);
        setTitle(''); //Reset setTitle
        setDesc(''); //Reset setDesc
    }

    return(
        <div>
            <h1>Nova anotaćão</h1>
            <h3>Título</h3>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Digite o título"/> {/*Catch the value of the input and assign to title*/}
            <h3>Descrićão</h3>
            <input value={desc} onChange={e => setDesc(e.target.value)} placeholder="Digite o conteúdo"/>{/*Catch the value of the input and assign to desc*/}
            <button onClick={add}>Adicionar Anotaćão</button>
        </div>
    );
}