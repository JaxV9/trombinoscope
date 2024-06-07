import { UserType } from "@/domain/model/user"

type CardPropsType = {
    usersProps: UserType[],
    deletefuncProps: (index: number) => void
}

export const Card = ({ usersProps, deletefuncProps }: CardPropsType) => {

    return (
        <>
            {usersProps.length > 0 ?
                usersProps.map((user, index) => (
                    <div className="card" key={index}>
                        <div className="deleteCardBtn" onClick={() => deletefuncProps(index)}></div>
                        <img className="profilImage" src={user.picture.medium} alt="" />
                        {/* <p>{user.name.title} {user.name.first}</p>
                        <p>{user.dob.age}</p> */}
                        <div className="navCardContainer">
                            <div className="userNameIcon"></div>
                            <div className="userMailIcon"></div>
                            <div className="userDobIcon"></div>
                            <div className="userMapIcon"></div>
                            <div className="userPhoneIcon"></div>
                        </div>
                    </div>
                ))
                : null}
        </>
    )
}