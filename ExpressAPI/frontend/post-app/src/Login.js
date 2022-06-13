import React from 'react'

const Login = () => {

    const [login, setLogin] = React.useState({
        username: "",
        password: "",
    })
    
    const handleLoginUser = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }
    
    const handleSubmitLogin = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch('http://localhost:5000/api/user/login', {
                method: "post",
                body: JSON.stringify(login),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (res.status !== 401) {
                const data = await res.json();
                console.log(data);
            } else {
                console.log("Wrong username or password");
            }
        } catch (error) {
            console.error("Error occured", error)
        }
    
        // try {
        //   fetch('http://localhost:5000/api/user/login', {
        //     method: "post",
        //     body: JSON.stringify(login),
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   });
        //   console.log("A user is logged in!", login);
          
        // } catch (error) {
        //   console.error("Error: ", error);
        // }
    }
    
    const checkLoginStatus = async () => {

        try {
            const res = await fetch("http://localhost:5000/api/user/authenticated");
            if (res.status !== 401) {
                const data = await res.json();
                console.log(data);
            } else {
                console.log("You are not logged in!");
            }
        } catch (error) {
            console.error("Error occured: ", error)
        }
    }

        return (
            <>
                <form onSubmit={handleSubmitLogin}>
                    <h2>Login User</h2>
                    <input onChange={handleLoginUser} name="username" placeholder="Username" required type="text" />
                    <input onChange={handleLoginUser} name="password" placeholder="Password" required type="password" />
                    <button type="submit">Login</button>
                </form>
            
                <h2>Check Authentication</h2>
                <button onClick={() => checkLoginStatus()}>Am I logged in?</button>
            </>
        )
}

export default Login;