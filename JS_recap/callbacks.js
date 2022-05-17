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

const createPost = (post, callback) => {
    setTimeout(() => {
        postsArray.push(post)
        console.log(postsArray)
        callback();
    }, 3000)
}

// createPost({
//     title: "Post three",
//     body: "this is pose three"
// });

// displayPosts();

createPost({
        title: "Post three",
        body: "this is pose three"
});

displayPosts();