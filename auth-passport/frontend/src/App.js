import './App.css';
import React from 'react';

function App() {

  //const navigate = useNavigate()

  const [user, setUser] = React.useState({
    username: "",
    password: "",
    role: "user"
  })

  const [login, setLogin] = React.useState({
    username: "",
    password: "",
  })

  const [post, setPost] = React.useState({
    title: "",
    price: "",
  });

  const handleRegisterUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleLoginUser = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const handleProduct = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/user/register", {
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
    // try {
    //   fetch("http://localhost:8080/api/user/register", {
    //     method: "post",
    //     body: JSON.stringify(user),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   console.log("A new user i registered!");
    // } catch (error) {
    //   console.error("Error: ", error);
    // }
  }

  const handleSubmitLogin = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('http://localhost:8080/api/user/login', {
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
  }


  const checkLoginStatus = async () => {

    try {
      const res = await fetch("http://localhost:8080/api/user/authenticated");
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

  const logout = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/user/logout");
      if (res.status !== 401) {
        const data = await res.json();
        console.log(data);
      } else {
        console.log("You need to be logged in in order to log out");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  }
  

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch('http://localhost:8080/api/product/newproduct', {
          method: "post",
          body: JSON.stringify(post),
          headers: {
              "Content-Type": "application/json"
          }
      })
      console.log("logged in")
      if (res.status !== 401) {
          const data = await res.json();
          console.log(data);
      } else {
          console.log("You need to be logged in as admin to add product!");
      }
  } catch (error) {
      console.error("Error occured", error)
    }
  }


  return (
    <div className="App">
    <h1>authentication app</h1>
    <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <input onChange={handleRegisterUser} name="username" id="register-username" placeholder="Username" required type="text" />
        <input onChange={handleRegisterUser} name="password" id="register-password" placeholder="Password" required type="password" />
        <button type="submit">Register</button>
    </form>

    <form onSubmit={handleSubmitLogin}>
        <h2>Login User</h2>
        <input onChange={handleLoginUser} name="username" placeholder="Username" required type="text" />
        <input onChange={handleLoginUser} name="password" placeholder="Password" required type="password" />
        <button type="submit">Login</button>
      </form>
      
    <h2>Check Authentication</h2>
    <button onClick={() => checkLoginStatus()}>Am I logged in?</button>

    <h2>Logout</h2>
      <button onClick={logout}>Logout</button>
      
      <h1>add new product</h1>
      <form onSubmit={handleSubmitPost}>
        <input onChange={handleProduct} name="title" type="text" placeholder="Title..."/>
        <input onChange={handleProduct}name="price" type="text" placeholder="Price..." />
        <button type="submit">Add product</button>
      </form>
    </div>
  );
}

export default App;
