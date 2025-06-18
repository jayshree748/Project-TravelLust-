// const express = require("express");
// const router = express.Router({ mergeParams: true});
// const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
// const { reviewSchema } = require("../schema.js");
// const Review = require("../models/review.js");
// const Listing = require("../models/listing.js");

// const validateReview = (req, res, next) => {
//     let { error } = validateReview.validate(req.body);
//     if(error) {
//         let errMsg = error.details.map((el) => el.message).join(",");
//         throw new ExpressError(400, errMsg);
//     }  else {
//         next();
//     }
// };

// // review ka post route
// router.post("/", async(req, res) => {
//     // console.log(req.params.id);
//     let listing = await Listing.findById(req.params.id);
//     let newReview = new Review(req.body.review);
//     listing.reviews.push(newReview);
//     await newReview.save();
//     await listing.save();
//     // console.log("new review saved");
//     // res.send("new review saved");
//     req.flash("success", "New Review Created!");
//     res.redirect(`/listings/${listing._id}`);
// });

// // Delete review route
// router.delete("/:reviewId", wrapAsync(async (req, res) => {
//     let {id, reviewId} = req.params;
//     await Listing.findByIdAndUpdate(id, {$pull: {reviews: { _id: reviewId}}});
//     await Review.findByIdAndDelete(reviewId); 
//     res.redirect(`/listings/${id}`);
// }));

// module.exports = router;







// const express = require("express");
// const router = express.Router({ mergeParams: true});
// const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
// const Review = require("../models/review.js");
// const Listing = require("../models/listing.js");
// const { validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

// // review ka post route
// router.post("/",isLoggedIn, async(req, res) => {
//     // console.log(req.params.id);
//     let listing = await Listing.findById(req.params.id);
//     let newReview = new Review(req.body.review);
//     newReview.author = req.user._id;
//     console.log(newReview);
//     listing.reviews.push(newReview);

//     await newReview.save();
//     await listing.save();
  
//     req.flash("success", "New Review Created!");
//     res.redirect(`/listings/${listing._id}`);
// });

// // Delete review route
// router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(async (req, res) => {
//     let {id, reviewId} = req.params;
//     await Listing.findByIdAndUpdate(id, {$pull: {reviews: { _id: reviewId}}});
//     await Review.findByIdAndDelete(reviewId);
//     req.flash("success", "Review Deleted"); 
//     res.redirect(`/listings/${id}`);
// }));

// module.exports = router;







const express = require("express");
const router = express.Router({ mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// review ka post route
router.post("/",isLoggedIn, validateReview,wrapAsync(reviewController.createReview));

// Delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;
