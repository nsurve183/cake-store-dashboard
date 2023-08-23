

const express = require('express');
const router = express.Router();
const AdminUser = require('../models/admin')
const { body, validationResult } = require('express-validator');


router.post('/adminsingup', [
    body('name', "Name should be min 3 character").isLength({min: 3}),
    body('username', "Username should be min 4 character").isLength({min: 4}),
    body('email', "Enter A Valid Email").isEmail(),
    body('password', "Password should be min 6 character").isLength({min: 5}),
], async (req, res) => {
   try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    const {name, password, username, email} = req.body
    let admin = await AdminUser.create({
        name: name,
        email: email,
        password: password,
        username: username
    })

    res.json({admin})
   } catch (error) {
    
   }
})
module.exports = router