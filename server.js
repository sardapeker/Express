const express = require("express");

const app = express();

//app.get("/", (req, res) =>{

  //  res.send("Hello-Merhaba- Hiii");
//})


app.get("/users", (req, res =>{

    res.sendFile('./wiews.index.html', {root:__dirname} );
}))


app.listen(3000, () => console.log("Server running"))