import express from "express";
const router = express.Router();

// fake database 
let fakeTaskTable = [
    { 
          _id : 1, 
        task: "sleepinh ",
        hr: 15,
        type: 'bad'
      },
      {
        _id : 2, 
        task: "walkinh ",
        hr: 56,
        type: 'entry'
        
      },
      {
        _id : 3, 
        task: "coding ",
        hr: 23,
        type: 'entry'
      }
];



import morgan from "morgan";
//middleware
router.use(morgan("dev"));

// api endpoints

// workflow : CRUD
// C(create) => receive newtaskand store in the database
router.post("/", (req, res) => {
   console.log(req.body); 

   fakeTaskTable.push(req.body);
  res.json({message: "newtaskadded" });
});

// R(Read) => read data from data base and return to the client
router.get("/", (req, res) => {


  res.json({ 
    status : 'success',
    message: "todo get method" ,
    data : fakeTaskTable

});
});

// U(Update) => update some information of existing data int he database and respond client accordingly
router.put("/", (req, res) => {
 const {_id, type} = req.body;
 console.log(req.body);

fakeTaskTable = fakeTaskTable.map((item)  => {

    if(item._id === _id){
        item.type = type;

    } 
    return item;
});
  res.json({ message: "todo put method", status: "success" });
});

//D(Delete) => Delete data(s) from database and response client accordingly
router.delete("/:_id?", (req, res) => {
    const  { _id } = req.params;
    if(!_id){
        res.status(400).json({ 
            status : 'error',
            message: "invalid" ,    
        
        });
        return

    }
    console.log(req.params);
    fakeTaskTable = fakeTaskTable.filter((item ) => item._id != _id);

  res.json({ 
    status : 'success',
    message: "the task is deleted" ,
  

});
});

export default router;