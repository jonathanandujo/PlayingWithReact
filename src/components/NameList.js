export const NameList = () => {
    const names = ['a1', 'a2', 'a3']
    return <div>
        {
            names.map((name) => {
                return <h1 key={name}> {name}</h1>
            })
        }
    </div>
}