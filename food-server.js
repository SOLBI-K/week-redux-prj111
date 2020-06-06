const express=require("express")
// 서버생성
const app = express();

// 서버구동
app.listen(3355, ()=>{
    console.log("Server Start ...", "http://localhost:3355")
})

/*====================================================================
*   npm run build 성공 후 주석.
 ====================================================================*/
// cross domain
/*app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});*/

/*====================================================================
*   npm run build 성공 후 추가 작성
 ====================================================================*/
const path=require("path");
app.use("/", express.static('./public'));
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

const Client = require("mongodb").MongoClient;

/*====================================================================
*   category
 ====================================================================*/
app.get('/category', (req, res)=>{
    var url = "mongodb://211.238.142.181:27017";

    Client.connect(url, (err, client)=>{
        var db = client.db('mydb');
        db.collection('category').find({})
            .toArray((err, docs)=>{
                res.json(docs);
                console.log(docs);
                client.close();
            });
    })
})

/*====================================================================
*   cate_food
 ====================================================================*/
app.get('/cate_food', (req, res)=>{
    var url = "mongodb://211.238.142.181:27017";

    //이전 화면 Category.js에서 넘겨준 번호
    var cno=req.query.cno;

    Client.connect(url, (err, client)=>{
        var db = client.db('mydb');
        db.collection('food').find({cno:Number(cno)})
            .toArray((err, docs)=>{
                res.json(docs);
                console.log(docs);
                client.close();
            });
    })
})

/*====================================================================
*   cate_info
 ====================================================================*/
app.get('/cate_info', (req, res)=>{
    var url = "mongodb://211.238.142.181:27017";

    //이전 화면 Category.js에서 넘겨준 번호
    var cno=req.query.cno;

    Client.connect(url, (err, client)=>{
        var db = client.db('mydb');
        db.collection('category').find({cateno:Number(cno)})
            .toArray((err, docs)=>{
                res.json(docs[0]);
                console.log(docs[0]);
                client.close();
            });
    })
})

/*====================================================================
*   food_detail
 ====================================================================*/
app.get('/food_detail', (req, res)=>{
    var url = "mongodb://211.238.142.181:27017";

    var no=req.query.no;

    Client.connect(url, (err, client)=>{
        var db = client.db('mydb');
        db.collection('food').find({no:Number(no)})
            .toArray((err, docs)=>{
                res.json(docs[0]);
                console.log(">>>>>"+docs[0]);
                client.close();
            });
    })
})