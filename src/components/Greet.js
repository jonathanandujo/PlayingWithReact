export const  Greet = (props) => {
    return (
    <div>
        <h1> Hello mf here {props.name} aka {props.heroName} </h1>
        {props.children}
    </div>
)
}

//export default Greet;