// import {require} from "../../src/test";

var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();
var router = express.Router();
var dir = '../../dist';
var assetPath = path.join(__dirname, dir);
// app.get('/**', function (req, res){
//     res.sendFile('index.html', { root: assetPath });
// });


app.use(express.static(path.join(__dirname, '../../dist')));

router.get('/**', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../../dist/index.js'))
});



// router.get('/**', function (req, res){
//     res.sendFile('index.html', { root: assetPath });
// });
// app.get('/', (req, res) => {
//     res.send('hello');
// })
// app.get('/listnetwork', (req, res) => {
//   res.sendFile('index.html', { root: assetPath })
// });


// app.use(express.static(path.join(__dirname, '../../dist')));
//
// router.get('/**', (req, res, next) => {
//     res.sendFile(path.resolve(__dirname, '../../dist/index.html'))
// })
/*
global.router = global.router != null ? global.router : express.Router();



router = require('./hardware');
router = require('./tips');
router = require('./software');
router = require('./network');
*/

/*
* Chỉ có router cuối cùng network có thể chạy được tất cả còn lại
* không chạy nhưng khi dời những router ở phía trên
 * xuống dưới dùng thì chạy*/

/* GET home page. *

 */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Bạn vừa mới request tới router!' });


   /* var phancung = new Hardware({TenNguoiDang:"AAAAA", NgayDang: Date.now(),
        HinhAnh:{hinhnen:"http://abc.com",hinhthunho:"http://fsdjdsf.com"}, TieuDe:"abc", MoTa:"abc", NoiDung:"abc" });


    console.log(phancung);
    phancung.save( (err) =>{
        if(err){
            return handleError(err);
        }
        console.log('saved ! ' + JSON.stringify(phancung))
    }  );
*/
    //list-all

    /*Hardware.find({}, function (err, result) {
        //console.log(result);
        if (err) {
            return handleError(err);
        }
        result.forEach(function(result) {

            console.log('%s', result);
        });
    })*/

// });



module.exports = router;

