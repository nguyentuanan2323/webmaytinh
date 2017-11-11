var expres = require('express');
var app = expres();

var router = expres.Router();
app.use(expres.static('dist'));
app.set("view engine","ejs");
app.set("views","./views");
app.listen(process.env.PORT || 3000);
/*
app.get("/", function(req,res) =>

    {
        res.render("app.js")
    }

);*/

