var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID("56b28dc061c190ace9fa8fb5");

MongoClient.connect('mongodb://fandrade:usuarios@ds055565.mongolab.com:55565/fandrade_usuarios',
  function(erro, db){
    if(erro) throw erro;
    db.collection('contatos').findOne({_id : _idProcurado},
      function(erro, contato){
        if(erro) throw erro;
        console.log(contato);
      });
});
