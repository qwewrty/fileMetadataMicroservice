var express = require("express");
var app = express(); 
var multer  = require('multer')
var upload = multer({ dest: './uploads/' })

//For getting the port number.
app.set('port', (process.env.PORT || 5000));

//requied to fetch static pages.
app.use(express.static('.'));

app.get("/", function(req, res){
    res.send('index.html');
} )

app.post("/", upload.single('myFile'), function(req, res, next){
    console.log(req.file);
    //res.send(req.file)
})

//Listen on a given port.
app.listen(app.get('port'), function(){
    console.log('listening on :'+ app.get('port'))
});