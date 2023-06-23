import mongoose from "mongoose";
import { IReview } from "../../interfaces/review.interface";

const reviewSchema = new mongoose.Schema({
  beerId: "number",
  rating: "string",
  content: "string",
});

const Review = mongoose.model<IReview>("review", reviewSchema);

export default Review;
