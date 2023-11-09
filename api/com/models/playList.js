import mongoose from "mongoose";
import {trackSchema} from "./track.js"

//the schema design of item in playList
const  itemSchema = new mongoose.Schema({
    track:{type: trackSchema,required: true},
    is_local:{
        type: Boolean,
        default:false
    },
})
//the schema design of img in playList
const  imgSchema = new mongoose.Schema({
    url:{type: String}
})
//the schema design of playList in mongodb
export const playListSchema = new mongoose.Schema({
//set the required as true means user must provide this attribute.
    id: {type: String,required: true, trim:true}, 
    name:{type:String,trim:true},
    image:{type:String,trim:true},
    total:{type:Number,default:0},
    images:{type:[imgSchema]},
    items:{type:[itemSchema]}
});

//initial the PlayList model 
const PlayList = mongoose.model("PlayList", playListSchema);

export default PlayList;