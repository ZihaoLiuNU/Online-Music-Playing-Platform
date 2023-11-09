import mongoose from "mongoose";
import {artistSchema} from "./artist.js";
import {albumSchema} from "./album.js";

//the schema design of track in mongodb
export const trackSchema = new mongoose.Schema({
    name: {type: String,required: true,trim:true}, 
    album:{type:albumSchema},
    id: {type: String,required: true,trim:true},
    artists:{
        type: [artistSchema]
    },
    duration_ms:{
        type:Number,
        default:0
    },
    favorite:{type:Boolean,default:false},
    is_local:{
        type: Boolean,
        default:false
    },
    preview_url:{type:String,trim:true},
    type:{type:String,default:"track"}
});

//initial the Track model 
const Track = mongoose.model("Track", trackSchema);

export default Track;