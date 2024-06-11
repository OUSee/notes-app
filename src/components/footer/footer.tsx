import { useCallback, useEffect, useState, KeyboardEvent } from "react";
import styles from "./style.module.css"
import { keyboard } from "@testing-library/user-event/dist/keyboard";

export const Footer = () => {
    const [memeSource, setMemeSource] = useState("https://www.youtube.com/embed/Zq9gy6MFrl4")
    const [currentYear, setCurrentYear] = useState("2024");
    const [creatorName, setCreatorName] = useState("HACKERMAN")
    const [popupState, setPopupState] = useState(styles.popup_window_hidden);
   
    const LogoHandleClick = () => {
        console.log("Logo clicked");
        setMemeSource("https://www.youtube.com/embed/Zq9gy6MFrl4?autoplay=1");
        popupState === styles.popup_window_hidden ? setPopupState(styles.popup_window_visible) : console.log("wrong popupstate");
    }

    const EscClickHandler = () => {
        setPopupState(styles.popup_window_hidden);
        setMemeSource("");
    }

    return (
        <footer id="Footer_comp" className={styles.footer}>
            <svg className={styles.logo_achieve_meme} onClick={LogoHandleClick} width="2em" height="2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="17" height="14" rx="2" stroke="#33363F" stroke-width="2"/>
                <path d="M7 10L9 12L7 14" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 14H16" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <p className={styles.copyright_txt}>© Copyright {creatorName} {currentYear} All rights Reserved</p>
            <div className={popupState}>
                <div className={styles.popup_container} onClick={EscClickHandler}>
                   <iframe className={styles.vidContainer} src={memeSource} title="Bears Dance to Sweet Dreams (Remastered)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </footer>
    )
}
