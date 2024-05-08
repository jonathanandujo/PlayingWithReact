import { ChildComponent } from "./ChildComponent";

export const ParentComponent = () => {
    const greetParent =() => {
        alert('im parent');
    }

    return <ChildComponent greetHandler={greetParent} />
}