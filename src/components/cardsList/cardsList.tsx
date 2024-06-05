'use client';

import { UserType } from "@/domain/model/user";
import { useEffect, useState } from "react"
import { Card } from "../card/card";
import { Button } from "../ui/button/button";


export const CardsList = () => {

    const [users, setUsers] = useState<UserType[]>([])
    const [userLimit, setUserLimit] = useState<number>(10)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [currentFilter, setCurrentFilter] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchUsers = async (params?: string) => {
        try {
            setIsLoading(true)
            let response = await fetch(`https://randomuser.me/api/?results=${userLimit}&page=${currentPage}&gender=${currentFilter}`, { cache: 'force-cache' })
            let data = await response.json()

            setUsers(prevList => currentPage === 1 ? data.results : [...prevList, ...data.results]);

        } catch {
            console.log("error")
        }
    }

    const paramsFetchUser = async(e: React.ChangeEvent<HTMLSelectElement>) => {

        if(e.target.value === ""){
            setCurrentFilter("")
        }
        if(e.target.value === "male"){
            setCurrentFilter("male")
        }
        if(e.target.value === "female"){
            setCurrentFilter("female")
        }
    }

    const fetchMoreUsers = () => {
        setCurrentPage(currentPage + 1)
    }

    const handleChangeParams = async () => {
        setUsers([])
        fetchUsers()
    }

    const deleteCard = (id: number) => {
        const usersLessOne = [...users]
        usersLessOne.splice(id,1)
        setUsers(usersLessOne)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        fetchUsers()
    }, [currentPage])

    useEffect(() => {
        setIsLoading(false)
    }, [users])

    useEffect(() => {
        handleChangeParams()
    },[currentFilter])


    return (
        <>
            <section className="cardsListSection">
                <div className="paramsListContainer">
                    <div className="paramsList">
                        <label>Filter by gender</label>
                        <select onChange={(e) => paramsFetchUser(e)}>
                            <option value="">All</option>
                            <option value="male">Men</option>
                            <option value="female">Women</option>
                        </select>
                    </div>
                    <div className="paramsList">
                        <label>Order by date of birth</label>
                        <select>
                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                        </select>
                    </div>
                </div>
                <span>{users.length} users</span>
                <div className="cardsListContainer">
                    <Card usersProps={users} deletefuncProps={deleteCard}/>
                </div>
                <span>{users.length} users</span>
                <Button functionProps={fetchMoreUsers} textProps="Load more" isLoadingProps={isLoading} />
            </section>
        </>
    )
}