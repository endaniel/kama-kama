const express = require('express');
const path = require('path');
const app = express();
const MongoClient = require('mongodb').MongoClient;

let option = {
    server: {
        socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS: 30000
        }
    },
    replset: {
        socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS: 30000
        }
    }
};
const dbUri = "mongodb://admin:admin@dcluster-shard-00-00-rq6aa.mongodb.net:27017,dcluster-shard-00-01-rq6aa.mongodb.net:27017,dcluster-shard-00-02-rq6aa.mongodb.net:27017/myDb?ssl=true&replicaSet=DCluster-shard-0&authSource=admin"

let insertGambles = function(db, callback){
  const gambles = [{match: 'מכבי ת"א נגד בני סכנין', sport: 'כדורגל', date: '17/08/2017'},
          {match: 'מכבי חיפה נגד מכבי אילת', sport: 'כדורסל', date: '19/08/2017'}]
  
  db.collection("gambles").insertMany(gambles, function(err, res){
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    callback();
  })
}
let initDb = function(db, callback){
  db.collection("gambles").count(function(err, count){
      if(!err && count === 0){
        insertGambles(db, callback);
      }
      else{
        callback();
      }
  })
}

MongoClient.connect(dbUri, function(err, db) {
  if(err) throw err;
  initDb(db, function(){
    db.close();
  });
});

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/a', (req, res) => { 
    MongoClient.connect(dbUri, (err, db) => {
        db.collection("gambles").find({}).toArray((err, result) => {
            if (err) throw err;
            res.json(result);
            db.close();
        })
    })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);