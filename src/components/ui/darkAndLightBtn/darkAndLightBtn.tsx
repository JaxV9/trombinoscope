import LightAndDarkModeContext from "@/context/lightAndDarkMode"
import { useContext, useEffect } from "react"



export const DarkAndLightBtn = () => {

    const { isDark, setIsDark } = useContext(LightAndDarkModeContext)!;

    const updateDark = () => {
        setIsDark(!isDark)
        localStorage.setItem("isDark", (!isDark).toString())
    }


    return (
        <>
            <div className="darkAndLightBtn" onClick={updateDark} style={
                isDark ? { backgroundImage: `url("/assets/sunLightIcon.svg")` } :
                    { backgroundImage: `url("/assets/moonIcon.svg")` }}>
            </div>

        </>
    )
}