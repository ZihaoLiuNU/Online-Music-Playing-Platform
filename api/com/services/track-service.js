import Track from "../models/track.js";

//get data from controller and then create and save data in mongodb
export const save = async (newTrack) => {
    console.log(newTrack);
    const track = new Track(newTrack);
    return track.save();
}

//update one Track by id in database and return the new Track to controller.
export const update = async (id, updatedTrack) => {
    const track = Track
        .findByIdAndUpdate(id, updatedTrack, {
            new: true,
            runValidators: true
           })
        .exec();
    
    return track;
}
//update one Track by params in database and return the new Track to controller.
export const updateByParams = async (updatedTrack) => {
    const track = Track.findOneAndUpdate({},updatedTrack, {
        new: true,
        runValidators: true
       }).exec();
    return track;
}

//update one Track favorite status by params in database and return the new Track to controller.
export const updateFavorite = async (updatedTrack) => {

    const id = updatedTrack.filte.track_id;
    const value = updatedTrack.update.value;

    const track = Track.findOneAndUpdate({"id":id},{$set:{"favorite":value}}, {
        new: true,
        runValidators: true
       }).exec();
    return track;
}

//get one Track by id from database and return to controller.
export const get = async (id) => {
    const track = Track.findById(id).exec();
    return track;
}
//get one Track by id from database and return to controller.
export const findById = async (trackId) => {
    const track = Track.findOne({ id: trackId }).exec();
    return track;
}

//delete one Track by id in database and return the deleted data to controller.
export const remove = async (id) => {
    const track = Track.findByIdAndRemove(id).exec();
    return track;
}

//search one certain Track by different params to match in database, and return it to controller.
export const search = async (params) => {
    const track = Track.find(params).exec();
    return track;
}
//search one certain Track by different params to match in database, and return it to controller.
export const findByParams = async (params) => {
    const track = Track.find(params).exec();
    return track;
}
//get tracks by artist id from database and return to controller.
export const findByArt = async (params) => {
    const track = Track.find({ 'artists': { $elemMatch: { 'id': params.id } } }).exec();
    return track;
}
//get tracks by Album id from database and return to controller.
export const findByAlbum = async (params) => {
    const track = Track.find({ 'album.id':params.id  }).exec();
    return track;
}
//get tracks by blur name from database and return to controller.
export const findByName = async (key) => {
    const tracks = Track.find({ name: { $regex: `^${key}`, $options: 'i'  } }).exec();
    return tracks;
}


