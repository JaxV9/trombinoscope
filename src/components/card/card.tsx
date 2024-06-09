import { UserType } from "@/domain/model/user"
import { convertDateFormat } from "@/utils/formats"
import { useState } from "react"
import { Popup } from "../popUp/popup"

type CardPropsType = {
    userProps: UserType,
    indexProps: number
    deletefuncProps: (index: number) => void
}

export const Card = ({ userProps, indexProps, deletefuncProps }: CardPropsType) => {

    const [currentInfo, setCurrentInfo] = useState<number>(0);
    const [popUp, setPopUp] = useState<boolean>(false)
    const [popUpMessage, setPopUpMessage] = useState<string>("")

    const infosArray = [
        { key: "Hi, my name is", value: `${userProps.name.title} ${userProps.name.first}` },
        { key: "My email address is", value: `${userProps.email}` },
        { key: "My birthday is", value: `${convertDateFormat(userProps.dob.date)}` },
        { key: "My address is", value: `${userProps.location.postcode} ${userProps.location.city} ${userProps.location.country}` },
        { key: "My phone number is", value: `${userProps.phone}` }
    ]

    const handleCopyUserValue = async () =>{
        navigator.clipboard.writeText(infosArray[currentInfo].value)
        setPopUp(true)
        setPopUpMessage("Save on your clipboard")
    }

    const handleUserDeleted = async () =>{
        deletefuncProps(indexProps)
        setPopUp(true)
        setPopUpMessage("User deleted")
    }

    return (
        <>
            {
                popUp ?
                    <Popup messageProps={popUpMessage} setMessageProps={setPopUpMessage} isEnabledProps={true} setIsEnabledProps={setPopUp} />
                    :
                    null
            }
            <div className="card">
                <div className="deleteCardBtn" onClick={handleUserDeleted}></div>
                <div className="copyCardBtn" onClick={handleCopyUserValue}></div>
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