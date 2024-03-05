import React from 'react'
import { useAuth } from './AuthContext'

const Auth = () => {

  const {user, login, logout} = useAuth();
  return (
    <div>
        <h1>User Authentication using "useContext"</h1>

        {
          user ? (
            <div>
              <p>welcome, {user.username}</p>
              <button onClick={logout}>Logout</button>       
            </div>
          ) : (
            <button onClick={() => login({username: "user123"})}>Login</button>
          )
        }
    </div>
  )
}

export default Auth