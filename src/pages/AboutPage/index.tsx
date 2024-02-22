import { useNavigate } from "react-router"

// Framer motion
import { motion } from "framer-motion"

// Components
import { CustomButton } from "../../components/CustomButton"

// Images
import handshakeImage from "../../assets/img/ab-sec-img.jpg"

// Icons
import icons from "../../helpers/icons"

// Stylesheet
import style from "./style.module.css"

function AboutPage() {
    const navigate = useNavigate()

    return (
        <motion.div
            className={`page-container ${style.page_container}`}

            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: "0" }}
            exit={{ opacity: 0, x: "-100vw" }}
        >
            <h2>Sobre Mim</h2>

            <div className={style.details_container}>
                <div className={style.image_container}>
                    <img className={style.about_image} src={handshakeImage} alt="Handshake image" />
                    <div className={style.mobile_text}>
                        <p className={style.p1}>18 anos de experiência profissional</p>
                        <h3>Atualmente fazendo transição de carreira</h3>
                    </div>
                </div>

                <div className={style.text_container}>
                    <div className={style.desktop_text}>
                        <p className={style.p1}>18 anos de experiência profissional</p>
                        <h3>Atualmente fazendo transição de carreira</h3>
                    </div>
                    <p>Com quase duas décadas de <span style={{ color: "#8067F0", fontWeight: "bold" }}>experiência profissional</span>, em todas as funções atuadas lidei diretamente no relacionamento com o cliente, construindo sólida habilidade de comunicação.</p>
                    <p>Como um profissional dedicado e responsável, estou sempre buscando formas de melhorar meus conhecimentos e contribuir para ambientes melhores.</p>
                    <p>Atualmente cursando <span style={{ color: "#4FAA41", fontWeight: "bold" }}>Ciência da Computação</span>, estou também aprendendo novos conceitos e tecnologias em cursos paralelos.</p>

                    <div className={style.button_container}>
                        <CustomButton caption="Conecte-se comigo" icon={icons.linkedInFillWhiteIcon} iconDirection="right" handleClick={() => { window.open("https://www.linkedin.com/in/michel-mendes") }} />
                        <CustomButton caption="Habilidades técnicas" handleClick={() => { navigate("/skills") }} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export { AboutPage }