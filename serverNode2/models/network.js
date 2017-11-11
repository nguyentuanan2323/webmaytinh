
var mongose = require('mongoose');
var Schema = mongose.Schema;
var NetworkSchema = new Schema(
    {
        TenNguoiDang:{
            type: String,
            required: true
        },
        NgayDang:{
            type:Date,
        },
        TieuDe:{
            type: String
        },
        HinhAnh: {hinhthunho: String, hinhnen: String}
        ,
        MoTa:{
            type:String
        },
        NoiDung:{
            type:String
        }

    }
);

module.exports = mongose.model('Network', NetworkSchema,"Network");

