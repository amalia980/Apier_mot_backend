const rootURL = "/api/"; 

//REGISTER USER FUNCTION
const registerUser = async () => {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    const user = {
        username: username,
        password: password,
    }
    
    try {
        const res = await fetch(`${rootURL}register`, {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.error("Error occured", error)
    }

    username = document.getElementById("register-username").value = "";
    password = document.getElementById("register-password").value = "";

}

//LOGIN USER FUNCTION
const loginUser = async () => {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const user = {
        username: username,
        password: password,
    }
    
    try {
        const res = await fetch(`${rootURL}login`, {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (res.status !== 401) {
            const data = await res.json();
            console.log(data);
        } else {
            throw "Wrong username or password";
        }
    } catch (error) {
        console.error("Error occured", error)
    }

    username = document.getElementById("login-username").value = "";
    password = document.getElementById("login-password").value = "";
}

//CHECK USER LOGIN STATUS FUNCTION
const checkLoginStatus = async () => {
    try {
        const res = await fetch(`${rootURL}authenticated`);
        if (res.status !== 401) {
            const data = await res.json();
            console.log(data);
        } else {
            throw "You are not logged in!"
        }
    } catch (error) {
        console.error("Error occured: ", error)
    }
}

//LOGOUT USER FUNCTION
const logout = async () => {
    try {
        const res = await fetch(`${rootURL}logout`)
        if (res.status !== 401) {
            const data = await res.json();
            console.log(data);
        } else {
            throw "You cant logout without being logged in"
        }
    } catch (error) {
            console.log("Error occured: ", error)
    }
}