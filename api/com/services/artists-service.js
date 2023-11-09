import Artist from "../models/artist.js";

//get data from controller and then create and save data in mongodb
export const save = async (newArtist) => {
    console.log(newArtist);
    const artist = new Artist(newArtist);
    return artist.save();
}

//update one Artist by id in database and return the new Artist to controller.
export const update = async (id, updatedArtist) => {
    const artist = Artist
        .findByIdAndUpdate(id, updatedArtist, {
            new: true,
            runValidators: true
           })
        .exec();
    
    return artist;
}
//update one Artist by params in database and return the new Artist to controller.
export const updateByParams = async (updatedArtist) => {
    const artist = Artist.findOneAndUpdate({},updatedArtist, {
        new: true,
        runValidators: true
       }).exec();
    return artist;
}
//get one Artist by id from database and return to controller.
export const get = async (id) => {
    const artist = Artist.findById(id).exec();
    return artist;
}
//get one Artist by id from database and return to controller.
export const findById = async (artistId) => {
    console.log(artistId)
    try{
        const artist = Artist.findOne({ id: artistId }).exec();
        return artist;
    }catch(e){
     
    }
}
//delete one Artist by id in database and return the deleted data to controller.
export const remove = async (id) => {
    const artist = Artist.findByIdAndRemove(id).exec();
    return artist;
}

//search one certain Artist by different params to match in database, and return it to controller.
export const search = async (params) => {
    const artist = Artist.find(params).exec();
    return artist;
}
//search one certain Artist by different params to match in database, and return it to controller.
export const findByParams = async (params) => {
    const artist = Artist.find(params).exec();
    return artist;
}
//get one Artist by blur name from database and return to controller.
export const findByName = async (key) => {
    const artists = Artist.find({ name: { $regex: `^${key}`, $options: 'i'  } }).exec();
    return artists;
}

