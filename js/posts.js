let id = getUrlParam("userId");

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(response => response.json())
    .then(data => {
        let post = '';
        data.forEach(el => {
            let title = el.title;
            let body = el.body;
            let postId = el.id;
            post += `<h2>${title}</h2> 
            <p>${body}</p> <br>
            <a href="/web/js/API/comments.html?postId=${postId}">Comments</a> <br>
            <hr>
            `
        });
        document.querySelector('#posts').innerHTML = post;
    });
