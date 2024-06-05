'use client';

import { UserType } from "@/domain/model/user";
import { url } from "inspector";
import { useEffect, useState } from "react"
import { Card } from "../card/card";
import { Button } from "../ui/button/button";


export const CardsList = () => {

    const [users, setUsers] = useState<UserType[]>([])
    const [userLimit, setUserLimit] = useState<number>(100)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchUsers = async () => {
        try {
            setIsLoading(true)
            let response = await fetch(`https://randomuser.me/api/?results=${userLimit}&page=${currentPage}`, { cache: 'force-cache' })
            let data = await response.json()

            if(currentPage === 1) {
                setUsers(data.results)
            }
            if(currentPage > 1) {
                setUsers(prevList => [...prevList, ...data.results])
            }

        } catch {
            console.log("error")
        }
    }

    const fetchMoreUsers = () => {
        setCurrentPage(currentPage+1)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        fetchUsers()
    },[currentPage])

    useEffect(() => {
        setIsLoading(false)
    },[users])


    return (
        <>
            <section className="cardsListSection">
                <span>{users.length} users</span>
                <div className="cardsListContainer">
                    <Card usersProps={users} />
                </div>
                <span>{users.length} users</span>
                <Button functionProps={fetchMoreUsers} textProps="Load more" isLoadingProps={isLoading}/>
            </section>
        </>
    )
}