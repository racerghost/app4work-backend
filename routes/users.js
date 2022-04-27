const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const UserApplication = require('../models/UserApplication.model');
const { isAuthenticated } = require('../middleware/jwt.middleware');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const getusers=await User.find({})
    res.json(getusers);
  }catch(error){
    console.log(error);
  }
});

/* GET user's applications*/
router.get('/myapplications', isAuthenticated, async function (req, res, next) {
  try {
    const applications = await UserApplication.find({ userId: req.payload._id }).populate('userId').populate('offerId');
    res.json(applications);
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

/* POST add user */
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


/* GET single application*/
router.get('/application/:applicationId', async function(req, res, next) {
  const { applicationId } = req.params;
  try {
    const application = await UserApplication.findbyId(applicationId).populate(['userId','offerId']);
    res.json(application);
  }catch(error){
    console.log(error);
  }
});

/* POST create new user application */
router.post('/:offerId', isAuthenticated, async function (req, res, next) {
  const userId = req.payload._id;
  const { offerId } = req.params;
  try {
    const createdApplication = await UserApplication.create({ userId: userId, offerId: offerId });
    res.json(createdApplication);
  }catch(error){
    console.log(error);
  }
});

/*DELETE job application*/
router.delete('/applications/delete/:applicationId', async function(req, res, next) {
  const { applicationId } = req.params;
  try {
    const deletedApplication = await UserApplication.findByIdAndDelete(applicationId);
    res.json(deletedApplication);
  }catch(error){
    console.log(error);
  }
});

module.exports = router;
