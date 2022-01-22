const express = require('express')
const next = require('next')
const api = require('./lib/api.js')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

server.get('/:id', (req, res) => {
    api.getPaste(req.params.id).then(response => {
      const actualPage = '/paste'
      const paste = { data: response.data}
      app.render(req, res, actualPage, paste)
    }) .catch(error => {
      app.render(req, res, '/_error')
    })
})

server.get('/upload/paste', (req, res) => {
  api.uploadPaste(req.query.name, req.query.body).then(response => {
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
    
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})