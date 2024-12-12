
const http = require('http')
const fs = require('fs')


const server = http.createServer((req , res) => {
    const url = req.url
    const method = req.method 
    if(url === '/'){

        res.setHeader('Content-Type', 'text/html')
        res.write('<html><head><title>My sesponse</title></head> <body><p>hello its my first server</p> <form action="/message" method ="POST" ><input name="message" type="text"/> <button type="submit">Submit</button> </form></body></html>')
        return res.end()
    }

    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt', 'DUMMY')
        res.statusCode = 302
        res.setHeader('location' , '/')
        return res.end()
    }

    res.setHeader('Content-Type', 'text/html')
    res.write('<html><head><title>My sesponse</title></head> <body><p>hello its my first server</p></body></html>')
    res.end()
})

server.listen(3000)