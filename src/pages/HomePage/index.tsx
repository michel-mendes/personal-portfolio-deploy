import { useNavigate } from "react-router"

// Framer motion
import { motion } from "framer-motion"

// Icons
import icons from "../../helpers/icons"

// Components
import { CustomButton } from "../../components/CustomButton"
import { TextWriter } from "../../components/TextWriter"
import { FloatingIconsSpawner } from "../../components/FloatingIconsSpawner"

// Images
import avatarImage from "../../assets/img/avatar-no-bg.png"

// Style
import style from "./style.module.css"

function HomePage() {
    const navigate = useNavigate()

    return (
        <motion.div
            className={`page-container ${style.page_container}`}

            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: "0" }}
            exit={{ opacity: 0, x: "-100vw" }}
        >
            <div className={style.presentation_container}>
                <p className={style.p1}>Olá, eu sou</p>
                <h1>Michel Mendes</h1>
                <p>Com 18 anos de experiência profissional, estou atualmente cursando <span className={style.computer_science_text}>Ciência da Computação</span> e em transição de carreira para</p>
                <p className={style.p2}>
                    <span style={{ color: "#63C255" }}>{"{"}</span>
                    <span style={{ color: "#D3AB69" }}>" </span>

                    <span style={{ color: "#8067F0", fontWeight: "bold" }}>
                        <TextWriter text={["Desenvolvedor Backend", "Desenvolvedor Frontend", "Desenvolvedor Web"]} delay={50} nextPhraseDelay={2000} repeat={true} />
                    </span>

                    <span style={{ color: "#D3AB69" }}> "</span>
                    <span style={{ color: "#63C255" }}>{"}"}</span>
                </p>

                <div className={style.buttons_container}>
                    <CustomButton caption="Sobre Mim" handleClick={() => { navigate("/about") }} />

                    <div>
                        <img src={icons.gitHubIcon} alt="GitHub Icon" onClick={() => { window.open("https://github.com/michel-mendes") }} />
                        <img src={icons.linkedInIcon} alt="LinkedIn Icon" onClick={() => { window.open("https://www.linkedin.com/in/michel-mendes") }} />
                    </div>
                </div>
            </div>

            <div className={style.avatar_container}>
                <img src={avatarImage} alt="Avatar Image" />
                <FloatingIconsSpawner timeInterval={700} />
            </div>
        </motion.div>
    )
}

export { HomePage }