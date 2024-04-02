let express = require('express');
let app = express()

app.get('/',(req,res)=>{
  res.send('This is Frontend Page...')
})

app.listen(200,()=>{
  console.log('200 Port Working...')
})