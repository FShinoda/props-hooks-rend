import { useState } from "react";

const Home = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <>
        { loggedIn ? (
            <h1>Bem vindo de volta!</h1>
        ) : ( 
            <button onClick={() => { setLoggedIn(true) }}>Logar</button>
        )

        }
        
        </>
    )
}

export default Home;