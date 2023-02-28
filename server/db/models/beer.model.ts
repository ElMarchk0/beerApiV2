import mongoose from "mongoose";
import { IBeer } from "../interfaces/beer.interface";

const beerSchema = new mongoose.Schema({
  name: "string",
  description: "string",
  beerId: "number",
  brand: "string",
  ABV: "number",
});

const Beer = mongoose.model<IBeer>("beer", beerSchema);

export default Beer;
