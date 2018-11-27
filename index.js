const MongoClient = require('mongodb').MongoClient; 
//mlab cloud db URL 
const url = "mongodb://<dbuser>:<dbpassword>@ds031721.mlab.com:31721/hoteldb“;  
 
MongoClient.connect(url, (err, db) => 
{    
 if (err) console.log(err.message);   
  const hoteldb = db.db("hoteldb");     
  //read from the holets collection   
  itemdb.collection("holets").find({}).toArray((err, hotelDocs) => 
  {     
  if (err) console.log(err.message);    
  //print every item in itemsDoc array to console   
  for (let hotel of hotelDocs)  
	  console.log("Guest_ID:"+G_ID+"Name:"+G_Name+"Gender:"+Gender+"Country:"+Country+"Category:"+Category+"Children:"+Children); 
  });  
  //close the connection to the mongodb  
  db.close();
  }); 
  app.get('/Dubai', (request, response,next) => {
    mongoClient.connect(mongoServerURL, (err, db) => {
        if (err)
            console.log("DB Connect Error:" +err.message);
 
        //connect to the itemdb
        const itemdb = db.db("hoteldb");
 
        //read from the items collections
        itemdb.collection("holets").find({Country:"Dubai"}).toArray((err, holetDocsArray) => {
            if (err)
                console.log(err.message);
 
           response.send(JSON.stringify(holetDocsArray));
        }); 
 
        //close the connection to the db
        db.close();
    });
});
app.get('/M', (request, response,next) => {
    mongoClient.connect(mongoServerURL, (err, db) => {
        if (err)
            console.log("DB Connect Error:" +err.message);
 
        //connect to the itemdb
        const itemdb = db.db("hoteldb");
 
        //read from the items collections
        itemdb.collection("holets").find({Gender:"M"}).toArray((err, holetDocsArray) => {
            if (err)
                console.log(err.message);
 
           response.send(JSON.stringify(holetDocsArray));
        }); 
 
        //close the connection to the db
        db.close();
    });
});
app.get('/Business', (request, response,next) => {
    mongoClient.connect(mongoServerURL, (err, db) => {
        if (err)
            console.log("DB Connect Error:" +err.message);
 
        //connect to the itemdb
        const itemdb = db.db("hoteldb");
 
        //read from the items collections
        itemdb.collection("holets").find({Country:"Business"}).toArray((err, holetDocsArray) => {
            if (err)
                console.log(err.message);
 
           response.send(JSON.stringify(holetDocsArray));
        }); 
 
        //close the connection to the db
        db.close();
    });
});
app.get('/5', (request, response,next) => {
    mongoClient.connect(mongoServerURL, (err, db) => {
        if (err)
            console.log("DB Connect Error:" +err.message);
 
        //connect to the itemdb
        const itemdb = db.db("hoteldb");
 
        //read from the items collections
        itemdb.collection("holets").find({Children= 5}).toArray((err, holetDocsArray) => {
            if (err)
                console.log(err.message);
 
           response.send(JSON.stringify(holetDocsArray));
        }); 
 
        //close the connection to the db
        db.close();
    });
});