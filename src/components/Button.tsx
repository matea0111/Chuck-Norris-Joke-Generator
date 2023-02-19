type ButtonProps = {
    handleClick: () => void
}

export const Button = (props: ButtonProps) => {
    return <button id="Button" onClick={props.handleClick}> NEW JOKE!</button>
}

export const SaveButton = (props: ButtonProps) => {
    return <button id="Button" onClick={props.handleClick}> SAVE JOKE</button>
}