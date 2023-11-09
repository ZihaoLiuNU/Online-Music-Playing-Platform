import mongoose from "mongoose";



//the schema design of artist in mongodb
export const artistSchema = new mongoose.Schema({
//set the required as true means user must provide this attribute.
    id: {type: String,required: true, trim:true}, 
    name: {type: String,required: true, trim:true},
    type:{type:String,default:"artist"},
    image:{type:String,trim:true},
    followers:{type:Number,default:41235}
});

//initial the Artist model 
const Artist = mongoose.model("Artist", artistSchema);

export default Artist;