export const UserGreeting = () => {
    const isLoggedIn = false;
    return <div>Welcome {isLoggedIn ? 'user' : 'guest'}</div>
}