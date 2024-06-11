import React from "react";
import styles from "./styles.module.css"
import { useState } from "react";
import { Embed } from "../types";
import { createPortal } from "react-dom";
import { Style } from "util";

type Props = {
    children?: React.ReactNode,
    title: string,
    text: string,
    id: number,
    embeds: Embed[] | null,
    className: string
}


export const PopupWindow = (Props: Props) => {
    const [popupWindowState, setPopupWindowState] = useState(Props.className)
    const [titleValue, setTitleValue] = useState("")
    const [textValue, settextValue] = useState("")
    const [ChangeOrSaveIcon, setChangeIcon] = useState(
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.92971 19.283L5.92972 19.283L5.95149 19.2775L5.95151 19.2775L8.58384 18.6194C8.59896 18.6156 8.61396 18.6119 8.62885 18.6082C8.85159 18.5528 9.04877 18.5037 9.2278 18.4023C9.40683 18.301 9.55035 18.1571 9.71248 17.9947C9.72332 17.9838 9.73425 17.9729 9.74527 17.9618L16.9393 10.7678L16.9393 10.7678L16.9626 10.7445C17.2761 10.4311 17.5461 10.1611 17.7333 9.91573C17.9339 9.65281 18.0858 9.36038 18.0858 9C18.0858 8.63961 17.9339 8.34719 17.7333 8.08427C17.5461 7.83894 17.276 7.5689 16.9626 7.2555L16.9393 7.23223L16.5858 7.58579L16.9393 7.23223L16.7678 7.06066L16.7445 7.03738C16.4311 6.72395 16.1611 6.45388 15.9157 6.2667C15.6528 6.0661 15.3604 5.91421 15 5.91421C14.6396 5.91421 14.3472 6.0661 14.0843 6.2667C13.8389 6.45388 13.5689 6.72395 13.2555 7.03739L13.2322 7.06066L6.03816 14.2547C6.02714 14.2658 6.01619 14.2767 6.00533 14.2875C5.84286 14.4496 5.69903 14.5932 5.59766 14.7722C5.4963 14.9512 5.44723 15.1484 5.39179 15.3711C5.38809 15.386 5.38435 15.401 5.38057 15.4162L4.71704 18.0703C4.71483 18.0791 4.7126 18.088 4.71036 18.097C4.67112 18.2537 4.62921 18.421 4.61546 18.5615C4.60032 18.7163 4.60385 18.9773 4.81326 19.1867C5.02267 19.3961 5.28373 19.3997 5.43846 19.3845C5.57899 19.3708 5.74633 19.3289 5.90301 19.2896C5.91195 19.2874 5.92085 19.2852 5.92971 19.283Z" stroke="#222222"/>
            <path d="M12.5 7.5L15.5 5.5L18.5 8.5L16.5 11.5L12.5 7.5Z" fill="#222222"/>
        </svg>)
    const [doneIcon, setDoneIcon] = useState(
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6L12 3" stroke="#222222" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 21L12 19" stroke="#222222" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19 12L21 12" stroke="#222222" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 12L6 12" stroke="#222222" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.6569 6.34314L18.364 5.63603" stroke="#222222" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.63605 18.364L7.05026 16.9497" stroke="#222222" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.9498 16.9498L18.364 18.364" stroke="#222222" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.63605 5.63605L7.75737 7.75737" stroke="#222222" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>)
    const [EmbedIcon, setEmbedIcon] = useState(
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 5.9C5.5 5.05992 5.5 4.63988 5.66349 4.31901C5.8073 4.03677 6.03677 3.8073 6.31901 3.66349C6.63988 3.5 7.05992 3.5 7.9 3.5H12.5059C12.8728 3.5 13.0562 3.5 13.2288 3.54145C13.3819 3.57819 13.5282 3.6388 13.6624 3.72104C13.8138 3.8138 13.9435 3.94352 14.2029 4.20294L17.7971 7.79706C18.0565 8.05648 18.1862 8.1862 18.279 8.33757C18.3612 8.47178 18.4218 8.6181 18.4586 8.77115C18.5 8.94378 18.5 9.12723 18.5 9.49411V18.1C18.5 18.9401 18.5 19.3601 18.3365 19.681C18.1927 19.9632 17.9632 20.1927 17.681 20.3365C17.3601 20.5 16.9401 20.5 16.1 20.5H7.9C7.05992 20.5 6.63988 20.5 6.31901 20.3365C6.03677 20.1927 5.8073 19.9632 5.66349 19.681C5.5 19.3601 5.5 18.9401 5.5 18.1V5.9Z" stroke="#222222"/>
            <path d="M12.5 3.5V7.1C12.5 7.94008 12.5 8.36012 12.6635 8.68099C12.8073 8.96323 13.0368 9.1927 13.319 9.33651C13.6399 9.5 14.0599 9.5 14.9 9.5H18.5" stroke="#222222"/>
        </svg>
    )
    const [CloseIcon, setCloseIcon] = useState(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="#222222" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L18 18" stroke="#222222" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleValue(event.target.value)
    }

    const NoteChangesHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setChangeIcon(
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5L11.6464 4.64645L12 4.29289L12.3536 4.64645L12 5ZM12.5 14C12.5 14.2761 12.2761 14.5 12 14.5C11.7239 14.5 11.5 14.2761 11.5 14L12.5 14ZM6.64645 9.64645L11.6464 4.64645L12.3536 5.35355L7.35355 10.3536L6.64645 9.64645ZM12.3536 4.64645L17.3536 9.64645L16.6464 10.3536L11.6464 5.35355L12.3536 4.64645ZM12.5 5L12.5 14L11.5 14L11.5 5L12.5 5Z" fill="#222222"/>
                <path d="M5 16L5 17C5 18.1046 5.89543 19 7 19L17 19C18.1046 19 19 18.1046 19 17V16" stroke="#222222"/>
            </svg>
        )
    }

    const NoteDoneHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setDoneIcon(
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9" stroke="#222222"/>
                <path d="M8 12L11 15L16 9" stroke="#222222"/>
            </svg>
    )
    }

    const EmbedHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = document.getElementById("embeds_popup_container")
        target && createPortal(<input type="file" id="EmbedInput" className={styles.embedsInput} onChange={EmbedFileHandler} accept="image/*, .pdf, .doc" ></input>, target)
    }

    const EmbedFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0];
        const target = document.getElementById("EmbedInput");
        target?.replaceWith(
            `<div className=${styles.embed_file}>
                    <div className=${styles.svg_file_container}>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 5.9C5.5 5.05992 5.5 4.63988 5.66349 4.31901C5.8073 4.03677 6.03677 3.8073 6.31901 3.66349C6.63988 3.5 7.05992 3.5 7.9 3.5H12.5059C12.8728 3.5 13.0562 3.5 13.2288 3.54145C13.3819 3.57819 13.5282 3.6388 13.6624 3.72104C13.8138 3.8138 13.9435 3.94352 14.2029 4.20294L17.7971 7.79706C18.0565 8.05648 18.1862 8.1862 18.279 8.33757C18.3612 8.47178 18.4218 8.6181 18.4586 8.77115C18.5 8.94378 18.5 9.12723 18.5 9.49411V18.1C18.5 18.9401 18.5 19.3601 18.3365 19.681C18.1927 19.9632 17.9632 20.1927 17.681 20.3365C17.3601 20.5 16.9401 20.5 16.1 20.5H7.9C7.05992 20.5 6.63988 20.5 6.31901 20.3365C6.03677 20.1927 5.8073 19.9632 5.66349 19.681C5.5 19.3601 5.5 18.9401 5.5 18.1V5.9Z" stroke="#222222" />
                            <path d="M12.5 3.5V7.1C12.5 7.94008 12.5 8.36012 12.6635 8.68099C12.8073 8.96323 13.0368 9.1927 13.319 9.33651C13.6399 9.5 14.0599 9.5 14.9 9.5H18.5" stroke="#222222" />
                        </svg>
                    </div>
                    <span className=${styles.embed_text}>${file.name}${file.type}</span>
                    <div className=${styles.download_svg_container}>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 14L11.6464 14.3536L12 14.7071L12.3536 14.3536L12 14ZM12.5 5C12.5 4.72386 12.2761 4.5 12 4.5C11.7239 4.5 11.5 4.72386 11.5 5L12.5 5ZM6.64645 9.35355L11.6464 14.3536L12.3536 13.6464L7.35355 8.64645L6.64645 9.35355ZM12.3536 14.3536L17.3536 9.35355L16.6464 8.64645L11.6464 13.6464L12.3536 14.3536ZM12.5 14L12.5 5L11.5 5L11.5 14L12.5 14Z" fill="#222222" />
                            <path d="M5 16L5 17C5 18.1046 5.89543 19 7 19L17 19C18.1046 19 19 18.1046 19 17V16" stroke="#222222" />
                        </svg>
                    </div>
                </div>`
        )
    }

    const closePopup = () => {
        setPopupWindowState(styles.popup_closed)
    }

    return (
        <div className={popupWindowState}>
                <div className={styles.popup_note_container}>
                    <div className={styles.popup_note_title_container}>
                        <input id="title" className={styles.popup_note_title} type="text" onChange={handleTitleChange} value={titleValue} placeholder="add title..."></input>
                        <div className={styles.popup_note_title_change}>
                            Pencil
                        </div>
                    </div>
                    <div className={styles.popup_note_text_container}>
                        <textarea id="text_area" className={styles.popup_note_textarea} placeholder="add text...">{textValue}</textarea>
                    </div>
                    <div className={styles.embeds_container} id="embeds_popup_container">
                        {Props.embeds && Props.embeds.map((embed: Embed) => (
                            <div className={styles.embed_file}>
                                <div className={styles.svg_file_container}>
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 5.9C5.5 5.05992 5.5 4.63988 5.66349 4.31901C5.8073 4.03677 6.03677 3.8073 6.31901 3.66349C6.63988 3.5 7.05992 3.5 7.9 3.5H12.5059C12.8728 3.5 13.0562 3.5 13.2288 3.54145C13.3819 3.57819 13.5282 3.6388 13.6624 3.72104C13.8138 3.8138 13.9435 3.94352 14.2029 4.20294L17.7971 7.79706C18.0565 8.05648 18.1862 8.1862 18.279 8.33757C18.3612 8.47178 18.4218 8.6181 18.4586 8.77115C18.5 8.94378 18.5 9.12723 18.5 9.49411V18.1C18.5 18.9401 18.5 19.3601 18.3365 19.681C18.1927 19.9632 17.9632 20.1927 17.681 20.3365C17.3601 20.5 16.9401 20.5 16.1 20.5H7.9C7.05992 20.5 6.63988 20.5 6.31901 20.3365C6.03677 20.1927 5.8073 19.9632 5.66349 19.681C5.5 19.3601 5.5 18.9401 5.5 18.1V5.9Z" stroke="#222222" />
                                        <path d="M12.5 3.5V7.1C12.5 7.94008 12.5 8.36012 12.6635 8.68099C12.8073 8.96323 13.0368 9.1927 13.319 9.33651C13.6399 9.5 14.0599 9.5 14.9 9.5H18.5" stroke="#222222" />
                                    </svg>
                                </div>
                                <span className={styles.embed_text}>{embed.name}{embed.extension}</span>
                                <div className={styles.download_svg_container}>
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14L11.6464 14.3536L12 14.7071L12.3536 14.3536L12 14ZM12.5 5C12.5 4.72386 12.2761 4.5 12 4.5C11.7239 4.5 11.5 4.72386 11.5 5L12.5 5ZM6.64645 9.35355L11.6464 14.3536L12.3536 13.6464L7.35355 8.64645L6.64645 9.35355ZM12.3536 14.3536L17.3536 9.35355L16.6464 8.64645L11.6464 13.6464L12.3536 14.3536ZM12.5 14L12.5 5L11.5 5L11.5 14L12.5 14Z" fill="#222222" />
                                        <path d="M5 16L5 17C5 18.1046 5.89543 19 7 19L17 19C18.1046 19 19 18.1046 19 17V16" stroke="#222222" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                        </div>
                </div>
                <div className={styles.opitonContainer}>
                    <button className={`${styles.optionButton}`} onClick={NoteChangesHandler}>
                        {ChangeOrSaveIcon}
                    </button>
                    <button className={`${styles.optionButton}`} onClick={NoteDoneHandler}>
                        {doneIcon}
                    </button>
                    <button className={`${styles.optionButton}`} onClick={EmbedHandler}>
                        {EmbedIcon}
                    </button>
                    <button className={styles.optionButton} onClick={closePopup}>
                        {CloseIcon}
                    </button>
                </div>
        </div>
    );
}