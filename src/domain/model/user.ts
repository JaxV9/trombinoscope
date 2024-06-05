
export type UserType = {
    gender: string,
    name: {
        title: string,
        first: string,
        last: string
    },
    email: string,
    phone: string,
    picture: {
        large: string,
        medium: string,
        thumbnail: string
        },
    location: {
        street: {
            number: number,
            name: string
        },
        city: string,
        state: string,
        country: string,
        postcode: number,
    },
    registered: {
        date: string,
        age: number
    }
}