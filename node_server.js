const http = require('http')
const server = http.createServer(
  (req, res) => {
    console.log(`Client for url -- ${req.url}`)
    if (req.url == '/') {
      res.write('Hello World!');
      res.end()
    }
    if (req.url == '/api/company') {
      res.write(JSON.stringify(
        [{ id: 1, name: "EL AL", country: "ISRAEL" },
        { id: 2, name: "British Airways", country: "England" }
        ]
      ))
      res.end()
    }
  })
server.listen(8080)
console.log('Listening to port 8080......')
