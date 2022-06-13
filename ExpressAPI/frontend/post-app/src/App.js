import './App.css'
import React from 'react'
import { useEffect } from 'react'
import Login from './Login'
//import useFetch from './useFetch';

function App() {

  //state to POST request
  const [post, setPost] = React.useState({
    title: '',
    body: '',
  })

  //state to GET request
  const [data, setData] = React.useState()

  const handlePost = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const handleSubmitPost = (e) => {
    e.preventDefault()
    try {
      fetch('http://localhost:5000/api/posts/newposts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log('Post was saved in database!')
    } catch (error) {
      console.error('Error: ', error)
    }
  }

  useEffect(() => {
    showposts()
    //updatePost()
  }, [])

  const showposts = async () => {
    let res = await fetch("http://localhost:5000/api/posts/getposts")
         let data = await res.json()
         setData(data.posts)
  }

  // async function updatePost(_id) {
  //   try {
  //     let res = await fetch(`http://localhost:5000/api/posts/updatepost/${_id}`, {
  //       method: 'PUT',
  //     })
  //     let data = await res.json()
  //     setData(data.posts)
  //       //.then((res) => res.json())
  //   } catch (error) {
  //     console.log("error occured: ", error)
  //   }
  // }

  // const updatePost = (_id) => {

  //   try {
  //     fetch(`http://localhost:5000/api/posts/updatepost/${_id}`, {
  //       method: 'PUT',
  //       body: JSON.stringify(post),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     console.log('Post was updated in database!')
  //   } catch (error) {
  //     console.error('Error: ', error)
  //   }
  // }

  // useEffect(() => {
  //   async function showposts() {
  //     let res = await fetch("http://localhost:5000/api/posts/getposts")
  //     let data = await res.json()
  //     setData(data.posts)
  //     console.log(data)
  //   }
  //   showposts();
  // }, []);
  
  function deletePost (_id) {
    try {
      fetch(`http://localhost:5000/api/posts/deletepost/${_id}`, {
        method: 'DELETE',
      }).then((res) => res.json())
    } catch (error) {
      console.log("error occured: ", error)
    }

    const deletedPost = data.filter((i) => i._id !== _id)
    setData(deletedPost)
  }


  
  return (
    <>
    <div className="App">
      <h1>Add a post</h1>
      <form onSubmit={handleSubmitPost}>
        <input
          onChange={handlePost}
          name="title"
          placeholder="Title.."
          required
          type="text"
        />
        <input
          onChange={handlePost}
          name="body"
          placeholder="Body.."
          required
          type="text"
        />
        <button type="submit">Add product</button>
      </form>

      <h2>show posts</h2>
      {data && data.map((item, i) => {
          return (
            <div key={i}>
              <form onSubmit={handleSubmitPost}>
              <input value={item.title} onChange={handlePost} />
              <input value={item.body} onChange={handlePost}/>
              {/* <button onClick={() => updatePost(item._id)}>Update post</button> */}
                <button onClick={() => deletePost(item._id)}>Delete post</button>
                </form>
            </div>
          )
        })}
      </div>
      
      <Login />
</>
  )
}

export default App
