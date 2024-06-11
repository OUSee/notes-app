import styles from "./styles.module.css"
import React from "react"
import { useState } from "react"

type Props = {
        children?: React.ReactNode 
        text: string | null,
        allowChangeState: boolean,
        id: number
    }

export const TextInput = (props: Props) => {
    const [changeState, setChangeState] = useState(props.allowChangeState)


    if (changeState) {
        return (
        <div className={styles.textinputContainer}>
            <textarea id={`text_area_${props.id}`} className={styles.textArea} placeholder="write note text here...">{props.text}</textarea>
        </div>
    )
    }
    else {
        return (
        <div className={styles.textinputContainer}>
            <p id={`text_area_${props.id}`} className={styles.textArea}>{props.text}</p>
        </div>
    )
    }
    
}