const express = require('express')
const next = require('next')
const api = require('./lib/api.js')
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

server.get('/:id', (req, res) => {
    api.getPaste(req.params.id).then(response => {
      const actualPage = '/paste'
      const paste = { data: response.data}
      app.render(req, res, actualPage, paste)
    }) .catch(error => {
      app.render(req, res, '/_error')
    })
})

server.post('/upload/paste', (req, res) => {
  api.uploadPaste(req.body.name, req.body.body).then(response => {
    const actualPage = '/paste'
    const paste = { data: response.data }
    res.redirect('/'+paste.data._id)
  }) .catch (error => {
    res.send(error)
  })
})

  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})