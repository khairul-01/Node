const http = require('node:http');

const posts = [
    {
        "id": 1,
        "title": "The Future of AI",
        "content": "Artificial Intelligence is rapidly evolving and has the potential to transform various industries. In this article, we explore the current trends and future possibilities of AI technology.",
        "author": "Jane Doe",
        "date": "2024-08-01"
    },
    {
        "id": 2,
        "title": "Exploring the Universe",
        "content": "Space exploration has always fascinated humanity. This piece delves into the latest missions to Mars and beyond, discussing the scientific advancements and challenges faced by space agencies.",
        "author": "John Smith",
        "date": "2024-07-25"
    },
    {
        "id": 3,
        "title": "Healthy Eating Habits",
        "content": "Maintaining a balanced diet is crucial for a healthy lifestyle. Here, we provide practical tips and strategies for incorporating nutritious foods into your daily routine.",
        "author": "Emily Johnson",
        "date": "2024-07-15"
    }
]


const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    if(req.url === '/home' && req.method === 'GET'){
        res.writeHead(200, {
            "Content-type": "text/html"
        })
        res.end(`
            <h1>Hello, Welcome from Home router</h1>
            <p>Hello How are you</p>
            `);
    } else if(req.url === '/posts' && req.method === "GET"){
        res.writeHead(200, {
            "Content-type": "application/json",
            email: "khairul.best@gmail.com",
        });
        res.end(JSON.stringify(posts));
    } else{
        res.end("Data not Found");
    }
    // res.end("Hello from server world.");
})

server.listen(5000, '127.0.0.1', () => {
    console.log("Server is listening on port 5000");
} )