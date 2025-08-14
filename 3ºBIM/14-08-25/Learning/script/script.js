const express = require('express');
const app = express();
const port = 3000;

//Exemplo 1
app.get("/example1",(req,res)=>{
    res.send("<h1>Example 1</h1><a href='example2'>Example 2</a>");
});

//Exemplo 2
app.get("/example2", (req, res) => {
    res.send("<h1>Example 2</h1><a href='example1'>Example 1</a>")
});


app.listen(port,async()=>{
    try{
        console.log(`Server is runnin on http://localhost:${port}`);
    }catch(error){
        console.error(`ERRO ${error}`);
    }
});
