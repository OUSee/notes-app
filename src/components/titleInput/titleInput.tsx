import styles from "./styles.module.css"
import React from "react"
import { useState } from "react"

type Props = {
        children?: React.ReactNode 
        title: string | null,
        allowChangeState: boolean,
        id: number
    }

export const TitleInput = (props: Props) => { 
    const [changeState, setChangeState] = useState(props.allowChangeState)

    if (changeState) {
        return (
            <div className={styles.inputConatiner}>
                <input
                    className={styles.title}
                    type="text"
                    name="Title"
                    id={`title_${props.id}`}
                    value={props.title ? props.title : ""}
                    placeholder="Write Note title here..."
                />
            </div>
        )
    }
    else {
        return (
            <div className={styles.inputConatiner}>
                <h2 id={`title_${props.id}`} className={styles.title}>{ props.title }</h2>
            </div>
        )
    }
}