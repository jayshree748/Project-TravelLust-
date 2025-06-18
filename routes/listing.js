// const express = require("express");
// const router = express.Router();
// const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
// const { listingSchema, reviewSchema } = require("../schema.js");
// const Listing = require("../models/listing.js");

// const validateListing = (req, res, next) => {
//     let { error } = listingSchema.validate(req.body);
//     if(error) {
//         let errMsg = error.details.map((el) => el.message).join(",");
//         throw new ExpressError(400, errMsg);
//     }  else {
//         next();
//     }
// };

// // index route
// router.get("/", wrapAsync(async(req, res) => {
//     const allListings = await Listing.find({});
//     res.render("listings/index.ejs", {allListings});
// }));

// // new route
// router.get("/new", (req, res) => {
//     res.render("listings/new.ejs");
// });

// // show route
// router.get("/:id", wrapAsync(async(req, res) => {
//     let {id} = req.params;
//     const listing = await Listing.findById(id).populate("reviews");
//     res.render("listings/show.ejs", { listing });
// }));

// // create route
// router.post("/", validateListing, wrapAsync(async(req, res, next) => {
//     let result = listingSchema.validate(req.body.listing);
//     console.log(result);
//     const newListing =  new Listing(req.body.listing);
//     await newListing.save();
//     res.redirect("/listings");
// }));

// // Edit Route
// router.get("/:id/edit", wrapAsync(async(req, res) => {
//     let { id } = req.params;
//     const listing = await Listing.findById(id);
//     res.render("listings/edit.ejs", { listing });
// }));

// // update route
// router.put("/:id", wrapAsync(async(req, res) => {
//     if(!req.body.listing){
//         throw new ExpressError(400, "Some valid data for listing");
//     }
//     let {id} = req.params;
//     await Listing.findByIdAndUpdate(id, {...req.body.listing});
//     res.redirect(`/listings/${id}`);
// }));

// //Delete route
// router.delete("/:id", wrapAsync(async(req, res) => {
//     let {id} = req.params;
//     let deletedListing = await Listing.findByIdAndDelete(id);
//     console.log(deletedListing);
//     res.redirect("/listings");
// }));

// module.exports = router;







// const express = require("express");
// const router = express.Router();
// const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
// const { listingSchema, reviewSchema } = require("../schema.js");
// const Listing = require("../models/listing.js");

// const validateListing = (req, res, next) => {
//     let { error } = listingSchema.validate(req.body);
//     if(error) {
//         let errMsg = error.details.map((el) => el.message).join(",");
//         throw new ExpressError(400, errMsg);
//     }  else {
//         next();
//     }
// };

// // index route
// router.get("/", wrapAsync(async(req, res) => {
//     const allListings = await Listing.find({});
//     res.render("listings/index.ejs", {allListings});
// }));

// // new route
// router.get("/new", (req, res) => {
//     console.log(req.user);
//     if(!req.isAuthenticated()) {
//         req.flash("error", "you must be logged in to create listing!");
//         // return res.redirect("/listings");
//         return res.redirect("/login");
//     }
//     res.render("listings/new.ejs");
// });

// // show route
// router.get("/:id", wrapAsync(async(req, res) => {
//     let {id} = req.params;
//     const listing = await Listing.findById(id).populate("reviews");
//     if(!listing){
//         req.flash("error", "Listing you requested for does not exist");
//         return res.redirect("/listings");
//     }
//     res.render("listings/show.ejs", { listing });
// }));

// // // create route
// // router.post("/", validateListing, wrapAsync(async(req, res, next) => {
// //     let result = listingSchema.validate(req.body.listing);
// //     console.log(result);
// //     const newListing =  new Listing(req.body.listing);
// //     await newListing.save();
// //     res.redirect("/listings");
// // }));

// // create route
// router.post("/", validateListing, wrapAsync(async(req, res, next) => {
//     const newListing =  new Listing(req.body.listing);
//     await newListing.save();
//     req.flash("success", "New Listing Created");
//     res.redirect("/listings");
// }));

// // Edit Route
// router.get("/:id/edit", wrapAsync(async(req, res) => {
//     let { id } = req.params;
//     const listing = await Listing.findById(id);
//     if(!listing){
//         req.flash("error", "Listing you requested for does not exist");
//         return res.redirect("/listings");
//     }
//     res.render("listings/edit.ejs", { listing });
// }));

// // update route
// router.put("/:id", wrapAsync(async(req, res) => {
//     if(!req.body.listing){
//         throw new ExpressError(400, "Some valid data for listing");
//     }
//     let {id} = req.params;
//     await Listing.findByIdAndUpdate(id, {...req.body.listing});
//     res.redirect(`/listings/${id}`);
// }));

// //Delete route
// router.delete("/:id", wrapAsync(async(req, res) => {
//     let {id} = req.params;
//     let deletedListing = await Listing.findByIdAndDelete(id);
//     console.log(deletedListing);
//     req.flash("success", "Listing Deleted");
//     res.redirect("/listings");
// }));

// module.exports = router;













// const express = require("express");
// const router = express.Router();
// const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
// const { listingSchema, reviewSchema } = require("../schema.js");
// const Listing = require("../models/listing.js");
// const {isLoggedIn, isOwner} = require("../middleware.js");

// const validateListing = (req, res, next) => {
//     let { error } = listingSchema.validate(req.body);
//     if(error) {
//         let errMsg = error.details.map((el) => el.message).join(",");
//         throw new ExpressError(400, errMsg);
//     }  else {
//         next();
//     }
// };

// // index route
// router.get("/", wrapAsync(async(req, res) => {
//     const allListings = await Listing.find({});
//     res.render("listings/index.ejs", {allListings});
// }));

// // new route
// router.get("/new",isLoggedIn, (req, res) => {
//     res.render("listings/new.ejs");
// });

// // show route
// router.get("/:id", wrapAsync(async(req, res) => {
//     let {id} = req.params;
//     const listing = await Listing.findById(id).populate("reviews").populate("owner");
//     if(!listing){
//         req.flash("error", "Listing you requested for does not exist");
//         return res.redirect("/listings");
//     }
//     console.log(listing);
//     res.render("listings/show.ejs", { listing });
// }));

// // // create route
// // router.post("/", validateListing, wrapAsync(async(req, res, next) => {
// //     let result = listingSchema.validate(req.body.listing);
// //     console.log(result);
// //     const newListing =  new Listing(req.body.listing);
// //     await newListing.save();
// //     res.redirect("/listings");
// // }));

// // create route
// router.post("/",isLoggedIn, validateListing, wrapAsync(async(req, res, next) => {
//     const newListing =  new Listing(req.body.listing);
//     console.log(req.user);
//     newListing.owner = req.user._id;
//     await newListing.save();
//     req.flash("success", "New Listing Created");
//     res.redirect("/listings");
// }));

// // Edit Route
// router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(async(req, res) => {
//     let { id } = req.params;
//     const listing = await Listing.findById(id);
//     if(!listing){
//         req.flash("error", "Listing you requested for does not exist");
//         return res.redirect("/listings");
//     }
//     res.render("listings/edit.ejs", { listing });
// }));

// // update route
// router.put("/:id",isLoggedIn,isOwner, wrapAsync(async(req, res) => {
//     let {id} = req.params;
//     await Listing.findByIdAndUpdate(id, {...req.body.listing});
//     req.flash("success", "Listing Updated");
//     res.redirect(`/listings/${id}`);
// }));

// //Delete route
// router.delete("/:id",isLoggedIn,isOwner, wrapAsync(async(req, res) => {
//     let {id} = req.params;
//     let deletedListing = await Listing.findByIdAndDelete(id);
//     console.log(deletedListing);
//     req.flash("success", "Listing Deleted");
//     res.redirect("/listings");
// }));

// module.exports = router;











// const express = require("express");
// const router = express.Router();
// const wrapAsync = require("../utils/wrapAsync.js");
// const Listing = require("../models/listing.js");
// const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

// // index route
// router.get("/", wrapAsync(async(req, res) => {
//     const allListings = await Listing.find({});
//     res.render("listings/index.ejs", {allListings});
// }));

// // new route
// router.get("/new",isLoggedIn, (req, res) => {
//     res.render("listings/new.ejs");
// });

// // show route
// router.get("/:id", wrapAsync(async(req, res) => {
//     let {id} = req.params;
//     const listing = await Listing.findById(id)
//     .populate({
//         path: "reviews",
//         populate:{path: "author",
//         },
//     })
//     .populate("owner");
//     if(!listing){
//         req.flash("error", "Listing you requested for does not exist");
//         return res.redirect("/listings");
//     }
//     console.log(listing);
//     res.render("listings/show.ejs", { listing });
// }));

// // // create route
// // router.post("/", validateListing, wrapAsync(async(req, res, next) => {
// //     let result = listingSchema.validate(req.body.listing);
// //     console.log(result);
// //     const newListing =  new Listing(req.body.listing);
// //     await newListing.save();
// //     res.redirect("/listings");
// // }));

// // create route
// router.post("/",isLoggedIn, validateListing, wrapAsync(async(req, res, next) => {
//     const newListing =  new Listing(req.body.listing);
//     console.log(req.user);
//     newListing.owner = req.user._id;
//     await newListing.save();
//     req.flash("success", "New Listing Created");
//     res.redirect("/listings");
// }));

// // Edit Route
// router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(async(req, res) => {
//     let { id } = req.params;
//     const listing = await Listing.findById(id);
//     if(!listing){
//         req.flash("error", "Listing you requested for does not exist");
//         return res.redirect("/listings");
//     }
//     res.render("listings/edit.ejs", { listing });
// }));

// // update route
// router.put("/:id",isLoggedIn,isOwner, wrapAsync(async(req, res) => {
//     let {id} = req.params;
//     await Listing.findByIdAndUpdate(id, {...req.body.listing});
//     req.flash("success", "Listing Updated");
//     res.redirect(`/listings/${id}`);
// }));

// //Delete route
// router.delete("/:id",isLoggedIn,isOwner, wrapAsync(async(req, res) => {
//     let {id} = req.params;
//     let deletedListing = await Listing.findByIdAndDelete(id);
//     console.log(deletedListing);
//     req.flash("success", "Listing Deleted");
//     res.redirect("/listings");
// }));

// module.exports = router;









// const express = require("express");
// const router = express.Router();
// const wrapAsync = require("../utils/wrapAsync.js");
// const Listing = require("../models/listing.js");
// const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

// const listingController = require("../controllers/listings.js");

// // index route
// router.get("/", wrapAsync(listingController.index));
   
// // new route
// router.get("/new",isLoggedIn, listingController.renderNewFrom);

// // show route
// router.get("/:id", wrapAsync(listingController.showListing));

// // create route
// router.post("/",isLoggedIn, validateListing, wrapAsync(listingController.createListing));

// // Edit Route
// router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));

// // update route
// router.put("/:id",isLoggedIn,isOwner, wrapAsync(listingController.updateListing));

// //Delete route
// router.delete("/:id",isLoggedIn,isOwner, wrapAsync(listingController.destroyListing));

// module.exports = router;








if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn, validateListing, upload.single('listing[image]'), wrapAsync(listingController.createListing));


// new route
router.get("/new",isLoggedIn, listingController.renderNewFrom);

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner, wrapAsync(listingController.destroyListing));

// show route
router.get("/:id", wrapAsync(listingController.showListing));

// Edit Route
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));

// update route
router.put("/:id",isLoggedIn,isOwner, wrapAsync(listingController.updateListing));

//Delete route
router.delete("/:id",isLoggedIn,isOwner, wrapAsync(listingController.destroyListing));

module.exports = router;