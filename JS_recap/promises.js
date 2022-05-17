
const postsArray = [
    {
        title: "Post one",
        body: "this is pose one"
    },
    {
        title: "Post two",
        body: "this is pose two"
    }
];

const displayPosts = () => {
    document.body.innerHTML = postsArray.map((post) => `<p>${post.title}</p>`)
    .join("");
}


/*================== promise ====================*/
const createPost = (post) => {
    return new Promise((myResolve, myReject) => {
        setTimeout(() => {
            try {
                if (post){
                    postsArray.push(post);
                    myResolve("It worked!")
                } else {
                    throw "Post not set or valid"
                }
            } catch (error) {
                myReject(error);
            }
        }, 3000)
    })
}

/*===================== then and catch - handle promise ================*/
// createPost({
//     title: "Post three",
//     body: "My post three"
// }).then((res) => {
//     console.log(res)
//     displayPosts();
// }).catch((error) => alert(error))

/*================== async await -  handle promise ===============*/
// const fn = async () => {
//     try {
//         // const res = await createPost({
//         //     title: "Post Three",
//         //     body: "my post three"
//         // }) without the data the error will be catched
//         console.log(res)
//         displayPosts();
//     } catch (error) {
//         alert(error)
//     }
// }

// fn();

/*========async await with fetch is just a function that returns a promise =============*/
// const fetchPosts = async () => {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         alert(error)
//     }
// }

// fetchPosts();

/*============================= promise.all=======================*/

const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
    "https://jsonplaceholder.typicode.com/posts/4",
    "https://jsonplaceholder.typicode.com/posts/5",
    "https://jsonplaceholder.typicode.com/posts/6"
];

Promise.all(urls.map(url =>
    fetch(url).then(res => res.json())
)).then(data => {
    console.log(data)
})

/**============= OR ==============*/
// const promise1 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json()
// );

// const promise2 = fetch("https://jsonplaceholder.typicode.com/posts/2").then(res => res.json()
// );

// const promise3 = fetch("https://jsonplaceholder.typicode.com/posts/3").then(res => res.json()
// );

// const promise4 = fetch("https://jsonplaceholder.typicode.com/posts/4").then(res => res.json()
// );

// const promise5 = fetch("https://jsonplaceholder.typicode.com/posts/5").then(res => res.json()
// );

// const promise6 = fetch("https://jsonplaceholder.typicode.com/posts/6").then(res => res.json()
// );

//Promise.all([promise1, promise2, promise3, promise4, promise5, promise6]).then(data => console.log(data))