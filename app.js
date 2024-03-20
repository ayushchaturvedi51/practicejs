const express = require("express");
const app = express();
const PORT = 8000;
const run=require("./connectdb")

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});


// const getOne= async () => {
//   try {
    
//     const product = await run(); 
//     const query = { name: 'Iphone 11' };
//     const detail = await product.findOne(query);

//     console.log(detail);

//   } catch (err) {
//     console.error("Failed to run:", err);
//   }
// };

// getOne();

// const create =async()=>{

//   const product=await run();
//   const query={name:"Ayush",state:"Uttar Pradesh",gender:"male"}
//   const detail = await product.insertOne(query)
//   console.log(detail)


// }
// create()

const getall=async()=>{
  const product =await run();
  const detail=await product.find({})
  console.log(detail)

}

getall()



