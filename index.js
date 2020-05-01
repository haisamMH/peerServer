const express = require('express')
const PORT = process.env.PORT || 9000

var app = express()
//var provisioning = require('./modules/provisioning');

app.use('/', (req,res)=>{
    res.json({'hi':true})
}); 

app.listen(PORT, () => {
 console.log("Server started listening on port :"+ PORT );
});