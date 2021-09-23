const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const router = express.Router();
const cookies = require("cookie-parser");


require("../db/conn");
const User = require("../model/userSchema");
router.use(cookies());
// Middleware

// const middleware = (req, res, next) => {
//   console.log(`Hello middleware`);
//   next();
// };
router.get("/", (req, res) => {
  res.send(`Hello world`);
});
//  Using Promises
// router.post('/register', async(req, res) => {

//     const { name, email, phone, work, password, cpassword } = req.body;

//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "Please fill the correct details" });
//     }

//     User.findOne({ email: email }).then((userExist) => {
//         if (userExist) {
//             return res.status(422).json({ error: "Email already exists" });
//         }

//         const user = new User({ name, email, phone, work, password, cpassword });
//         user.save().then(() => {
//             res.status(201).json({ message: "User registered successfully!" });
//         }).catch((err) => res.status(500).json({
//             error: "Failed to register "
//         }));
//     }).catch((err) => { console.log(err); });
// });

// Using Async-await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill the correct details" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      const userRegistred = await user.save();

      console.log(`${user} user Registered successfully`);
      console.log(userRegistred);

      res.status(201).json({ message: "User registered sucessfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/about", authenticate, (req, res) => {
  res.send(req.rootUser);
});

router.get("/contact", (req, res) => {
  User.find({}).exec(function(err, users){
    if(err){
      console.log("Error retriving users");
    }else{
      res.status(201).json(users);
    }
  })
  // res.send(req.body);
});

router.get("/signin", (req, res) => {
  res.send(`Hello sign in page`);
});

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  // res.json({ message: "awesonme" });
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Plz fill the data" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else {
        res.json({ message: "user Signin Successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/logout", (req, res) => {
  console.log(`logout done`);
  res.clearCookie('jwtoken',{path:'/'});
  res.status(200).send(`User LOGOUT`);
});

module.exports = router;
