import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

// Framer motion for routes animation
import { AnimatePresence } from "framer-motion"

// Pages
import { HomePage } from '../pages/HomePage'
import { AboutPage } from '../pages/AboutPage'
import { SkillsPage } from '../pages/SkillsPage'
import { PortfolioPage } from '../pages/PortfolioPage'

function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/skills' element={<SkillsPage />} />
                <Route path='/portfolio' element={<PortfolioPage />} />
                <Route path='*' element={<Navigate to={'/'} />} />
            </Routes>
        </AnimatePresence>
    )
}

export { AnimatedRoutes }