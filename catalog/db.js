const mongoClient = require("mongodb").MongoClient;

mongoClient.connect(process.env.MONGO_URI, { useUnifiedTopology: true })
            .then(conn => global.conn = conn.db("local"))
            .catch(err => console.log(err))
 
module.exports = { }


function findAll() {
    return global.conn.collection("products").find().toArray();
}
 
module.exports = { findAll }
