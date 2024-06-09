import LightAndDarkModeContext from "@/context/lightAndDarkMode";
import { useContext, useEffect, useState } from "react";
import { clearInterval } from "timers";

type PopUpPropsType = {
    messageProps: string,
    setMessageProps: (messageProps: string) => void,
    isEnabledProps: boolean,
    setIsEnabledProps: (isEnabledProps: boolean) => void
}

export const Popup = ({ messageProps, setMessageProps, isEnabledProps, setIsEnabledProps }: PopUpPropsType) => {

    const { isDark } = useContext(LightAndDarkModeContext)!;
    const [isFadeOut, setIsFadeOut] = useState<boolean>(false)

    useEffect(() => {
        const fadeOutTimer = setInterval(() => {
            setIsFadeOut(true)
        }, 3000);
        const timer = setInterval(() => {
            setIsEnabledProps(false)
            setMessageProps("")
        }, 5000);


    }, [isEnabledProps])

    return (
        <>
            {
                isEnabledProps ?
                    <div className={isFadeOut ? "popUpContainerFadeOut" : "popUpContainer"}>
                        <p>{messageProps}</p>
                    </div>
                    :
                    null
            }
        </>
    )
}