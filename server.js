const express = require('express'); //Brain that handles POST requests/responses: builds web/API server
const cors = require('cors'); //our famous middleware, allows browser to talk to front-end. facilitates otherwise forbidden front end to back end communication from whatever origin
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs'); //reading files from the computer's file system type func

const app = express(); //starts web server
app.use(cors()); //allows cross-origin requests/ front end to send requests
app.use(express.json()); //let's backend read JSON data from request body
app.use(express.static('public'));

const SECRET = 'my_jwt_secret'; 
//^jwt secret key to sign tokens/ ensure their authenticity

const numRounds = 10; //setting to that 10 salt round sweet spot

let users = JSON.parse(fs.readFileSync('users.json')); //loading fake database of users from JSON file

//login logic:
app.post('/login', async (req, res) => {
    const {email, password} = req.body; //when frontend sends login request, email + password extracted
    
    //check if the user exists:
    const user = users.find( u => u.email === email); //go thru all users and find the 1 whose email matches the one sent in the request
    if (!user) {
        return res.status(401).json({ msg: 'User not found'});
    }
    //bcrypt to compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(401).json({msg: 'Incorrect password' });
    }
    //return a jwt if everything is gucci 
    const token = jwt.sign({ email: user.email}, SECRET, {expiresIn: '1h' });
    res.json({ token }); //send to frontend
});

//for users.json
const testPassword = 'A$isthebest';
bcrypt.hash(testPassword, numRounds, (err, hash) => {
  if (err) return console.error('Error hashing password:', err);
  console.log('Hash for A$isthebest:', hash);
});

//starts web server and listens for req at port 3000, this just tells us everything working
app.listen(3000, () => {
    console.log('Server is running at http://localhost:300');
});