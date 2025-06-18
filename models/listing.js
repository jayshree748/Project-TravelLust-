// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const listingSchema = new Schema({
//     title:{
//         type: String,
//         required: true,
//     },
//     description: String,
//     image: {
//         filename: String,
//         url: {
//             type: String,
//             default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fstock-photos%2Fnature-and-landscapes&psig=AOvVaw3HOhBzL0qK6NvF2WsgJmMG&ust=1748684442917000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDZhqnzyo0DFQAAAAAdAAAAABAE",
//             set: (v) => v === " " ?  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fstock-photos%2Fnature-and-landscapes&psig=AOvVaw3HOhBzL0qK6NvF2WsgJmMG&ust=1748684442917000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDZhqnzyo0DFQAAAAAdAAAAABAE" : v,
//         },
//     },
//     price: Number,
//     location: String,
//     country: String,
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;








const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url: String, 
        filename: String,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            // type: Schema.Types.ObjectId,
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing) {
        await Review.deleteMany({_id: { $in: listing.reviews }});
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;








