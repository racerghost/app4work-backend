const express = require('express');
const router = express.Router();
const Offer = require('../models/Offers.model');
const UserApplication = require("../models/UserApplication.model");
const { isAuthenticated } = require('../middleware/jwt.middleware');
/* GET offers listing. */


router.get("/", isAuthenticated, async function (req, res, next) {
  const companyId = req.payload._id;
  try {
    const offers = await Offer.find({companyId:companyId}).populate("companyId");
    res.json(offers);
  } catch (error) {
    console.log(error);
  }
});

/* GET offer applications listing. */
router.get('/applications/:id', async function (req, res, next) {
  try {
    const { id } = req.params;
    const userApplications = await UserApplication.find({offerId: id}).populate("userId");
    res.json(userApplications);
  } catch (error) {
    console.log(error);
  }
});
router.get("/all", async function (req, res, next) {
  try {
    const offers = await Offer.find().populate("companyId");
    res.json(offers);
  } catch (error) {
    console.log(error);
  }
});


/* GET single offer listing. */
router.get('/:id', async function(req, res, next) {
  const {id}= req.params;
  try {
    const offer = await Offer.findById(id).populate('companyId');
    res.json(offer);
  }catch(error){
    console.log(error);
  }
});

/* add offer */
router.post('/', isAuthenticated, async function (req, res, next) {
  const companyId = req.payload._id;
  const {workArea, specificArea, salary, active, publicationDate, title, description}=req.body;
  try {
    const createdOffer=await Offer.create({companyId, workArea, specificArea, salary, active, publicationDate, title, description});
    res.json(createdOffer);
  }catch(error){
    console.log(error);
  }
});


/* DELETE offers listing. */
router.delete('/delete/:id', async function(req, res, next) {
  const {id} = req.params;
  try {
    const deletedOffer=await Offer.findByIdAndDelete(id);
    res.json(deletedOffer);
  }catch(error){
    console.log(error);
  }

});

/* EDIT offer. */
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
