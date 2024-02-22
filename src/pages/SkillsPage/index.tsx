import { useNavigate } from "react-router"

// Framer motion
import { motion } from "framer-motion"

// Components
import { CustomButton } from "../../components/CustomButton"

// Icons
import icons from "../../helpers/icons"

// Stylesheet
import style from "./style.module.css"

function SkillsPage() {
    const navigate = useNavigate()

    return (
        <motion.div
            className={`page-container ${style.page_container}`}

            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: "0" }}
            exit={{ opacity: 0, x: "-100vw" }}
        >
            <h2>Habilidades Técnicas</h2>

            <div className={style.content_body}>
                <p className={style.p1}>Habilidades técnicas adquiridas durante estudos e execução de projetos pessoais</p>

                <ul className={style.skills_list}>
                    <div className={style.list_item}>
                        <p>Linguagens de Programação</p>

                        <div className={style.tech_icons}>
                            <li><img className={style.icon_48} src={icons.techIcons.typeScriptIcon} alt="" /></li>
                            <li><img className={style.icon_48} src={icons.techIcons.javaScriptIcon} alt="" /></li>
                        </div>
                    </div>

                    <div className={style.list_item}>
                        <p>Desenvolvimento Frontend</p>

                        <div className={style.tech_icons}>
                            <li><img className={style.icon_48} src={icons.techIcons.reactIcon} alt="" /></li>
                            <li><img className={style.icon_48} src={icons.techIcons.htmlIcon} alt="" /></li>
                            <li><img className={style.icon_48} src={icons.techIcons.cssIcon} alt="" /></li>
                        </div>
                    </div>

                    <div className={style.list_item}>
                        <p>Desenvolvimento Backend</p>

                        <div className={style.tech_icons}>
                            <li><img className={style.icon_64} src={icons.techIcons.nodeJsIcon} alt="" /></li>
                            <li><img className={style.icon_64} src={icons.techIcons.expressIcon} alt="" /></li>
                        </div>
                    </div>

                    <div className={style.list_item}>
                        <p>Banco de Dados</p>

                        <div className={style.tech_icons}>
                            <li><img className={style.icon_48} src={icons.techIcons.mySqlIcon} alt="" /></li>
                            <li><img className={style.icon_48} src={icons.techIcons.mongoDbIcon} alt="" /></li>
                        </div>
                    </div>

                    <div className={style.list_item}>
                        <p>Outros</p>

                        <div className={style.tech_icons}>
                            <li><img className={style.icon_48} src={icons.techIcons.gitIcon} alt="" /></li>
                            <li><img className={style.icon_48} src={icons.techIcons.figmaIcon} alt="" /></li>
                        </div>
                    </div>
                </ul>

                <div className={style.footer_button_container}>
                    <CustomButton caption="Ver meu portfolio" handleClick={() => { navigate("/portfolio") }} />
                </div>
            </div>
        </motion.div>
    )
}

export { SkillsPage }