const express = require('express')
const zooRouter = require('./routes/zooRoutes')
const app = express()
const port = 3000

app.use(zooRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})