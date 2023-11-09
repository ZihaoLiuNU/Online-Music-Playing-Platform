import mongoose from "mongoose";

import {artistSchema} from "./artist.js";
//the schema design of image
const  imageSchema = new mongoose.Schema({
    url:{type: String,trim:true,required: true}
})

//the schema design of album in mongodb
export const albumSchema = new mongoose.Schema({
//set the required as true means user must provide this attribute.
    id: {type: String,required: true, trim:true}, 
    name: {type: String,required: true, trim:true},
    images:{type:[imageSchema]},
    artists:{
        type: [artistSchema]
    },
    total_tracks:{type:Number,default:5},
    release_date:{type: String}
});

//initial the Album model 
const Album = mongoose.model("Album", albumSchema);

export default Album;