//content of index.js
const http = require('http')
const port = 3000

const requestHandler = require(const, response) =>{
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if(err){
    return console.log('Something bad happened!', err)
  }
  
  console.log(`Server is listening on ${port}`)
})
