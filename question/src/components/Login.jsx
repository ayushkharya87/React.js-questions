import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const [login, setLogin] = useState(false);
    const [user, setUser] = useState([]);

    const handleRegister = () => {
        if(register) {
            // login
            if(register) {
                const loginUser = user.find((e) => e.email === email && e.password === password);
                if (loginUser) {
                    setLogin(true)
                } else {
                    alert("Login failed")
                }
            }
        } else {
            // register
            const newUser = { email, password };
            setUser([...user, newUser]);
            localStorage.setItem("users", JSON.stringify([...user, newUser]));
            setLogin(true)
        }
    };

    const handleLogout = () => {
        setLogin(false)
        setEmail("")
        setPassword("")
    }

  return (
    <div>
        {
            login ? ( <div> <h2>welcome {email}</h2> <button onClick={handleLogout}>Logout</button></div>) : (
                // register
                <div>
                    <h2>{register ? "Login" : "register"}</h2>
                    <div>
            <input type="text" placeholder='email...' onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="password..." onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleRegister}>{register ? "Login" : "Register"}</button>
        </div>
        <p>{
            register ? "Register" : "Login"}</p>

            <button onClick={() => setRegister(!register)}>{ register ? "Register" : "Login"}</button>
        </div>
            )
        }
        

        
    </div>
  )
}

export default Login