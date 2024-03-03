const Reviews = require("../models/review");
const Listing = require("../models/listing")

module.exports.createReview = async(req, res) =>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Reviews(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
  
    await newReview.save();
    await listing.save();
    req.flash("success", "New Reviews Created!");
    res.redirect(`/listings/${listing._id}`);
  
    // console.log("New review saved");
    // res.send("new review saved");
};

module.exports.destroyReview = async (req, res) => {
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Reviews.findByIdAndDelete(reviewId);
    req.flash("success", "Reviews Deleted!");
    res.redirect(`/listings/${id}`);
  };