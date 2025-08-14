const { json } = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

app.get("/",async(req,res)=>{
    try{
        const response = await fetch("https://www.tvmaze.com/api/wandinha");
        const data = await response.json();
        res.send(data)
    }catch(error){
        res.send(error)
    }
})

app.listen(port, async () => {
  try {
    console.log(`Server is runnin on http://localhost:${port}`);
  } catch (error) {
    console.error(`ERRO ${error}`);
  }
});
