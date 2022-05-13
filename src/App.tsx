import {useKeycloak} from '@react-keycloak/web'

const App = () => {
    const {keycloak} = useKeycloak()

    return (
        <div>
            <div>User is {!keycloak?.authenticated ? 'NOT ' : ''} authenticated</div>
            <br/>
            {!!keycloak.authenticated ? <button type="button" onClick={() => keycloak?.logout()}>
                Logout
            </button> : <button type="button" onClick={() => keycloak?.login()}>
                Login
            </button>}
        </div>
    )
}

export default App
