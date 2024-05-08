export const ChildComponent = (props) => {
    return <div>
        <button onClick={props.greetHandler}> Greet parent</button>
    </div>
}