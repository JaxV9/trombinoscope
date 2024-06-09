
export const convertDateFormat = (currentDate: string) => {
    const date = new Date(currentDate)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    const dateFormated = `${day}/${month}/${year}`
    return dateFormated
}

export const diffBetweenTwoDates = (currentDate1: string, currentDate2: string) => {
    const date1 = new Date(currentDate1)
    const date2 = new Date(currentDate2)

    const diff = date1.getTime() - date2.getTime()
    
    return diff
}