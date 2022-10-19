const express = require('express')
const app = express()
const port = 3000

app.get('/word?', (req, res) => {

    fetchText();
    res.send()
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

async function fetchText() {
    let response = await fetch('https://random-word-api.herokuapp.com/word');
    let data = await response.text();
    console.log(data);
}

