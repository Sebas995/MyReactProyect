import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { userData } from '../helpers/userData';

const Home = () => {

    const {user, setUser} = useContext(UserContext);

    const handleLogin = () => {
        setUser(userData);
    }

    const handleLogout = () => {
        setUser(null);
    }

    return (
        <div className="container text-center mt-5">
            <h1>Home Screen</h1>
            {
                !user ? 
                <button className="btn btn-primary" onClick={handleLogin}>Sing In</button> :
                <button className="btn btn-danger" onClick={handleLogout}>Sing Out</button>
            }
        </div>
    )
}

export default Home;
