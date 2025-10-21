import express from 'express';  // type -> module in package.json
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json()); // middleware to parse JSON request bodies without this its show undefined
// while req send from postman or axios or fetch from frontend.
app.use(cors()); // Enable CORS for all routes

// Sample user data

const user=[
  {
    "id": 1,
    "name": "Amit Kumar",
    "age": 20,
    "course": "B.Tech",
    "marks": 85
  },
  {
    "id": 2,
    "name": "Priya Sharma",
    "age": 21,
    "course": "B.Sc",
    "marks": 90
  },
  {
    "id": 3,
    "name": "Rahul Verma",
    "age": 19,
    "course": "B.Com",
    "marks": 76
  },
  {
    "id": 4,
    "name": "Sneha Gupta",
    "age": 22,
    "course": "MBA",
    "marks": 88
  },
  {
    "id": 5,
    "name": "Arjun Mehta",
    "age": 20,
    "course": "BA",
    "marks": 70
  }
]


app.get('/', (req, res) => {
//   res.send('Hello, World!'); // end or json to show in web page
  res.json({ message: 'Hello, World!' }); 
});

app.get('/user', (req, res) => {
//   res.send('Hello, World!'); // end or json to show in web page
  res.json(user); 
});
app.get('/user/:id', (req, res) => {
   const userId = req.params.id; // string

if (userId) {
    const singleUser = user.find((u) => {
        return u.id === parseInt(userId);
    });

    if (singleUser) {
        res.json(singleUser); // agar user mila
    } else {
        res.status(404).send("User not found"); // agar nahi mila
    }
} else {
    res.status(400).send("Invalid request");
}
});

app.get('/contact', (req, res) => {
  res.send('This is the contact page'); 
});

//POST request :-user request body me data bhejega

app.post('/user', (req, res) => {   

    const newUser = req.body; // assuming body contains JSON data for new user

    console.log(newUser);

    // In real applications, you would typically save this data to a database
    // Here, we'll just add it to our in-memory array for demonstration purposes
    newUser.id = user.length + 1;
    user.push(newUser);
    res.status(201).json(newUser); // respond with the created user object
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


