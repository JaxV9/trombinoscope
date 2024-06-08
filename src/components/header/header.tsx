import LightAndDarkModeContext from "@/context/lightAndDarkMode";
import { useContext } from "react";


export const Header = () => {

    const { isDark } = useContext(LightAndDarkModeContext)!;

    return(
        <>
            <div className="navBarContainer">
                <h1 className={isDark ? "darkModeTxt" : "lightModeTxt"}>Trombinoscope</h1>
            </div>
        </>
    )
}