import { createPortal } from "react-dom"
import styles from "./style.module.css"
import React, { MouseEventHandler, useEffect, useState } from "react"
import { Embed, Note } from "../types"
import { title } from "process"
import { PopupWindow } from "../PopupWindow/PopupWindow"
import { Style } from "util"



export const Main = () => {

    const [greetState, setGreetState] = useState(styles.greet_hidden)
    const [popupState, setPopupState] = useState(styles.popup_closed)
    const [popupTitleState, setopupTitleState] = useState("")
    const [popupTextState, setopupTextState] = useState("")
    const [popupIdState, setopupIdState] = useState(0)
    const [popupEmbedState, setopupEmbedState] = useState<Embed[] | null>(null)
    
    
    const checkLocalStorage = (): void => {
        const storedNotes = localStorage.JSO;
        
        if (storedNotes) {
            const notes: Note[] = JSON.parse(storedNotes);
            fillTable(notes);
            setopupIdState(notes.length);
            setopupEmbedState((notes[notes.length]).embeds)
        } 
        else {
            setGreetState(styles.greet_visible)
        }

        
    }

    const cardClicked = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        const note = localStorage.getItem(`${target.id}`)
        if (note) { 
            viewPopupWindow()
        }
    }

    const fillTable = (notes: Note[]) => {
        const target = document.getElementById("main_container")
        notes.forEach(note => {
            target && createPortal(
                <div id={`${note.id}`} className={styles.card_container} onClick={cardClicked}>
                <h2 className={styles.card_title}>
                {note.title}
                </h2>
            <p className={styles.card_text}>{note.text}</p>
            <div className={styles.card_has_embeds}>
                svg embedfile
            </div>
        </div>, target)})
    }

    const createCard = () => {

        const note: Note = {
            id: localStorage.length,
            title: "",
            text: "",
            embeds: []
        }
    }

    const viewPopupWindow = (note?: Note) => { 
        if (note) {
            setopupTitleState(note.title);
            setopupTextState(note.text);
            setopupEmbedState(note.embeds);
            setopupIdState(note.id);

            setPopupState(styles.popup_open)
        }
        else {
            setPopupState(styles.popup_open)
        }
    }


    useEffect(() => {
        checkLocalStorage()
    })

    return (
        <section className={styles.mainContainer} id="main_container">
            <div className={greetState}>
                <h1 className={styles.greet_title}>Welcome to Notes!</h1>
                <p className={styles.greet_text}>Let's get started</p>
                <button className={styles.greet_createNoteBtn} onClick={createCard}>Create First Note</button>
            </div>  
            <PopupWindow className={popupState} title={popupTitleState} text={popupTextState}  id={popupIdState} embeds={popupEmbedState}/>
        </section>
    )
}