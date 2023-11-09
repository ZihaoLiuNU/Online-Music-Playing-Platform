import PlayList from "../models/playList.js";
import { updateFavorite as trackUpdateFavorite ,findById as getTrack} from '../services/track-service.js';
import initArray from "../util/init.js";


//get data from controller and then create and save data in mongodb
export const save = async (newPlayList) => {
    const playList = new PlayList(newPlayList);
    return playList.save();
}

//update one PlayList by id in database and return the new PlayList to controller.
export const update = async (id, updatedPlayList) => {
    const playList = PlayList
        .findByIdAndUpdate(id, updatedPlayList, {
            new: true,
            runValidators: true
           })
        .exec();
    
    return playList;
}
//update one Track by params in database and return the new Track to controller.
export const updateByParams = async (updatedTrack) => {
    const track = Track.findOneAndUpdate({},updatedTrack, {
        new: true,
        runValidators: true
       }).exec();
    return track;
}

//update one Track by params in database and return the new Track to controller.
export const findCurList = async (params) => {
    
    try{
        const trackId = params.trackId;
        const listId = params.listId;
        const playList = await PlayList.findOne({ id: listId ,"items.track.id": trackId});
    
        
            if(!playList){//this track is new to curList
                try{
                    const track = await  getTrack(trackId)
                    if(track != null){
                        const newPlayList = await addItem({"listId":listId,"track":track});
                        return {"playList":newPlayList,"index":newPlayList.items.length-1};
                    }
                }catch(e){
                    console.log(e);
                }
              }else{ //find the track in this curList and return the index.
                let index = -1;
                playList.items.map((e,i)=>{
                    if(e.track.id === trackId )  index = i ;
                })
                return {"playList":playList,"index":index};
              }
    }catch(e){
        console.log("curFindList error");
    }
}

//init the favoriteList and curList
export const init = async () => {
     const favoriteList = await PlayList.findOne({ id: 0 });
     const curList = await PlayList.findOne({ id: 1 });

     if(!favoriteList) favoriteList = await save(initArray[0]);
     if(!curList)  curList =  await save(initArray[1]); 
    return [favoriteList,curList];
}
//add one track item in certain playlist, ignore if this one has already in this playlist. 
export const addItem = async (newItem) => {
    const targetListId = newItem.listId;
    const item = newItem.track;

    const playList = await PlayList.findOne({ id: targetListId });
     if (!playList) {
        throw new Error('do not existing playList!');
      }
      let flag = false;
      playList.items.map((e)=>{
        if( e.track.id == item.id){
            console.log(targetListId)
            flag = true;
        } 
      })

      if(!flag){
        playList.items.push({"is_local":false,"track":item});
        await playList.save();
      }
     
    return playList;
}
//remove one track item in certain playlist
export const removeItem = async (params) => {

    const targetListId = params.listId;
    const trackId = params.trackId;

    const playList = await PlayList.findOneAndUpdate(
        { id: targetListId, "items.track.id": trackId },
        { $pull:{ items: { "track.id": trackId } } },
        { new: true, upsert: false }
      );

      return playList;
}

//update one favorite status by params in database and return the new PlayList to controller.
export const updateFavorite = async (updatedPlayList) => {
    //update the track at the same time.
    trackUpdateFavorite(updatedPlayList);
   
    const trackId = updatedPlayList.filte.track_id;
    const value = updatedPlayList.update.value;
    
    const filter = {"id":id,"items.track.id":trackId };
    const update = { $set:  { [`items.$[item].track.favorite`]: value }  };
    const options = { arrayFilters: [{ "item.track.id": trackId }], new: true,
    runValidators: true };
    
    const playList = PlayList.findOneAndUpdate(filter,update,options).exec();
   
    return playList;
}
//get one PlayList by id from database and return to controller.
export const get = async (id) => {
    const playList = PlayList.findById(id).exec();
    return playList;
}
//service that get all existing PlayLists except 0 and 1 which are saved from database
export const findEx = async () => {
    const playList = PlayList.find({ id: { $nin: [0, 1] } }).exec();
    return playList;
}
//delete one PlayList by id in database and return the deleted data to controller.
export const remove = async (id) => {
    const playList = PlayList.findByIdAndRemove(id).exec();
    return playList;
}

//search one certain PlayList by different params to match in database, and return it to controller.
export const search = async (params) => {
    const playList = PlayList.find(params).exec();
    return playList;
}
//search one certain PlayList by different params to match in database, and return it to controller.
export const findByParams = async (params) => {
    const playList = PlayList.find(params).exec();
    return playList;
}
//get one PlayList by id from database and return to controller.
export const findById = async (listId) => {
    const playList = PlayList.findOne({ id: listId }).exec();
    return playList;
}