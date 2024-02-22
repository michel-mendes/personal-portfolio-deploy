import { useNavigate } from "react-router-dom"
import { useEffect, useState, useRef } from "react"

// Images
import icons from "../../helpers/icons"

// Stylesheet
import style from "./style.module.css"

function NavBar() {
    const navigate = useNavigate()

    const [currentPage, setCurrentPage] = useState("")
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const menuToggler = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const lastUrlPart = window.location.href.split("/").pop()

        setCurrentPage(lastUrlPart || "")
    }, [window.location.href])


    // Avoids unwanted menu opening when resizing window
    useEffect(() => {
        function handleWindowResize() {
            setWindowWidth(prevStateValue => {
                if (
                    prevStateValue > 800 && window.innerWidth <= 800
                    ||
                    window.innerWidth > 800
                ) {
                    menuToggler.current!.checked = false
                }

                return window.innerWidth
            })
        }

        window.addEventListener("resize", handleWindowResize)

        return () => {
            window.removeEventListener("resize", handleWindowResize)
        }
    }, [])

    return (
        <nav className={style.navbar}>

            <div className={style.hamburger_menu_container}>

                {/* An input to act like a click receiver in order to control when the menu must be shown */}
                <input className={style.menu_toggler} type="checkbox" id="menu_toggler" ref={menuToggler} />

                {/* These spans will be the hamburger lines */}
                <span className={`${style.hamburger_line} ${style.top_line}`}></span>
                <span className={`${style.hamburger_line} ${style.middle_line}`}></span>
                <span className={`${style.hamburger_line} ${style.bottom_line}`}></span>
            </div>

            <ul className={style.menu_links}>
                <li current-page={currentPage === "" ? "" : null} onClick={() => { navigate("/") }}>
                    <label htmlFor="menu_toggler">
                        <span>Início</span>
                        <div className={style.bottom_line}></div>
                    </label>
                </li>
                <li current-page={currentPage === "about" ? "" : null} onClick={() => { navigate("/about") }}>
                    <label htmlFor="menu_toggler">
                        <span>Sobre</span>
                        <div className={style.bottom_line}></div>
                    </label>
                </li>
                <li current-page={currentPage === "skills" ? "" : null} onClick={() => { navigate("/skills") }}>
                    <label htmlFor="menu_toggler">
                        <span>Habilidades técnicas</span>
                        <div className={style.bottom_line}></div>
                    </label>
                </li>
                <li current-page={currentPage === "portfolio" ? "" : null} onClick={() => { navigate("/portfolio") }}>
                    <label htmlFor="menu_toggler">
                        <span>Portfolio</span>
                        <div className={style.bottom_line}></div>
                    </label>
                </li>
                <li onClick={() => { window.open("https://www.linkedin.com/in/michel-mendes") }}>
                    <div className={style.contact_cta}>Contato</div>
                </li>
            </ul>

            <img className={style.logo} src={icons.logoIcon} alt="Michel Mendes logo" />
        </nav>
    )
}

export { NavBar }