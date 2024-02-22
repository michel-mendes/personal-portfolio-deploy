// Framer motion
import { motion } from "framer-motion"

// Components
import { CustomButton } from "../../components/CustomButton"

// Images
import icons from "../../helpers/icons"

// Stylesheet
import style from "./style.module.css"

function PortfolioPage() {
    return (
        <motion.div
            className={`page-container ${style.page_container}`}

            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: "0" }}
            exit={{ opacity: 0, x: "-100vw" }}
        >
            <h2>Portfolio</h2>

            <div className={style.content_body}>

                <h3 className={style.subtitle}>Projetos pessoais</h3>
                <p className={style.p1}>Meus projetos para desenvolvimento de habilidades técnicas</p>

                <ul className={style.projects_list}>
                    <li className={style.list_item}>
                        <h4 className={style.project_title}>FINANZLY</h4>
                        <img className={style.project_image} src={icons.finanzlyImage} alt="Finanzly icon" />
                        <p className={style.project_description}>Aplicação completa para controle financeiro pessoal</p>

                        <div className={style.project_stacks}>
                            <ul>
                                <h5 style={{ color: "#f75023", fontFamily: "Jost", fontWeight: 500, fontSize: ".9rem" }}>Ambiente Backend</h5>
                                <li>TypeScript</li>
                                <li>NodeJs</li>
                                <li>Express</li>
                                <li>MongoDB Atlas</li>
                            </ul>

                            <ul>
                                <h5 style={{ color: "#f75023", fontFamily: "Jost", fontWeight: 500, fontSize: ".9rem" }}>Ambiente Frontend</h5>
                                <li>TypeScript</li>
                                <li>NodeJs</li>
                                <li>React</li>
                                <li>Nivo Charts</li>
                            </ul>
                        </div>

                        <div className={style.project_cta_container}>
                            <CustomButton caption="Repositório Backend" handleClick={() => { window.open("https://github.com/michel-mendes/finanzly-backend") }} />
                            <CustomButton caption="Repositório Frontend" handleClick={() => { window.open("https://github.com/michel-mendes/finanzly-frontend") }} />
                        </div>
                    </li>
                </ul>

            </div>
        </motion.div>
    )
}

export { PortfolioPage }