
let = [];

//get many posts

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    document.getElementById("posts").innerHTML = data.map(post => `<div style="margin: 1rem; border-bottom: 1px solid blue"><b>${post.title}</b>

        <button onClick="updatePost(${post.id})">Update me</button>
        <button onClick="deletePost(${post.id})">Delete me</button>
    </div>`
    )
    .join("");
};

// post a post
const postPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: "POST",
        body: JSON.stringify({//convert js object to string
            title: "hey there!",
            body: "new info posted"
        }),
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await res.json();
    alert(JSON.stringify(data))
}

// update post

const updatePost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            title: "title for id",
            body: "body for id"
        }),
        headers: {
            "Content-Type": "application/json",
        }
    })
    const data = await res.json();
    alert(JSON.stringify(data))
}

// delete post

const deletePost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
    })
    const data = await res.json();
    alert(JSON.stringify(data))
}

window.addEventListener("load", () => {
    getPosts();
    document.getElementById("post-button").addEventListener("click", postPost)
})

