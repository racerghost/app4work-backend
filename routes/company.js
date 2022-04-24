const express = require('express');
const router = express.Router();
const Company = require('../models/Company.model')
/* GET companies listing. */

router.get('/', async function(req, res, next) {
  try {
    const companies = await Company.find({})
    res.json(companies);
  }catch(error){
    console.log(error);
  }
});

/* GET single company listing. */
router.get('/:id', async function(req, res, next) {
  const {id}= req.params;
  try {
    const company = await Company.findById(id);
    res.json(company);
  }catch(error){
    console.log(error);
  }
});

/* add company */
router.post('/', async function(req, res, next) {
  const {email,password,username,name,location, workArea,size}=req.body;
  try {
    const createdCompany=await Company.create({email,password,username,name,location, workArea,size});
    res.json(createdCompany);
  }catch(error){
    console.log(error);
  }
});


/* DELETE company. */
router.delete('/delete/:id', async function(req, res, next) {
  const {id} = req.params;
  try {
    const deletedCompany=await Company.findByIdAndDelete(id);
    res.json(deletedCompany);
  }catch(error){
    console.log(error);
  }

});


/* EDIT company. */
router.put('/edit/:id', async function(req, res, next) {
  const { id } = req.params;
  //const { email,password,username,fname,surname,birth,gender,location,workArea,specificArea,salary,tags } = req.body;
  try {
    const editedCompany = await Company.findByIdAndUpdate(id,req.body,{new:true});
    res.json(editedCompany);
  }catch(error){
    console.log(error);
  }
});
module.exports = router;
