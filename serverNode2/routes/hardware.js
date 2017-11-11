
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
let Hardware = require('../models/hardware');
//get
router.get('/hardware', (request, response, next) =>{
  Hardware.find({}).exec( (err, hardwares) =>
          {
                if(err){
                    response.json({result :"failed", data:[], message : `Erorr is ${err}`});
                }else{
                    response.json({result :"ok", data: hardwares, message:"succesfulyyyyy!"})
                }
            }
        );
    }
);


router.get('/detail/:Alias', (request, response, next) =>{
    Hardware.find({Alias : request.params.Alias }) .exec( (err, softwares) =>
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


//post
router.post("/insert-hardware", (request, response, next) =>
  {
    const newHardware = new Hardware(
      {
        TenNguoiDang:request.body.TenNguoiDang,
        NgayDang:request.body.HinhAnh,
        TieuDe: request.body.TieuDe,
        MoTa:request.body.MoTa,
        NoiDung:request.NoiDung
      });
    newHardware.save((err) =>
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
