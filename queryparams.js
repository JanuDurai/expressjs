const express = require("express");
let app = express();

//static files
app.use(express.static('public'))

// app.listen(8000,()=> console.log(`Server ready`))


//accessing query params

app.get('/uppercase/:value',(req,res)=> res.send(req.params.value.toUpperCase()))

