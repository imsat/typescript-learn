type HelloTSProps = {
    name: string
}

function HelloTS(props: HelloTSProps) {
    return <h1>Hello, {props.name}</h1>
}

export default HelloTS