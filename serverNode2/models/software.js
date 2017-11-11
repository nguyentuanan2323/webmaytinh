
var mongose = require('mongoose');
var Schema = mongose.Schema;
var SoftWareSchema = new Schema(
    {
        TenNguoiDang:{
            type: String,
            required: true
        },
        NgayDang:{
            type:Date,
            default:Date.now()
        },
        TieuDe:{
            type: String
        },
        Alias:{
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

module.exports = mongose.model('SoftWare', SoftWareSchema, "SoftWare");
