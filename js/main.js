fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        let users = '';
        data.forEach(el => {
            let id = el.id;
            users += `<li><a href="/web/js/API/posts.html?userId=${id}">${el.name}</a></li>`
        });
        document.querySelector('div ul').innerHTML = users;
    });



