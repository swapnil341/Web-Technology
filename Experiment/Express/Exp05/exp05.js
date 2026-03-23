const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let date = new Date();
    //let hour = date.getHours();
    
  res.send(`Time = ${date}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
