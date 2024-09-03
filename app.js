import express from "express";

const app = express();

app.use(express.json())

const users = [];


//GET Retrieve data 

app.get('/' , (req, res) => res.send('Welcome to my website'));


app.get('/users' , (req, res) => {
    if(users.length == 0) {
        res.status(400).send('no users found !')
    }
    else {
        res.status(200).send(users)
    }
} );
//POST Create data
app.post('/users' ,(req, res) => {
    const user = req.body;
    const userFind = users.find((x) => x.age === user.age)
    if(userFind) {
        res.status(400).send("User Already Exist ")
        return
    }

    users.push(user)
    res.status(201).send('Created')
});


// app.post('/Create' , (req, res) => res.send('Created!'));

// console.log(req.body.name);


// DELETE - Remove Data
app.delete('/users/:age' , (req, res) => { 
    const {age} = req.params;
    const findUserIndex = users.findIndex((x) => x.age == age) 
    if(findUserIndex == -1) { 
        res.status(400).send("User not found")
        
    }
    users.splice(findUserIndex,1)
    res.status(200).send("User deleted successfully")
 })
app.listen(3000,() => console.log('Server started on port 3000'));