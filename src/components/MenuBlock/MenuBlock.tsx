import styles from "./styles.module.css"
import React from "react"
import { useState } from "react"
import changeButtonIcon from "../resources/svg/edit.svg" 
import deleteButtonIcon from "../resources/svg/delete.svg"
import closeButtonIcon from "../resources/svg/close.svg"
import saveButtonIcon from "../resources/svg/save.svg"


type Props = {
    children?: React.ReactNode,
    changeState: boolean,
    id: number
    }

export const TitleInput = (props: Props) => {
    const [changeState, setChangeState] = useState(props.changeState)
    const [changeButtonIconState, setChangeButtonState] = useState(changeButtonIcon)

    const HandleEditbutton = (event: MouseEvent) => {
        if (changeState === true) {
            setChangeButtonState(saveButtonIcon)
            setChangeState(false)
        }
        else {
            setChangeButtonState(changeButtonIcon)
            setChangeState(true)
        }
    }

    const HandleDoneButton = (event: MouseEvent) => {
        // set a done state t oa notes
    }

    const HandleDeleteButton = (event: MouseEvent) => {
        localStorage.removeItem(`${props.id}`)
        ClosePopup()
        // deletes a note from localstorage 
    }

    const ClosePopup = () => {
        
        // close popup refill notes table if state is changeble ask to save changes

        if (changeState) {
            // ask to save changes
            if (window.confirm("You have unsaved changes, they will be deleted. Proceed?")) {
                localStorage.removeItem(`${props.id}`)
                // setPopupState(closed)
            }
        }
        else {
            // setPopupState(closed)
        }

        // setPopupState(closed)
    }

        return (
            <nav className={styles.menuContainer}>
                <button className={styles.menuButton}>
                    {svg}
                </button>
            </nav>
        )
}