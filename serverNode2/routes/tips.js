
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
let Tips = require('../models/tips');
//get

router.get('/tip', (request, response, next) =>{
    Tips.find({}).exec( (err, tips) =>
            {
                if(err){
                    response.json({result :"failed", data:[], message : `Erorr is ${err}`});
                }else{
                    response.json({result :"ok", data: tips, message:"succesfulyyyyy!"})
                }
            }
        );
    }
);


router.get('/detail/:Alias', (request, response, next) =>{
    Tips.find({Alias : request.params.Alias }) .exec( (err, softwares) =>
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

router.post("/insert-tip", (request, response, next) =>
{
    const newTip = new Hardware(
        {
            TenNguoiDang:request.body.TenNguoiDang,
            NgayDang:request.body.HinhAnh,
            TieuDe: request.body.TieuDe,
            MoTa:request.body.MoTa,
            NoiDung:request.NoiDung
        });
    newTip.save((err) =>
        {
            if(err){
                response.json({result :"failed", data:{}, message : `Erorr is ${err}`});
            }else{
                response.json({result :"ok", data: {
                    TenNguoiDang:request.body.TenNguoiDang,
                    NgayDang:request.body.HinhAnh,
                    TieuDe: request.body.TieuDe,
                    MoTa:request.body.MoTa,
                    NoiDung:request.NoiDung
                }, message:"succesfulyyyyy!"})
            }
        }
    )

});



module.exports = router;