const server=require("http")
server.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write("<h1 style='color:red'>GOOD AFTERNOON EVERYONE</h1>")
    res.write("<br>")
    res.write("<p>WELCOME TO ARDENT</p>")
    res.write("<br>")
    res.write(`
        <ul>
        <li>MONGODB</li>
        <li>EXPRESS</li>
        <li>REACT</li>
        <li>NODE</li>
        </ul>
        `)
    res.end()

}).listen(4000)
