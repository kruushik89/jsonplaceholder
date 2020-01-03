let id = getUrlParam("postId");

fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(response => response.json())
    .then(data => {
        let comments = '';
        data.forEach(el => {
            let name = el.name;
            let mail = el.email;
            let body = el.body;
            comments += `
            <h3>${name}</h3>
            <h4>${mail}</h4>
            <p>${body}</p>
            <hr>
             `;
        });
        document.querySelector('#comments').innerHTML = comments;
    });

