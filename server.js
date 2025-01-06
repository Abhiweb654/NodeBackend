// const app = require("./app")
import connectDatabase from './db.js';
import express from 'express';
import User from  "./models/User.js"
import cors from "cors";
import mongoose from 'mongoose';


const app=express();

app.use(cors(),express.json());




app.get("/",(req,res)=>{
    res.json("welcome to first crud api");
});
app.get("/items",async (req, res) => {
    try {
        const items = await User.find();
        res.json(items);
    } catch (err) {
        res.status(500).send(err);
    }
})

// app.update("/items",(req,res)=>{
    // res.json(items);
    // });
    app.get('*',(req,res)=>{
        res.status(404).send("something went wrong");
    });
   app.delete("/:id", async (req,res)=>{
       const userId = req.params.id;

// Convert the string ID to a valid ObjectId using mongoose.Types.ObjectId
 //   const objectId =mongoose.Types.ObjectId(userId);

    try {
        const item = await User.findById(userId);
        if (item == null) {
            return res.status(404).send(item);
        }

        await item.deleteOne();
        res.send('Item deleted');
    } catch (err) {
        res.status(500).send(err);
    }
 });

   app.patch('/:id', async(req , res) => {     //use patch method to update value 
    try {
        const item = await User.findById(req.params.id);
        if (item == null) {
            return res.status(404).send('Item not found');
        }

        if (req.body.name != null) {
            item.name = req.body.name;
        }
        if (req.body.email != null) {
            item.email = req.body.email;
        }
        if (req.body.message!= null) {
            item.message = req.body.message;
        }
        const updatedItem = await item.save();
        res.send("Item has been updated");
    } catch (err) {
        res.status(400).send(err);
    }
});
   
app.post("/data",async(req,res)=>{
// const obj={
//     id:items.length+1,
//     name:req.body.name,
//     email:req.body.email,
//     message:req.body.message
// }
// items.push(obj);
// res.send("done");
const item = new User({
    id: await movies.countDocuments(),
    name: req.body.name,
    email: req.body.email,
    message:req.body.message
});

try {
    const savedItem = await item.save();
    res.status(201).json("Item has been saved");
} catch (err) {
    res.status(400).send(err);
}
});
connectDatabase()
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
}
);
