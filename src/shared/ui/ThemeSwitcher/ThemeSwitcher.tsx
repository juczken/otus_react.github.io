import React, { FC } from "react"
import useTheme from "../../contexts/ThemeContext/ThemeContext"
import style from './ThemeSwitcher.module.css';

const ThemeSwitcher: FC = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={() => toggleTheme()}>{theme === 'light' ? '\u{263d}' : '\u{263c}'}</button>
        </div>
    )
}

export default ThemeSwitcher