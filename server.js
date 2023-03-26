// const path = require("path");
const express = require("express");
var fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/api/notes", async (req, res) => {
    // const dbContent = fs.readFileSync('./db/db.json', 'utf-8');
    // console.log(dbContent)

    fs.readFile('./db/db.json',
        {encoding:'utf8', flag:'r'},
        function(err, data) {
    if(err)
        console.log(err);
    else{
        console.log(data);
        res.send(data);
    }
});
});

app.post("/api/notes", async (req, res) => {
    // const dbContent = fs.readFileSync('./db/db.json', 'utf-8');
    
    // console.log(myJSON);

    var data = JSON.parse(fs.readFileSync("./db/db.json"));
    data.push(req.body)
    console.log(data)

    fs.writeFileSync('./db/db.json', JSON.stringify(data) , 'utf-8');
})



app.listen(PORT, () => console.log("Now listening"));