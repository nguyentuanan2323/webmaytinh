
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
let SoftWare = require('../models/software');
//get
router.get('/software', (request, response, next) =>{
    SoftWare.find({}).exec( (err, softwares) =>
            {
                if(err){
                    response.json({result :"failed", data:[], message : `Erorr is ${err}`});
                }else{
                    response.json({result :"ok", data: softwares, message:"succesfulyyyyy!"})
                }
            }
        );
    }
);

router.get('/detail/:Alias', (request, response, next) =>{
        SoftWare.find({Alias : request.params.Alias }) .exec( (err, softwares) =>
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



router.post("/insert-software", (request, response, next) =>
{


    const newSoftware = new SoftWare(
        {
            TenNguoiDang:request.body.TenNguoiDang,
            NgayDang:request.body.NgayDang,
            HinhAnh:[request.body.HinhAnh.hinhthunho, request.body.HinhAnh.hinhnen],
            TieuDe: request.body.TieuDe,
            MoTa:request.body.MoTa,
            NoiDung:request.NoiDung
        });


    console.log(newSoftware);


});

module.exports = router;