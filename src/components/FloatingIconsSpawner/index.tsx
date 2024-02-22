import { useEffect, useState } from "react"

import { randomValue } from "../../helpers/general"

// Icons
import iconImages from "../../helpers/icons"

import style from "./style.module.css"

interface IIconImagesObject {
    [key: string]: string
}

interface IFloatingIconsSpawnerProps {
    timeInterval: number
}

function FloatingIconsSpawner({ timeInterval }: IFloatingIconsSpawnerProps) {

    const { iconsList } = useIconSpawner(timeInterval)

    return (
        <div className={style.icons_container}>
            {
                iconsList.map(iconElement => iconElement)
            }
        </div>
    )
}


// Component logic hook
function useIconSpawner(timeInterval: number) {
    const [iconsList, setIconsList] = useState<Array<JSX.Element>>([])

    useEffect(() => {

        const spawnerTimer = setInterval(() => {

            const elementKey = `iconId${randomValue({ min: 0, max: 9999 })}`
            const iconElement = <SelfDestructFloatingIcon key={elementKey} />

            setIconsList(prev => [...prev, iconElement])

            setTimeout(() => {
                setIconsList(prev => prev.filter(element => element.key !== elementKey))
            }, 4000)

        }, timeInterval)

        return () => {
            clearInterval(spawnerTimer)
        }
    }, [])

    return { iconsList }
}


// Icon component
function SelfDestructFloatingIcon() {
    const getRandomIcon = (iconsList: IIconImagesObject) => {
        const iconNames = Object.keys(iconsList)
        const totalIcons = iconNames.length - 1

        return iconsList[iconNames[randomValue({ min: 0, max: totalIcons })]]
    }

    return (
        <img
            className={style.surging}
            src={getRandomIcon(iconImages.techIcons)}
            alt="Tech icon"
            style={{
                position: "absolute",
                width: "50px",
                height: "50px",
                left: randomValue({ min: 10, max: 80 }) + "%",
                top: randomValue({ min: 10, max: 80 }) + "%",
            }}
        />
    )
}

export { FloatingIconsSpawner }