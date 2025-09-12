import { useEffect } from "react";

export default function CardAnnotation(annotation){
    return(
        <div>
            <h1>{annotation.title || "Sem título"}</h1>
            <h3>{annotation.desc || "Sem descrićão"}</h3>
            <p>{annotation.time}</p>
            <button>Deletar</button>
        </div>
    )
}