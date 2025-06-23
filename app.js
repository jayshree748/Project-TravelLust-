// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const Listing = require("./models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/travelLust";

// main().then(() => {
//     console.log("Connected to DB");
// }).catch((err) => {
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// app.get("/", (req, res) => {
//     res.send("Hi, I am root");
// });

// app.get("/testListing", async(req, res) => {
//     let sampleListing = new Listing({
//         title: "My new Villa",
//         description: "By the beach",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India",
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });

// app.listen(8080, () => {
//     console.log("server is listening to port 8080");
// });








// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const Listing = require("./models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/travelLust";

// main().then(() => {
//     console.log("Connected to DB");
// }).catch((err) => {
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// app.get("/", (req, res) => {
//     res.send("Hi, I am root");
// });

// app.get("/listings", (req, res) => {
//     Listing.find({}).then((res) => {
//         console.log(res);
//     });
// });

// app.listen(8080, () => {
//     console.log("server is listening to port 8080");
// });






// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const Listing = require("./models/listing.js");
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const wrapAsync = require("./utils/wrapAsync.js");
// const ExpressError = require("./utils/ExpressError.js");
// const { listingSchema } = require("./schema.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/travelLust";

// main().then(() => {
//     console.log("Connected to DB");
// }).catch((err) => {
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({extended: true}));
// app.use(methodOverride("_method"));
// app.engine('ejs', ejsMate);
// app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Hi, I am root");
// });

// // index route
// app.get("/listings", wrapAsync(async(req, res) => {
//     const allListings = await Listing.find({});
//     res.render("listings/index.ejs", {allListings});
// }));

// // new route
// app.get("/listings/new", (req, res) => {
//     res.render("listings/new.ejs");
// });

// // show route
// app.get("/listings/:id", wrapAsync(async(req, res) => {
//     let {id} = req.params;
//     const listing = await Listing.findById(id);
//     res.render("listings/show.ejs", { listing });
// }));

// // create route
// app.post("/listings", wrapAsync(async(req, res, next) => {
//     // if(!req.body.listing){
//     //     throw new ExpressError(400, "Some valid data for listing");
//     // }
//     // let result = listingSchema.validate(req.body);
//     let result = listingSchema.validate(req.body.listing);
//     console.log(result);
//     const newListing =  new Listing(req.body.listing);
//     // if(!newListing.title){
//     //     throw new ExpressError(400, "Title is missing");
//     // }
//     // if(!newListing.description){
//     //     throw new ExpressError(400, "Description is missing");
//     // }
//     // if(!newListing.location){
//     //     throw new ExpressError(400, "Location is missing");
//     // }
//     await newListing.save();
//     res.redirect("/listings");
// }));

// // Edit Route
// app.get("/listings/:id/edit", wrapAsync(async(req, res) => {
//     let { id } = req.params;
//     const listing = await Listing.findById(id);
//     res.render("listings/edit.ejs", { listing });
// }));

// // update route
// app.put("/listings/:id", wrapAsync(async(req, res) => {
//     if(!req.body.listing){
//         throw new ExpressError(400, "Some valid data for listing");
//     }
//     let {id} = req.params;
//     await Listing.findByIdAndUpdate(id, {...req.body.listing});
//     res.redirect(`/listings/${id}`);
// }));

// //Delete route
// app.delete("/listings/:id", wrapAsync(async(req, res) => {
//     let {id} = req.params;
//     let deletedListing = await Listing.findByIdAndDelete(id);
//     console.log(deletedListing);
//     res.redirect("/listings");
// }));

// // app.all("*", (req, res, next) => {
// //     next(new ExpressError(404, "page not found"));
// // });

// app.use((err, req, res, next) => {
//     let {statusCode = 500, message = "something went wrong"} = err;
//     // res.status(statusCode).send(message);
//     res.status(statusCode).render("error.ejs", { message });
// });

// app.listen(8080, () => {
//     console.log("server is listening to port 8080");
// });








// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const Listing = require("./models/listing.js");
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const wrapAsync = require("./utils/wrapAsync.js");
// const ExpressError = require("./utils/ExpressError.js");
// const { listingSchema } = require("./schema.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/travelLust";

// main().then(() => {
//     console.log("Connected to DB");
// }).catch((err) => {
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({extended: true}));
// app.use(methodOverride("_method"));
// app.engine('ejs', ejsMate);
// app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Hi, I am root");
// });

// const validateListing = (req, res, next) => {
//     let {error} = listingSchema.validate(req.body.listing);
//     if(error) {
//         let errMsg = error.details.map((el) => el.message).join(",");
//         throw new ExpressError(400, errMsg);
//     } else {
//         next();
//     }
// };

// // index route
// app.get("/listings", wrapAsync(async(req, res) => {
//     const allListings = await Listing.find({});
//     res.render("listings/index.ejs", {allListings});
// }));

// // new route
// app.get("/listings/new", (req, res) => {
//     res.render("listings/new.ejs");
// });

// // show route
// app.get("/listings/:id", wrapAsync(async(req, res) => {
//     let {id} = req.paramon.ams;
//     const listing = await Listing.findById(id);
//     res.render("listings/show.ejs", { listing });
// }));

// // create route
// app.post("/listings", validateListing, wrapAsync(async(req, res, next) => {
//     const newListing =  new Listing(req.body.listing);
//     await newListing.save();
//     res.redirect("/listings");
// }));

// // Edit Route
// app.get("/listings/:id/edit", wrapAsync(async(req, res) => {
//     let { id } = req.params;
//     const listing = await Listing.findById(id);
//     res.render("listings/edit.ejs", { listing });
// }));

// // update route
// app.put("/listings/:id", validateListing, wrapAsync(async(req, res) => {
//     let {id} = req.params;
//     await Listing.findByIdAndUpdate(id, {...req.body.listing});
//     res.redirect(`/listings/${id}`);
// }));

// //Delete route
// app.delete("/listings/:id", wrapAsync(async(req, res) => {
//     let {id} = req.params;
//     let deletedListing = await Listing.findByIdAndDelete(id);
//     console.log(deletedListing);
//     res.redirect("/listings");
// }));

// app.use((err, req, res, next) => {
//     let {statusCode = 500, message = "something went wrong"} = err;
//     res.status(statusCode).render("error.ejs", { message });
// });

// app.listen(8080, () => {
//     console.log("server is listening to port 8080");
// });








// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const Listing = require("./models/listing.js");
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const wrapAsync = require("./utils/wrapAsync.js");
// const ExpressError = require("./utils/ExpressError.js");
// const { listingSchema } = require("./schema.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/travelLust";

// main().then(() => {
//     console.log("Connected to DB");
// }).catch((err) => {
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({extended: true}));
// app.use(methodOverride("_method"));
// app.engine('ejs', ejsMate);
// app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Hi, I am root");
// });

// const validateListing = (req, res, next) => {
//     let {error} = listingSchema.validate(req.body.listing);
//     if(error) {
//         let errMsg = error.details.map((el) => el.message).join(",");
//         throw new ExpressError(400, errMsg);
//     } else {
//         next();
//     }
// };

// // index route
// app.get("/listings", wrapAsync(async(req, res) => {
//     const allListings = await Listing.find({});
//     res.render("listings/index.ejs", {allListings});
// }));

// // new route
// app.get("/listings/new", (req, res) => {
//     res.render("listings/new.ejs");
// });

// // show route
// app.get("/listings/:id", wrapAsync(async(req, res) => {
//     let {id} = req.paramon.ams;
//     const listing = await Listing.findById(id);
//     res.render("listings/show.ejs", { listing });
// }));

// // // create route
// // app.post("/listings", validateListing, wrapAsync(async(req, res, next) => {
// //     const newListing =  new Listing(req.body.listing);
// //     await newListing.save();
// //     res.redirect("/listings");
// // }));

// // create route
// app.post("/listings", async(req, res) => {
//     const listing =  new Listing(req.body.listing);
//     await listing.save();
//     res.redirect("/listings");
// });

// // Edit Route
// app.get("/listings/:id/edit", wrapAsync(async(req, res) => {
//     let { id } = req.params;
//     const listing = await Listing.findById(id);
//     res.render("listings/edit.ejs", { listing });
// }));

// // update route
// app.put("/listings/:id", validateListing, wrapAsync(async(req, res) => {
//     let {id} = req.params;
//     await Listing.findByIdAndUpdate(id, {...req.body.listing});
//     res.redirect(`/listings/${id}`);
// }));

// //Delete route
// app.delete("/listings/:id", wrapAsync(async(req, res) => {
//     let {id} = req.params;
//     let deletedListing = await Listing.findByIdAndDelete(id);
//     console.log(deletedListing);
//     res.redirect("/listings");
// }));

// app.use((err, req, res, next) => {
//     let {statusCode = 500, message = "something went wrong"} = err;
//     res.status(statusCode).render("error.ejs", { message });
// });

// app.listen(8080, () => {
//     console.log("server is listening to port 8080");
// });










// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const Listing = require("./models/listing.js");
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const wrapAsync = require("./utils/wrapAsync.js");
// const ExpressError = require("./utils/ExpressError.js");
// const { listingSchema, reviewSchema } = require("./schema.js");
// const Review = require("./models/review.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/travelLust";

// main().then(() => {
//     console.log("Connected to DB");
// }).catch((err) => {
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({extended: true}));
// app.use(methodOverride("_method"));
// app.engine('ejs', ejsMate);
// app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Hi, I am root");
// });

// const validateListing = (req, res, next) => {
//     let { error } = listingSchema.validate(req.body);
//     if(error) {
//         let errMsg = error.details.map((el) => el.message).join(",");
//         throw new ExpressError(400, errMsg);
//     }  else {
//         next();
//     }
// };

// const validateReview = (req, res, next) => {
//     let { error } = validateReview.validate(req.body);
//     if(error) {
//         let errMsg = error.details.map((el) => el.message).join(",");
//         throw new ExpressError(400, errMsg);
//     }  else {
//         next();
//     }
// };

// // index route
// app.get("/listings", wrapAsync(async(req, res) => {
//     const allListings = await Listing.find({});
//     res.render("listings/index.ejs", {allListings});
// }));

// // new route
// app.get("/listings/new", (req, res) => {
//     res.render("listings/new.ejs");
// });

// // show route
// app.get("/listings/:id", wrapAsync(async(req, res) => {
//     let {id} = req.params;
//     const listing = await Listing.findById(id).populate("reviews");
//     res.render("listings/show.ejs", { listing });
// }));

// // create route
// app.post("/listings", validateListing, wrapAsync(async(req, res, next) => {
//     let result = listingSchema.validate(req.body.listing);
//     console.log(result);
//     const newListing =  new Listing(req.body.listing);
//     await newListing.save();
//     res.redirect("/listings");
// }));

// // Edit Route
// app.get("/listings/:id/edit", wrapAsync(async(req, res) => {
//     let { id } = req.params;
//     const listing = await Listing.findById(id);
//     res.render("listings/edit.ejs", { listing });
// }));

// // update route
// app.put("/listings/:id", wrapAsync(async(req, res) => {
//     if(!req.body.listing){
//         throw new ExpressError(400, "Some valid data for listing");
//     }
//     let {id} = req.params;
//     await Listing.findByIdAndUpdate(id, {...req.body.listing});
//     res.redirect(`/listings/${id}`);
// }));

// //Delete route
// app.delete("/listings/:id", wrapAsync(async(req, res) => {
//     let {id} = req.params;
//     let deletedListing = await Listing.findByIdAndDelete(id);
//     console.log(deletedListing);
//     res.redirect("/listings");
// }));

// // review ka post route
// app.post("/listings/:id/reviews", async(req, res) => {
//     let listing = await Listing.findById(req.params.id);
//     let newReview = new Review(req.body.review);
//     listing.reviews.push(newReview);
//     await newReview.save();
//     await listing.save();
//     // console.log("new review saved");
//     // res.send("new review saved");
//     res.redirect(`/listings/${listing._id}`);
// });

// // Delete review route
// app.delete("/listings/:id/reviews/:reviewId", wrapAsync(async (req, res) => {
//     let {id, reviewId} = req.params;
//     await Listing.findByIdAndUpdate(id, {$pull: {reviews: { _id: reviewId}}});
//     await Review.findByIdAndDelete(reviewId); 
//     res.redirect(`/listings/${id}`);
// }));

// app.use((err, req, res, next) => {
//     let {statusCode = 500, message = "something went wrong"} = err;
//     // res.status(statusCode).send(message);
//     res.status(statusCode).render("error.ejs", { message });
// });

// app.listen(8080, () => {
//     console.log("server is listening to port 8080");
// });









// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const Listing = require("./models/listing.js");
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const wrapAsync = require("./utils/wrapAsync.js");
// const ExpressError = require("./utils/ExpressError.js");
// const { listingSchema, reviewSchema } = require("./schema.js");
// const Review = require("./models/review.js");

// const listings = require("./routes/listing.js");
// const reviews = require("./routes/review.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/travelLust";

// main().then(() => {
//     console.log("Connected to DB");
// }).catch((err) => {
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({extended: true}));
// app.use(methodOverride("_method"));
// app.engine('ejs', ejsMate);
// app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Hi, I am root");
// });

// app.use("/listings", listings);
// app.use("/listings/:id/reviews", reviews);

// app.use((err, req, res, next) => {
//     let {statusCode = 500, message = "something went wrong"} = err;
//     // res.status(statusCode).send(message);
//     res.status(statusCode).render("error.ejs", { message });
// });

// app.listen(8080, () => {
//     console.log("server is listening to port 8080");
// });






// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");

// const listings = require("./routes/listing.js");
// const reviews = require("./routes/review.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/travelLust";

// main().then(() => {
//     console.log("Connected to DB");
// }).catch((err) => {
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({extended: true}));
// app.use(methodOverride("_method"));
// app.engine('ejs', ejsMate);
// app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Hi, I am root");
// });

// app.use("/listings", listings);
// app.use("/listings/:id/reviews", reviews);

// app.use((err, req, res, next) => {
//     let {statusCode = 500, message = "something went wrong"} = err;
//     // res.status(statusCode).send(message);
//     res.status(statusCode).render("error.ejs", { message });
// });

// app.listen(8080, () => {
//     console.log("server is listening to port 8080");
// });






// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const session = require("express-session");
// const flash = require("connect-flash");

// const listings = require("./routes/listing.js");
// const reviews = require("./routes/review.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/travelLust";

// main().then(() => {
//     console.log("Connected to DB");
// }).catch((err) => {
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({extended: true}));
// app.use(methodOverride("_method"));
// app.engine('ejs', ejsMate);
// app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.json());

// const sessionOptions = {
//     secret: "mysupersecretcode",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
//         maxAge: 7 * 24 * 60 * 60 * 1000,
//         httpOnly: true,
//     },
// };

// app.get("/", (req, res) => {
//     res.send("Hi, I am root");
// });

// app.use(session(sessionOptions));
// app.use(flash());

// app.use((req, res, next) => {
//     res.locals.success = req.flash("success");
//     res.locals.error = req.flash("error");
//     // console.log(res.locals.success);
//     next();
// });

// app.use("/listings", listings);
// app.use("/listings/:id/reviews", reviews);

// app.use((err, req, res, next) => {
//     let {statusCode = 500, message = "something went wrong"} = err;
//     // res.status(statusCode).send(message);
//     res.status(statusCode).render("error.ejs", { message });
// });

// app.listen(8080, () => {
//     console.log("server is listening to port 8080");
// });






// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const session = require("express-session");
// const flash = require("connect-flash");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const User = require("./models/user.js");

// const listingRouter = require("./routes/listing.js");
// const reviewRouter = require("./routes/review.js");
// const userRouter = require("./routes/user.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/travelLust";

// main().then(() => {
//     console.log("Connected to DB");
// }).catch((err) => {
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({extended: true}));
// app.use(methodOverride("_method"));
// app.engine('ejs', ejsMate);
// app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.json());

// const sessionOptions = {
//     secret: "mysupersecretcode",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
//         maxAge: 7 * 24 * 60 * 60 * 1000,
//         httpOnly: true,
//     },
// };

// app.get("/", (req, res) => {
//     res.send("Hi, I am root");
// });

// app.use(session(sessionOptions));
// app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//     res.locals.success = req.flash("success");
//     res.locals.error = req.flash("error");
//     // console.log(res.locals.success);
//     next();
// });

// app.get("/demouser", async(req, res) => {
//     let fakeUser = new User({
//         email: "student@gamil.com",
//         username: "delta-student",
//     });
//     let registeredUser = await User.register(fakeUser, "helloworld");
//     res.send(registeredUser);
// });

// app.use("/listings", listingRouter);
// app.use("/listings/:id/reviews", reviewRouter);
// app.use("/", userRouter);

// app.use((err, req, res, next) => {
//     let {statusCode = 500, message = "something went wrong"} = err;
//     // res.status(statusCode).send(message);
//     res.status(statusCode).render("error.ejs", { message });
// });

// app.listen(8080, () => {
//     console.log("server is listening to port 8080");
// });









// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const session = require("express-session");
// const flash = require("connect-flash");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const User = require("./models/user.js");

// const listingRouter = require("./routes/listing.js");
// const reviewRouter = require("./routes/review.js");
// const userRouter = require("./routes/user.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/travelLust";

// main().then(() => {
//     console.log("Connected to DB");
// }).catch((err) => {
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({extended: true}));
// app.use(methodOverride("_method"));
// app.engine('ejs', ejsMate);
// app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.json());

// const sessionOptions = {
//     secret: "mysupersecretcode",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
//         maxAge: 7 * 24 * 60 * 60 * 1000,
//         httpOnly: true,
//     },
// };

// app.get("/", (req, res) => {
//     res.send("Hi, I am root");
// });

// app.use(session(sessionOptions));
// app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//     res.locals.success = req.flash("success");
//     res.locals.error = req.flash("error");
//     next();
// });

// // app.get("/demouser", async(req, res) => {
// //     let fakeUser = new User({
// //         email: "student@gamil.com",
// //         username: "delta-student",
// //     });
// //     let registeredUser = await User.register(fakeUser, "helloworld");
// //     res.send(registeredUser);
// // });

// app.use("/listings", listingRouter);
// app.use("/listings/:id/reviews", reviewRouter);
// app.use("/", userRouter);

// app.use((err, req, res, next) => {
//     let {statusCode = 500, message = "something went wrong"} = err;
//     // res.status(statusCode).send(message);
//     res.status(statusCode).render("error.ejs", { message });
// });

// app.listen(8080, () => {
//     console.log("server is listening to port 8080");
// });









// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const session = require("express-session");
// const flash = require("connect-flash");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const User = require("./models/user.js");

// const listingRouter = require("./routes/listing.js");
// const reviewRouter = require("./routes/review.js");
// const userRouter = require("./routes/user.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/travelLust";

// main().then(() => {
//     console.log("Connected to DB");
// }).catch((err) => {
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({extended: true}));
// app.use(methodOverride("_method"));
// app.engine('ejs', ejsMate);
// app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.json());

// const sessionOptions = {
//     secret: "mysupersecretcode",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
//         maxAge: 7 * 24 * 60 * 60 * 1000,
//         httpOnly: true,
//     },
// };

// // app.get("/", (req, res) => {
// //     res.send("Hi, I am root");
// // });

// app.use(session(sessionOptions));
// app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//     res.locals.success = req.flash("success");
//     res.locals.error = req.flash("error");
//     res.locals.currUser = req.user;
//     next();
// });

// app.use("/listings", listingRouter);
// app.use("/listings/:id/reviews", reviewRouter);
// app.use("/", userRouter);

// app.use((err, req, res, next) => {
//     let {statusCode = 500, message = "something went wrong"} = err;
//     // res.status(statusCode).send(message);
//     res.status(statusCode).render("error.ejs", { message });
// });

// app.listen(8080, () => {
//     console.log("server is listening to port 8080");
// });








const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const MongoStore = require('connect-mongo');
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const dbUrl = process.env.ATLASDB_URL;

main().then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24* 3600,
});

store.on("error", () => {
    console.log("Error in Mongo session store", err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

app.get("/", (req, res) => {
    res.redirect("/listings");
});

app.use((err, req, res, next) => {
    let {statusCode = 500, message = "something went wrong"} = err;
    res.status(statusCode).render("error.ejs", { message });
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});



