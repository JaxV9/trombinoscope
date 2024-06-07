
export const convertDateFormat = (currentDate: string) => {
    const date = new Date(currentDate)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    const dateFormated = `${day}/${month}/${year}`
    return dateFormated
}