const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://ayushdrew4:Ayushayush12@cluster0.juul54u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const run = async () => {
  try {
    await client.connect();
    const database = await client.db('product');
    const product = database.collection('products');
    return product

    
    
  } catch (err) {
    console.error("Failed to run:", err);
  }
};

run();

module.exports=run;
