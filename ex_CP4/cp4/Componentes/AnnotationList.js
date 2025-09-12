"use client"
import CardAnnotation from "./CardAnnotation"

export default function AnnotationList(annotations){
    return(
        <ul>
            {annotations.map(annotation => (
                <li key={annotation.time}>
                    <CardAnnotation/>
                </li>
            ))}
        </ul>
    )
}