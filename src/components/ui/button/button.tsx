type ButtonPropsType = {
    functionProps: () => void,
    textProps: string,
    isLoadingProps: boolean
}

export const Button = ({functionProps, textProps, isLoadingProps}:ButtonPropsType) => {

    return (
        <>
            <button className={isLoadingProps ? "buttonUiIsLoading" : "buttonUi"} onClick={functionProps}>{textProps}</button>
        </>
    )
}