'use client';

import { UserType } from "@/domain/model/user";
import { url } from "inspector";
import { useEffect, useState } from "react"


export const CardsList = () => {

    const [users, setUsers] = useState<UserType[]>([])
    const [userLimit, setUserLimit] = useState<number>(100)

    const fetchUsers = async () => {
        try {
            let response = await fetch(`https://randomuser.me/api/?results=${userLimit}`, { cache: 'force-cache' })
            let data = await response.json()
            setUsers(data.results)
        } catch {
            console.log("error")
        }
    }


    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <>
            <section className="cardsListContainer">
                {users.length > 0 ?
                    users.map((user, index) => (
                        <div className="card" key={index}>
                            <img className="profilImage" src={user.picture.medium} alt="" />
                            <p>{user.name.title}{user.name.first}</p>
                        </div>
                    ))
                    : null}
            </section>
        </>
    )
}