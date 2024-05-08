export const ClickHandler = () => {
    const clickHandler = (event, count =1 ) => {
        console.log('clicked', event);
        console.log(count);
    }
    return (<div>
        <button onClick={clickHandler}> click here</button>
        <button onClick={(event) => clickHandler(event, 5)}> click next</button>
    </div>
    );
}