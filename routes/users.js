const express = require('express');
const router = express.Router();
const User = require('../models/User.model')
/* GET users listing. */

router.get('/', async function(req, res, next) {
  try {
    const getusers=await User.find({})
    res.json(getusers);
  }catch(error){
    console.log(error);
  }
});

/* GET single user listing. */
router.get('/:id', async function(req, res, next) {
  const {id}= req.params;
  try {
    const user = await User.findById(id);
    res.json(user);
  }catch(error){
    console.log(error);
  }
});

/* add user */
router.post('/', async function(req, res, next) {
  const {email,password,username,fname,surname,birth,gender,location,workArea,specificArea,salary,tags}=req.body;
  try {
    const createdUser=await User.create({email,password,username,fname,surname,birth,gender,location,workArea,specificArea,salary,tags})
    res.json(createdUser);
  }catch(error){
    console.log(error);
  }
});


/* DELETE users listing. */
router.delete('/delete/:id', async function(req, res, next) {
  const {id} = req.params;
  try {
    const deleteuser=await User.findByIdAndDelete(id);
    res.json(deleteuser);
  }catch(error){
    console.log(error);
  }

});


/* EDIT user. */
router.put('/edit/:id', async function(req, res, next) {
  const { id } = req.params;
  const { email,password,username,fname,surname,birth,gender,location,workArea,specificArea,salary,tags } = req.body;
  try {
    const editedUser = await User.findByIdAndUpdate(id, { email,password,username,fname,surname,birth,gender,location,workArea,specificArea,salary,tags },{new:true});
    res.json(editedUser);
  }catch(error){
    console.log(error);
  }
});
module.exports = router;
