import http from 'node:http'
//@ts-ignore
import {verifyJwt} from '@hgraph.io/sdk'

const server = http.createServer(async (request, response) => {
  try {
    const jwt = request.headers['authorization'].split('Bearer ')[1]
    if (!jwt) throw new Error('Missing authorization header')
    await verifyJwt(jwt)
    response.statusCode = 200
    response.end('Ok')
  } catch (e) {
    console.error(e)
    response.statusCode = 401
    response.end(e.toString())
  }
})

server.listen(3000, 'localhost', () => {
  console.log(`Server running at http://localhost:3000/`)
})
