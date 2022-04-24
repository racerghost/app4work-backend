const express = require('express');
const router = express.Router();
const Offer = require('../models/Offers.model')
/* GET user application listing. */

router.get('/', async function(req, res, next) {
  try {
    const offers = await Offer.find({}).populate('companyId');
    res.json(offers);
  }catch(error){
    console.log(error);
  }
});

/* GET single user application listing. */
router.get('/:id', async function(req, res, next) {
  const {id}= req.params;
  try {
    const offer = await Offer.findById(id).populate('companyId');
    res.json(offer);
  }catch(error){
    console.log(error);
  }
});

/* add user application */
router.post('/', async function(req, res, next) {
  const {companyId, workArea, specificArea, salary, active, publicationDate, title, description}=req.body;
  try {
    const createdOffer=await Offer.create({companyId, workArea, specificArea, salary, active, publicationDate, title, description});
    res.json(createdOffer);
  }catch(error){
    console.log(error);
  }
});


/* DELETE users application listing. */
router.delete('/delete/:id', async function(req, res, next) {
  const {id} = req.params;
  try {
    const deletedOffer=await Offer.findByIdAndDelete(id);
    res.json(deletedOffer);
  }catch(error){
    console.log(error);
  }

});


/* EDIT user application. */
router.put('/edit/:id', async function(req, res, next) {
  const { id } = req.params;
  //const {companyId, workArea, specificArea, salary, active, publicationDate, title, description} = req.body;
  try {
    const editedOffer = await Offer.findByIdAndUpdate(id,req.body,{new:true});
    res.json(editedOffer);
  }catch(error){
    console.log(error);
  }
});
module.exports = router;
