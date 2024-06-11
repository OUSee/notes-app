import { useState } from "react"
import styles from "./style.module.css"

export const Header = () => {
    const [inputText, setInputText] = useState("Notepad");
    const [currentColor, setCurrentColor] = useState("#222222")

    const ChangeColorActive = () => {
        setCurrentColor("#00a06c")
    }

    const ChangeColorInactive = () => {
        setCurrentColor("#222222")
    }

    return (
        <header id="Header_comp" className={styles.header}>
            <div className="progName">{inputText}</div>
            <div className={styles.tooltipHowTo}>
                <svg onMouseEnter={ChangeColorActive} onMouseLeave={ChangeColorInactive} width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke={currentColor} />
                    <circle cx="12" cy="18" r="0.5" fill={currentColor} />
                    <path d="M12 16V15.1432C12 14.429 12.357 13.762 12.9512 13.3659L13.5497 12.9669C14.4558 12.3628 15 11.3459 15 10.2569V10C15 8.34315 13.6569 7 12 7V7C10.3431 7 9 8.34315 9 10V10" stroke={currentColor} />
                </svg>
                <p className={styles.tooltiptext}>
                    <span>This is a quick guide how to notepad!</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quibusdam quam mollitia omnis. Facere ad nesciunt aspernatur adipisci necessitatibus voluptatibus similique hic sequi esse nulla? Quisquam repudiandae voluptatum quae ipsam!
                    </p>
                    <span>
                        Enjoy!
                    </span>
                </p>
            </div>
        </header>
    )
}