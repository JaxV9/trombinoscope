import LightAndDarkModeContext from "@/context/lightAndDarkMode"
import { UserType } from "@/domain/model/user"
import { convertDateFormat } from "@/utils/formats"
import { useContext, useState } from "react"

type CardPropsType = {
    userProps: UserType,
    indexProps: number
    deletefuncProps: (index: number) => void
}

export const Card = ({ userProps, indexProps, deletefuncProps }: CardPropsType) => {

    const { isDark } = useContext(LightAndDarkModeContext)!;
    const [currentInfo, setCurrentInfo] = useState<number>(0);

    const infosArray = [
        { key: "Hi, my name is", value: `${userProps.name.title} ${userProps.name.first}` },
        { key: "My email address is", value: `${userProps.email}` },
        { key: "My birthday is", value: `${convertDateFormat(userProps.dob.date)}` },
        { key: "My address is", value: `${userProps.location.postcode} ${userProps.location.city} ${userProps.location.country}` },
        { key: "My phone number is", value: `${userProps.phone}` }
    ]

    return (
        <>
            <div className="card">
                <div className="deleteCardBtn" onClick={() => deletefuncProps(indexProps)}></div>
                <div className="copyCardBtn" onClick={() => { navigator.clipboard.writeText(infosArray[currentInfo].value) }}></div>
                <img className="profilImage" src={userProps.picture.medium} alt="" />
                <div className="infosContainer">
                    <p className="infosKey">{infosArray[currentInfo].key}</p>
                    <p className="infosText">{infosArray[currentInfo].value}</p>
                </div>
                <div className="navCardContainer">
                    <div className="userNameIcon" onMouseEnter={() => setCurrentInfo(0)}></div>
                    <div className="userMailIcon" onMouseEnter={() => setCurrentInfo(1)}></div>
                    <div className="userDobIcon" onMouseEnter={() => setCurrentInfo(2)}></div>
                    <div className="userMapIcon" onMouseEnter={() => setCurrentInfo(3)}></div>
                    <div className="userPhoneIcon" onMouseEnter={() => setCurrentInfo(4)}></div>
                </div>
            </div>
        </>
    )
}