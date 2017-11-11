
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
let Network = require('../models/network');
//get
router.get('/network', (request, response, next) =>{
    Network.find({}).exec( (err, networks) =>
            {
                if(err){
                    response.json({result :"failed", data:[], message : `Erorr is ${err}`});
                }else{
                    response.json({result :"ok", data: networks, message:"succesfulyyyyy!"})
                }
            }
        );
    }
);



router.get('/detail/:Alias', (request, response, next) =>{
    Network.find({Alias : request.params.Alias }) .exec( (err, softwares) =>
            {
                if(err){
                    response.json({result :"failed", data:[], message : `Erorr is ${err}`});
                }else{
                    response.json({result :"ok", data: softwares, message:"succesfuly!"})
                }
            }
        );
    }
);

module.exports = router;