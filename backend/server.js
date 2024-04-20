const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 8080

app.use(cors())

app.get('/', (req, res) => {
  res.json({message: "Udało się"})
})

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`)
}) 