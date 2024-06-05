import { UserType } from "@/domain/model/user"

type CardPropsType = {
    usersProps: UserType[]
}

export const Card = ({ usersProps }: CardPropsType) => {

    return (
        <>
            {usersProps.length > 0 ?
                usersProps.map((user, index) => (
                    <div className="card" key={index}>
                        <div className="deleteCardBtn"></div>
                        <img className="profilImage" src={user.picture.medium} alt="" />
                        <p>{user.name.title} {user.name.first}</p>
                    </div>
                ))
                : null}
        </>
    )
}