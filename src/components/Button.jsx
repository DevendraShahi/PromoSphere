function Button(props) {
    return <>
        <button style={{color:props.color ,backgroundColor: props.bgColor, padding:props.padding }}>{props.name}</button>
    </>
}

export default Button;